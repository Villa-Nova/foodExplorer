import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";//State creation.

import { api } from "../../services/api"//Connection backEnd.
import { Box, Container, Content, Form, Logo } from "./styles";
import { InputCard } from "../../components/InputCard";
import { Button } from "../../components/Button";
import logoImg from "../../assets/foodLogo.svg";

export function SignUp() {

  //data capture hooks
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if(!name || !email || !password) {
      return alert("Preencha todos os campos");
    };

    if(password.length < 6) {
      return alert("A senha deve conter no minimo seis caracteres");
    };

    api.post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/");
      })
      .catch(error => {
        if(error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível realizar o cadastro.");
        };
      });
  };

  return (
    <Container>
      <Content>
        <Logo>
          <div>
            <img src={logoImg} alt="Logo footer explorer."/>
          </div>
          
          <span>
            food explorer
          </span>
        </Logo>

        <main>
          <h2>Crie sua conta</h2>

          <Form>
            <Box>
              <InputCard title="Seu nome">
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Exemplo: Maria da Silva"
                  onChange={(e) => setName(e.target.value)} 
                />
              </InputCard>

              <InputCard title="Email">
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Exemplo: exemplo@exemplo.com.br"
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </InputCard>

              <InputCard title="Senha">
                <input 
                  type="password" 
                  id="password" 
                  placeholder="No mínimo 6 caracteres"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputCard>

              <Button title="Criar conta" onClick={handleSignUp}/>
            </Box>
          </Form>

          <Link to="/">Já tenho uma conta</Link>
        </main>
      </Content>
    </Container>
  )
}