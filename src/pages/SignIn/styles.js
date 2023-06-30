import { styled } from "styled-components";

export const Container = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;

  padding: 1rem;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 109.6rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > main {
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    border-radius: 1.6rem;
    padding: 6.4rem;

    @media (max-width: 768px) {
      background: transparent;
    }

    > h2:nth-child(1) {
      text-align: center;

      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 3.2rem;
      line-height: 140%;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      margin-bottom: 3.2rem;

      @media (max-width: 768px) {
        display: none;
      }
    }

    > a:nth-child(3) {
      text-align: center;

      display: block;

      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 2.4rem;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      margin-top: 3.2rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 47.6rem;
`;

export const Box = styled.div`
  > div {
    margin-bottom: 3.2rem;

    > span {
      margin-bottom: .8rem;
    }
  }
`;

export const Input = styled.input`
  border: none;
  border-radius: .8rem;
  padding: 12px 14px;

  width: 34.8rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  @media (max-width: 768px) {
    width: 30rem;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.8rem;

  >div {
    width: 5rem;
    height: 5rem;
    
    @media (max-width: 768px) {
      width: 4rem;
      height: 4rem;
    }

    > img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }

  > span {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 4.2rem;
    line-height: 4.9rem;

    @media (max-width: 768px) {
      font-size: 3.6rem;
      line-height: 4.4rem;
    }
  }
`;