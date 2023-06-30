import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  padding: 2.4rem 2.4rem 4.6rem;

  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  border-radius: .8rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_200};

  position: relative;

  @media (max-width: 1024px) {
    padding-bottom: 2.4rem;
  }
`;

export const BodyCard = styled.div`
  max-width: 25.4rem;
  width: 30.4rem;

  @media (max-width: 1024px) {
    width: 18rem;
    height: 292px;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Favorite = styled.button`
  width: 2.4rem;
  height: 2.4rem;

  background: transparent;
  border: none;

  position: absolute;
  top: 10px;
  right: 18px;
`;

export const Image = styled(Link)`
  border: none;
  display: block;

  max-width: 17.6rem;
  max-height: 17.6rem;

  margin: 0 auto 1.5rem;

  > img {
    width: 100%;
    height: 17.6rem;
    
    object-fit: cover;

    border-radius: 50%;
  }

  @media (max-width: 1024px) {
    max-width: 8.8rem;
    max-height: 8.8rem;

    > img {
      height: 8.6rem;
    }
  }
`;

export const Product = styled(Link)`
  width: 100%;

  text-align: center;

  > h3 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    white-space: nowrap;

    margin-bottom: 1.5rem;

    > span {
      font-size: 2.4rem;

      margin-left: .2rem;
    }
  }

  > p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    margin-bottom: 1.5rem;
  }

  @media (max-width: 1024px) {
    > h3 {
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 2.4rem;
    }

    > span {
      font-size: 2rem;
    }

    > p {
      display: none;
    }
  }
`;

export const Price = styled.div`
  text-align: center;

  margin-bottom: 1.5rem;

  > span {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 3.2rem;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  @media (max-width: 1024px) {
    > span {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 100%;
    }
  }
`;

export const OrderPlace = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  > button {
    max-width: 9.2rem;
  }

  @media (max-width: 1024px) {
    flex-direction: column;

    > button {
      max-width: 100%;
      height: 3.2rem;
    }
  }
`;

export const DisplayQuantity = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  > div {
    > span {
      font-family: 'Roboto', sans-serif;
      font-weight: 700;
      font-size: 2rem;
      line-height: 160%;
    }
  }

  @media (max-width: 1024px) {
    > div {
      margin-bottom: 1.6rem;

      > span {
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 100%;
      }
    }
  }
`;