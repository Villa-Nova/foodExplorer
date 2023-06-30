import { Copyright } from "@phosphor-icons/react";

import { Container, FooterLogo, FooterCopyright } from "./styles";
import footerLogo from "../../assets/footerLogo.svg"

export function Footer() {
  return (
    <Container>
      <div>
        <FooterLogo>
          <img src={footerLogo} alt="Logo de rodapé, food explorer" />

          <span>footer explorer</span>
        </FooterLogo>

        <FooterCopyright>
          <Copyright size={14} />

          <span>
            2023 - Todos os direitos reservados.
          </span>
        </FooterCopyright>
      </div>
    </Container>
  )
};