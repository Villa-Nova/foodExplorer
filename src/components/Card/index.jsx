import { HeartStraight, Plus, Minus, PencilSimple } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useAuth } from "../../hooks/auth";
import { Container, Image, Favorite, Product, BodyCard, Price, OrderPlace, DisplayQuantity } from "./styles";
import { Button } from "../Button";
import { ButtonIcon } from "../ButtonIcon";
import img3 from "../../assets/image3.png";

import { api } from "../../services/api";

export function Card({ data, ...rest }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [total, setTotal] = useState(1);
  const imageURL = data.image ? `${api.defaults.baseURL}/files/${data.image}` : img3;

  function moreAmountOrder() {
    return setTotal(total + 1);
  };

  function lessAmountOrder() {
    return setTotal(prevState => prevState === 0 ? 
      prevState = 0 : 
      prevState - 1 
    );
  };

  function editNavigate() {
    navigate(`/edit/${data.id}`);
  };

  function addAlert() {
    return alert("Prato incluído no carrinho 😉");
  };

  return (    
    <Container {...rest} >
      {
        user.isAdmin ?

        <>
          <Favorite onClick={editNavigate}>
            <PencilSimple color="#E1E1E6" size={24}/>
          </Favorite>

          <BodyCard>
            <Image to={`/details/${data.id}`} >
              <img src={imageURL} alt="Foto da refeição disponivél" />
            </Image>

            <div>
              <Product to={`/details/${data.id}`} >
                <h3>{data.title}<span> {">"} </span></h3>
                <p>{data.description.substring(0, 54)}</p>
              </Product>

              <Price>
                <span>R$ {data.price}</span>
              </Price>
            </div>
          </BodyCard>
        </>

        :

        <>
          <Favorite>
            <HeartStraight color="#E1E1E6" size={24}/>
          </Favorite>

          <BodyCard>
            <Image to={`/details/${data.id}`}>
              <img src={imageURL} alt="Foto da refeição disponivél" />
            </Image>

            <div>
              <Product to={`/details/${data.id}`}>
                <h3>{data.title}<span> {">"} </span></h3>
                <p>{data.description.substring(0, 54)}</p>
              </Product>

              <Price>
                <span>R$ {data.price}</span>
              </Price>
            </div>

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

              <Button title="incluir" onClick={addAlert}/>
            </OrderPlace>
          </BodyCard>
        </>
      }
    </Container>
  )
};