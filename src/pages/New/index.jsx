import { UploadSimple, CaretDown } from "@phosphor-icons/react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Form, DishImgUpload, FirstLine, MidLine, Select, LastLine } from "./styles";
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

export function New() {
  const [ ingredients, setIngredients ] = useState([]);
  const [ newIngredients, setNewIngredients ] = useState("");

  const [ image, setImage ] = useState(null);
  const [ title, setTitle ] = useState("");
  const [ category, setCategory ] = useState("");
  const [ price, setPrice ] = useState("");
  const [ description, setDescription ] = useState("");

  const navigate = useNavigate();

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredients]);
    setNewIngredients("");
  };

  function handleRemoveIngredients(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
  };

  async function handleNewDish() {
    
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
      .post("/dishes", formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
        },

        navigate("/"),
      )
      .then(alert("Prato adicionado com sucesso!"))
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Erro ao criar o prato!");
        };
      });  
  };

  return (
    <Container>
      <Header/>

      <main>
        <Form>
          <BackButton />

          <DishEditSection title="Adicionar prato">
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
                  placeholder="Ex.: Salada Ceasar"
                  onChange={e => setTitle(e.target.value)} 
                />
              </InputCard>

              <InputCard title="Categoria">
                <Select>
                  <select defaultValue={"default"} onChange={e => setCategory(e.target.value)} >
                    <option value="default" disabled>Refeições</option>
                    <option value="refeição">Refeição</option>
                    <option value="sobremesa">Sobremesa</option>
                    <option value="bebida">Bebida</option>
                  </select>
                </Select>
              </InputCard>            
            </FirstLine>

            <MidLine>
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
            </MidLine>

            <LastLine>
              <InputCard title="Descrição">
                <Textarea 
                  placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                  onChange={e => setDescription(e.target.value)} 
                />
              </InputCard>
            </LastLine>

            <div className="formCommitBtn">
              <div className="commitBtn">
                <Button title="Salvar alterações" onClick={handleNewDish}/>
              </div>
            </div>
          </DishEditSection>
        </Form>
      </main>

      <Footer/>
    </Container>
  )
}