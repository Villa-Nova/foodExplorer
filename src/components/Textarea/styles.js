import { styled } from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 17.2rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_800};

  border-radius: .8rem;
  border: none;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  resize: none;

  padding: 1.4rem;

  &::placeholder {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 100%;

    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`;