import { CaretLeft } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom"; 

import { Container } from "./styles";

export function BackButton() {
  const navigate = useNavigate();

  function backPage() {
    return navigate(-1)
  };

  return (
    <Container>
      <button type="button" onClick={backPage}>
        <div>
          <CaretLeft />
        </div>

        <span>voltar</span>
      </button>
    </Container>
  )
}