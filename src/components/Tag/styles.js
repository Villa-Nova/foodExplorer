import styled from "styled-components";

export const Container = styled.div`
  display: block;

  //width: fit-content;

  padding: .4rem .8rem;
  border-radius: .5rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_1000};

  > span {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.4rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;