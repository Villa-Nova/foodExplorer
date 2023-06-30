import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Banner = styled.section`
  max-height: 26rem;

  border-radius: 0.8rem;
  margin: 16rem 12.3rem 6.2rem;
  padding-right: 8rem;

  display: flex;
  align-items: end;
  justify-content: space-between;

  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);

  @media (max-width: 1070px) {
    padding-right: 2rem;
  }

  @media (max-width: 610px) {
    padding-right: 1.4rem;
  }

  @media (max-width: 601px) {
    margin: 10rem 2.4rem 6.2rem;
  }
`;

export const BannerImg = styled.div`
  width: 600px;
    
  display: block;
  position: relative;
    
  img {
    width: 100%;
     height: auto;
      
    position: absolute;
    bottom: 0;
    left: 0px;
    object-fit: cover;
      
    transform: translateX(-9%);

    @media (max-width: 1254px) {
      width: 480px;
    }

    @media (max-width: 1070px) {
      width: 260px;
    }

    @media (max-width: 661px) {
      width: 180px;
      transform: translateX(-10%);
    }
  }
`;

export const BannerContent = styled.div`
  padding: 8.8rem 0;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  h3 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 4rem;
    line-height: 140%;
    white-space: nowrap;
  }

  span {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 100%;
  }

  @media (max-width: 1070px) {
    padding: 2rem 0rem;

    h3 {
      font-weight: 600;
      font-size: 1.7rem;
    }

    span {
      font-size: 1.2rem;
    }
  }
`;