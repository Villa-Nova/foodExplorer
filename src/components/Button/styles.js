import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 4.8rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  border: 0;
  border-radius: 0.5rem;
  padding: 1.2rem 3.3rem;
    
  font-weight: 500;
  font-size: 1.4rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
`;