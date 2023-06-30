import { Container, Title } from "./styles";

export function InputCard({ title = "", children, ...rest }) {
  return (
    <Container {...rest}>
      <Title>
        { title }
      </Title>

      { children }
    </Container>
  )
}