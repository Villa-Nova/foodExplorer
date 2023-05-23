import { MagnifyingGlass, SignOut, Receipt } from "@phosphor-icons/react";

import { Container, Logo, InputSearch, Content, Logout, MenuHamburger } from "./styles"
import { Button } from "../Button";
import foodLogo from "../../assets/foodLogo.svg"


export function Header() {

  function menuHamburger() {
    document.querySelector(".menuHamburger").classList.toggle("active");
    document.querySelector(".menuHamburger").classList.toggle("noActive");
  };

  return(
    <Container>
      <MenuHamburger className="menuHamburger noActive" id="menuHamburger" onClick={menuHamburger}>
        <li></li>
        <li></li>
        <li></li>
      </MenuHamburger>

      <Content>
        <Logo>
          <img className="logo_img" src={foodLogo} alt="Logo do food explorer." />

          <div className="logo_title">
            <span>
              food explorer
            </span>
          </div>
        </Logo>

        <InputSearch className="header_input_search">
          <MagnifyingGlass color="#C4C4CC" size={21}/>

          <input type="text" className="input_search_input" placeholder="Busque por pratos ou ingredientes"/>
        </InputSearch>

        <div className="header_btn">
          <Button icon={Receipt} title="Meu pedido (0)"/>
        </div>

        <Logout className="logout">
          <SignOut size={22}/>
        </Logout>
      </Content>      
    </Container>
  );
};