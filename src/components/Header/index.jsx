import { MagnifyingGlass, SignOut, Receipt, List } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { Container, Logo, InputSearch, Content, Logout } from "./styles";
import { Button } from "../Button";
import foodLogo from "../../assets/foodLogo.svg";

export function Header({search, ...rest}) {
  const { user, signOut } = useAuth();

  const navigate = useNavigate();

  function navigateNew() {
    return navigate("/new");
  };

  return(
    <Container {...rest} >
      {
        user.isAdmin ?

        <Content>
          <List size={30} />

          <Logo to="/">
            <img className="logo_img" src={foodLogo} alt="Logo do food explorer." />

            <div className="logo_title">
              <span>
                food explorer
              </span>
              <p className="logo_admin">
                admin
              </p>
            </div>
          </Logo>

          <InputSearch>
            <MagnifyingGlass color="#C4C4CC" size={21}/>

            <input type="text" placeholder="Busque por pratos ou ingredientes" onChange={e => {search(e.target.value)}}/>
          </InputSearch>

          <div className="header_btn">
            <Button title="Novo prato" onClick={navigateNew} />
          </div>

          <Logout type="button" onClick={signOut} >
            <SignOut size={22} className="logout_signOut"/>
          </Logout>
        </Content> 

        :

        <Content>
          <List size={30} />

          <Logo to="/">
            <img className="logo_img" src={foodLogo} alt="Logo do food explorer." />

            <div className="logo_title">
              <span>
                food explorer
              </span>
            </div>
          </Logo>

          <InputSearch>
            <MagnifyingGlass color="#C4C4CC" size={21}/>

            <input type="text" placeholder="Busque por pratos ou ingredientes" onChange={e => {search(e.target.value)}}/>
          </InputSearch>

          <div className="header_btn">
            <Button icon={Receipt} title="Meu pedido (0)"/>
          </div>

          <Logout>
            <SignOut 
              size={22} 
              className="logout_signOut" 
              type="button" 
              onClick={signOut}
            />
            <Receipt size={30} className="logout_receipt"/>
          </Logout>
        </Content>
      }
    </Container>
  );
};