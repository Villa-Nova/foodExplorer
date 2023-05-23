import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: center;
    
  position: sticky;
  top: 0;
  z-index: 999;
    
  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  @media (max-width: 706px) {

    > div {
      justify-content: center;
  
      >.header_btn {
        display: none;
      }
  
      >.header_input_search {
        display: none;
      }

    }

    //> div {
      > ul.menuHamburger {
        display: flex;
      //}
    }

  }
  .menuHamburger {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;

  width: 121.2rem;
  height: 10.4rem;

  padding: 0 4rem;
  gap: 3.2rem;
`;

export const Logo = styled.span`
  display: flex;
  align-items: center;
  gap: 1rem;

  > .logo_img {
    width: 3rem;
    height: 3rem;

    @media (max-width: 706px) {
      width: 2rem;
    }
  }

  > .logo_title {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 2.8rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;

export const InputSearch = styled.div`
  width: 100%;
  height: 4.8rem;

  border-radius: .5rem;
  padding: 1.2rem 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  
  gap: 1.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  > .input_search_input {
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
`;

export const Logout = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
    
  border: none;
  background: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 3.2rem;
  }
`;

export const MenuHamburger = styled.ul`
  list-style: none;

  width: 2.4rem;

  display: flex;
  flex-direction: column;
  gap: .5rem;
  
  > li {
    display: block;

    width: 100%;
    height: .3rem;

    border-radius: .5rem;

    background-color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;