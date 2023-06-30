import { UploadSimple } from "@phosphor-icons/react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Container, Form, DishImgUpload, FirstLine, SecondLine, Select, LastLine } from "./styles";
import { Header } from "../../components/Header";
import { BackButton } from "../../components/BackButton";
import { Input } from "../../components/Input";
import { DishEditSection } from "../../components/DishEditSection";
import { InputCard } from "../../components/InputCard";
import { Footer } from "../../components/Footer";
import { ListItem } from "../../components/ListItem";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";

import { api } from "../../services/api";

export function Edit() {
  const navigate = useNavigate();
  const params = useParams();

  const [data, setData] = useState(null);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredients, setNewIngredients] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredients]);
    setNewIngredients("");
  };

  function handleRemoveIngredients(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
  };

  async function handleEditDish() {
    if(!image || !title || !category || !ingredients || !price || !description) {
      return alert("Preencha todos os campos para poder finalizar!");
    };
    
    if(newIngredients) {
      return alert("Adição de ingrediente não finalizada. Clique em adicionar!");
    };

    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);

    ingredients.forEach(ingredient => (
      formData.append("ingredients", ingredient)
    ))

    await api
      .put(`/dishes/${params.id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
        },
      )
      .then(
        alert("Prato atualizado com sucesso!"), 
        navigate("/")
      )
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Erro ao atualizar o prato!");
        };
      });  
  };

  useEffect(() => {
    async function getDish() {
      const response = await api.get(`/dishes/${params.id}`);
      setData(response.data);
        
      const { title, description, category, price, ingredients } = response.data;

      setTitle(title);
      setCategory(category);
      setIngredients(ingredients.map(ingredient => ingredient.name));
      setPrice(price);
      setDescription(description);
    };

    getDish();
  }, []);

  async function handleRemoveDish() {
      await api.delete(`/dishes/${params.id}`)
        .then(() => {
          alert("Item removido com sucesso!");
          navigate("/");
        });
  };

  return (
    <Container>
      <Header/>

      <main>
          <Form>
            <BackButton />

            {
              data &&

              <DishEditSection title="Editar prato">
                <FirstLine>
                  <DishImgUpload>
                    <span>Imagem do prato</span>

                    <label htmlFor="fileImg">
                      <UploadSimple size={24}/>

                      {
                        image?
                        <span>Selecionada</span>
                        :
                        <span>Selecione Imagem</span>
                      }

                      <input 
                        type="file" 
                        id="fileImg" 
                        placeholder="Selecione imagem"
                        onChange={e => setImage(e.target.files[0])} 
                      />
                    </label>
                  </DishImgUpload>

                  <InputCard title="Nome">
                    <Input 
                      type="text" 
                      placeholder="Salada Ceasar" 
                      onChange={e => setTitle(e.target.value)} 
                    />
                  </InputCard>

                  <InputCard title="Categoria">
                    <Select>
                      <select defaultValue={"default"} onChange={e => setCategory(e.target.value)} >
                        <option value="default" disabled>Refeição</option>
                        <option value="refeição">Refeições</option>
                        <option value="sobremesa">Sobremesas</option>
                        <option value="bebida">Bebidas</option>
                      </select>
                    </Select>
                  </InputCard>            
                </FirstLine>

                <SecondLine>
                  <InputCard title="Ingredientes">
                    <div className="IngredientsSection">
                      {
                        ingredients.map((ingredient, index) => (
                          <ListItem 
                            key={String(index)}
                            value={ingredient}
                            onClick={() => handleRemoveIngredients(ingredient)}
                          />
                        ))
                      }
                      <ListItem 
                        isNew
                        placeholder="Novo item" 
                        value={newIngredients}
                        onChange={e => setNewIngredients(e.target.value)}
                        onClick={handleAddIngredient}
                      />
                    </div>
                  </InputCard>

                  <InputCard title="Preço">
                    <Input 
                      type="text" 
                      placeholder="R$ 00,00"
                      onChange={e => setPrice(e.target.value)}
                    />
                  </InputCard>
                </SecondLine>

                <LastLine>
                  <InputCard title="Descrição">
                    <Textarea 
                      placeholder="A Salada César é uma opção refrescante para o verão." 
                      onChange={e => setDescription(e.target.value)} 
                    />
                  </InputCard>
                </LastLine>

                <div className="formCommitBtn">
                  <div className="excluirBtn">
                    <Button title="Excluir prato" onClick={handleRemoveDish} />
                  </div>

                  <div className="commitBtn">
                    <Button title="Salvar alterações" onClick={handleEditDish}/>
                  </div>
                </div>
              </DishEditSection>
            }
          </Form>
      </main>

      <Footer/>
    </Container>
  )
}