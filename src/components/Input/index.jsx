import { Container } from "./styles.js";

export function Input({ icon: Icon, ...rest}) {
  return (
    <Container>
      <button type="button">
        {Icon && <Icon size={24} />}
      </button>
      
      <input {...rest} />
    </Container>
  )
}
