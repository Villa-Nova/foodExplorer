import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin-top: 2.4rem;
  margin-bottom: 3.2rem;

  > h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 140%;
  }
`;

export const Content = styled.div`
  width: 100%;

  padding-bottom: 8rem;
`;