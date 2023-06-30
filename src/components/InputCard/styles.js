import { styled } from "styled-components";

export const Container  = styled.div`
  width: 100%;
`;

export const Title = styled.span`
  display: block;
  margin-bottom: 1.6rem;

  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 100%;

  color: ${({ theme }) => theme.COLORS.LIGHT_400};
`;