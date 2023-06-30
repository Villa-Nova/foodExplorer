import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  position: relative;
  border-bottom: 1px solid #000;

  > footer {
    position: absolute;
    bottom: 0px;
  }
`;

export const BoxContent = styled.div`
  margin: 2.4rem auto 20rem;
  width: fit-content;

  @media (max-width: 769px) {
    margin: 2.4rem auto 20rem;
  }
`;

export const Content = styled.main`
  margin-top: 4.2rem;

  display: flex;
  gap: 4rem;

  > section:first-child {
    > div {
      width: 39.6rem;
      height: 39.6rem;

      border-radius: 50%;
      
      overflow: hidden;
      
      > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    @media (max-width: 956px) {
      > div {
        width: 26.4rem;
        height: 26.4rem;
      }
    }
  }

  @media (max-width: 956px) {
    margin-left: 5.6rem;
    margin-right: 5.6rem;

    flex-direction: column;
    align-items: center;

    text-align: center;

    > section:first-child {
      > div {
        width: 26.4rem;
      }
    }
  }
`;

export const TextContent = styled.div`
  > h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 4rem;
    line-height: 140%;

    margin-bottom: 2.4rem;
  }

  > p {
    font-family: 'Poppins' sans-serif;
    font-weight: 400;
    font-size: 2.4rem;
    line-height: 140%;

    margin-bottom: 2.4rem;
  }

  @media (max-width: 768px) {
    > h2 {
      font-weight: 500;
      font-size: 2.6rem;
    }

    > p {
      font-size: 1.6rem;
      line-height: 140%;
    }
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.4rem;

  margin-bottom: 4.8rem;
`;

export const OrderPlace = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 3.3rem;

  > button {
    width: fit-content;
    max-width: 20rem;
  }

  @media (max-width: 768px) {
    > button {
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.6rem;
    }
  }

  @media (max-width: 425px) {
    > button {
      width: 100%;
      max-width: 100%;
    }
  }
`;

export const DisplayQuantity = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  > div {
    > span {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-family: 'Roboto', sans-serif;
      font-weight: 700;
      font-size: 2rem;
      line-height: 160%;
    }
  }
`;