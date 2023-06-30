import { Container, Title, Content } from "./styles";

export function DishEditSection({ title, children, ...rest }) {
  return (
    <Container {...rest}>
      <Title {...rest}>
        <h2>{ title }</h2>
      </Title>

      <Content {...rest}>
        { children }
      </Content>
    </Container>
  )
}