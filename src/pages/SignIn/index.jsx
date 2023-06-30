import { Link } from "react-router-dom";

import { Box, Container, Content, Form, Logo, Input } from "./styles";
import { InputCard } from "../../components/InputCard";
import { Button } from "../../components/Button";
import logoImg from "../../assets/foodLogo.svg";

import { useState } from "react";
import { useAuth } from "../../hooks/auth";

export function SignIn() {

  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
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
          <h2>Faça login</h2>

          <Form>
            <Box>
              <InputCard title="Email">
                <Input 
                  type="email" 
                  id="email" 
                  placeholder="Exemplo: exemplo@exemplo.com.br"
                  onChange={e => setEmail(e.target.value)} 
                />
              </InputCard>

              <InputCard title="Senha">
                <Input 
                  type="password" 
                  id="password" 
                  placeholder="No mínimo 6 caracteres"
                  onChange={e => setPassword(e.target.value)}
                />
              </InputCard>

              <Button title="Entrar" onClick={handleSignIn}/>
            </Box>
          </Form>

          <Link to="/register">Criar uma conta</Link>
        </main>
      </Content>
    </Container>
  )
}