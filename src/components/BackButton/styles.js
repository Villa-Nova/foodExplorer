import { styled } from "styled-components";

export const Container = styled.div`
  > button {
    background: transparent;
    border: none;

    display: flex;
    align-items: center;


    > div {
      width: 32px;
      height: 32px;

      > svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-size: 3.2rem;
      }
    }

    > span {
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 2.4rem;
      line-height: 140%;

      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
  }
`;