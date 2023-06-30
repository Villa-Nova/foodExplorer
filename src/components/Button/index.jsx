import { Container } from "./styles";

export function Button({ icon: Icon, title, loading = false, data, src, ...rest }) {
  return(
    <Container 
      type="button" 
      {...rest}
    >
      <img src={src} />
      {Icon && <Icon size={21} />}
      {loading ? "Carregando..." : title}
    </Container>
  );
};