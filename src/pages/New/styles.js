import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  position: relative;

  border-bottom: 0.5px solid #000;

  > footer {
    position: absolute;
    bottom: 0;
  }
`;

export const Form = styled.form`
  width: 100%;

  margin: 4rem auto 11.6rem;
  padding: 1.6rem 12.3rem 11.6rem;

  @media (max-width: 826px) {
    padding: 1.6rem;
  }

  .formCommitBtn {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    margin-top: 3.2rem;

    .commitBtn {
      > button {
        background-color: ${({theme }) => theme.COLORS.TOMATO_400};
      }
    }
  }
`;

export const FirstLine = styled.section`
  display: flex;
  align-items: center;
  gap: 3.2rem;

  margin-bottom: 3.2rem;

  > div:nth-child(2) {
    width: 100%;
    max-width: 100%;
  }

  > div:nth-child(3) {
    width: 100%;
    max-width: 36.4rem; 
  }

  @media (max-width: 601px) {
    flex-direction: column;

    > div:nth-child(3) {
      width: 100%;
      max-width: 100%; 
    }
  }
`;

export const DishImgUpload = styled.div`
  width: fit-content;

  > span {
    display: block;
    margin-bottom: 1.6rem;

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 100%;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > label {
    cursor: pointer;

    width: 22.9rem;
    height: 4.8rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: .8rem;

    padding: 1.2rem 3.2rem;
    border-radius: .8rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_800};

    > svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    > span {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    > input {
      width: 0;
      height: 0;
      margin: -1px;
      background: transparent;
      border: none;
      display: none;
    }
  }

  @media (max-width: 601px) {
    width: 100%;

    > label {
      width: 100%;
    }
  }
`;

export const Select = styled.div`
  width: 100%;

  > select {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearence: none;
    appearance: none;
    outline: 0;
    box-shadow: none;
    border: none;
    
    width: 100%;
    height: 4.8rem;
    
    border-radius: .5rem;
    padding: 1.2rem 1.6rem;
    
    background-color: ${({ theme }) => theme.COLORS.DARK_800};

    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 160%;

    &::-ms-expand {
      display: none;
    }
  }
`;

export const MidLine = styled.section`
  display: flex;
  align-items: center;
  gap: 3.2rem;

  margin-bottom: 3.2rem;

  .IngredientsSection {
    width: 100%;
    max-height: 110px;

    padding: .8rem;
    border-radius: .8rem;

    overflow: auto;

    background-color: ${({ theme }) => theme.COLORS.DARK_800};

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    gap: 1rem;
  }

  > div:nth-child(2) {
    width: 100%;
    max-width: 25rem;
  }

  @media (max-width: 601px) {
    flex-direction: column;
    
    > div:nth-child(2) {
      max-width: 100%;
    }
  }
`;

export const LastLine = styled.section`
  width: 100%;
`;