import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: center;
    
  position: sticky;
  top: 0;
  z-index: 999;
    
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;

  width: 100%;
  //width: 169.2rem;
  height: 10.4rem;
  margin-left: 12.3rem;
  margin-right: 12.3rem;

  padding: 0 1rem;
  gap: 3.2rem;

  > svg {
    display: none;
  }

  @media (max-width: 769px) {
    margin-left: 0;
    margin-right: 0;

    > svg {
      display: flex;
    }

    > .header_btn {
      display: none;

      button {
        padding: 0 0.5rem 0 0;
      }
    }
  }
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;

  .logo_img {
    width: 3rem;
    height: 3rem;
  }

  .logo_title {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 2.8rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    .logo_admin {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.9rem;

      color: ${({ theme }) => theme.COLORS.CAKE_200};
    }

    @media (max-width: 601px) {
      flex-direction: row;
      align-items: center;
      gap: 0.8rem;
    }
  }

  @media (min-width: 601px) {
    align-items: flex-start;
  }
`;

export const InputSearch = styled.label`
  width: 100%;
  height: 4.8rem;

  border-radius: .5rem;
  padding: 1.2rem 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  
  gap: 1.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  > input {
    width: 100%;
    max-width: 24.5rem;

    background: transparent;

    border: none;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      line-height: 1.6rem;
    }
  }
  
  @media (max-width: 769px) {
    display: none;
  }
`;

export const Logout = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
    
  border: none;
  background: none;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  > .logout_signOut {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 3.2rem;
  }

  > .logout_receipt {
    display: none;
  }

  @media (max-width: 769px) {
    .logout_signOut {
      display: none;
    }

    > .logout_receipt {
      display: flex;
    }
  }
`;