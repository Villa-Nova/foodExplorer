import { MagnifyingGlass, SignOut, Receipt, List } from "@phosphor-icons/react";

import { Container, Logo, InputSearch, Content, Logout } from "./styles"
import { Button } from "../Button";
import foodLogo from "../../assets/foodLogo.svg"


export function Header() {

  let isAdmin = false;

  return(
    <Container>
      {
        isAdmin ?

        <Content>
          <List size={30} />

          <Logo>
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

            <input type="text" placeholder="Busque por pratos ou ingredientes"/>
          </InputSearch>

          <div className="header_btn">
            <Button title="Novo prato"/>
          </div>

          <Logout>
            <SignOut size={22} className="logout_signOut"/>
          </Logout>
        </Content> 

        :

        <Content>
          <List size={30} />

          <Logo>
            <img className="logo_img" src={foodLogo} alt="Logo do food explorer." />

            <div className="logo_title">
              <span>
                food explorer
              </span>
            </div>
          </Logo>

          <InputSearch>
            <MagnifyingGlass color="#C4C4CC" size={21}/>

            <input type="text" placeholder="Busque por pratos ou ingredientes"/>
          </InputSearch>

          <div className="header_btn">
            <Button icon={Receipt} title="Meu pedido (0)"/>
          </div>

          <Logout>
            <Receipt size={30} className="logout_receipt"/>
            <SignOut size={22} className="logout_signOut"/>
          </Logout>
        </Content>
      }
    </Container>
  );
};