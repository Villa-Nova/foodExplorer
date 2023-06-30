import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 7.7rem;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 1rem;
  
  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  > div {
    width: 100%;
    margin-left: 12.3rem;
    margin-right: 12.3rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 601px) {
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }
`;

export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  gap: .6rem;

  > img {
    width: 3rem;
    height: 3rem;
  }

  > span {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 2.8rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_700};

    white-space: nowrap;
  }

  @media (max-width: 768px) {
    > img {
      width: 2rem;
      height: 2rem;
    }

    > span {
      font-size: 1.4rem;
      line-height: 1.8rem;
    }
  }
`;

export const FooterCopyright = styled.div`
  display: flex;
  align-items: center;
  gap: .4rem;

  > svg {
    width: 1.2rem;
    height: 1.2rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }

  span {
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.6rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }

  @media (max-width: 768px) {
    span {
      font-size: 1.2rem;
      line-height: 1.6rem;
    }
  }
`;