import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;

  border-radius: .5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.COLORS.DARK_800};

  > button {
    background: none;
    border: none;

    > svg {
      display: block;
      margin: .8rem;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  > input {
    width: 100%;
    height: 4.8rem;

    padding: 1.2rem 1.6rem;
    border: none;

    background: transparent;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.4rem;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 100%;
    }
  }
`;