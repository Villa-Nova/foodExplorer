import { Minus, Plus } from "@phosphor-icons/react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { BoxContent, Container, Content, DisplayQuantity, OrderPlace, Tags, TextContent } from "./styles";
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/Button";
import { ButtonIcon } from "../../components/ButtonIcon";
import { BackButton } from "../../components/BackButton";
import { Tag } from "../../components/Tag";
import Img3 from "../../assets/image3.png";

import { api } from "../../services/api";

export function Details() {
  const { user } = useAuth();

  const params = useParams();
  const [data, setData] = useState();
  const [total, setTotal] = useState(1);
  const imageURL = data && `${api.defaults.baseURL}/files/${data.image}`;

  useEffect(() => {
    async function getDishDetail() {
      const response = await api.get(`/dishes/${params.id}`);
      return setData(response.data);
    };
    
    getDishDetail();
  }, []);

  function moreAmountOrder() {
    return setTotal(total + 1);
  };

  function lessAmountOrder() {
    return setTotal(prevState => prevState === 0 ? 
      prevState = 0 : 
      prevState - 1 
    );
  };

  function addAlert() {
    return alert("Prato incluído no carrinho 😉")
  };

  return (
    <Container>
      <Header />

      <BoxContent>

        <BackButton/>

        {
          data &&

          <Content>
            <section>
              <div>
                <img src={imageURL? imageURL: Img3} alt="Imagem da refeição selecionada." />
              </div>
            </section>

            <section>
              <TextContent>
                <h2>{data.title}</h2>
                <p>
                  {data.description}
                </p>
              </TextContent>

              <Tags>
                {
                  data && data.ingredients.map(ingredient => (
                    <Tag
                      key={String(ingredient.id)}
                      title={ingredient.name} 
                    />
                  ))
                }
              </Tags>

              {
                user.isAdmin ?

                <OrderPlace to={`/edit/${data.id}`} >
                  <Button title="Editar prato" />
                </OrderPlace>

                :

                <OrderPlace>
                  <DisplayQuantity>
                    <ButtonIcon icon={Minus} onClick={lessAmountOrder} />
                      
                    <div>
                      <span>
                        0{total}
                      </span>
                    </div>

                    <ButtonIcon icon={Plus} onClick={moreAmountOrder} />
                  </DisplayQuantity>

                  <Button title={`R$ ${data.price}`} onClick={addAlert} />
                </OrderPlace>
              }
            </section>
          </Content>
        }
      </BoxContent>

      <Footer />
    </Container>
  )
}