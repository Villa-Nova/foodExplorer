import styled from "styled-components";

export const Container = styled.section`
  margin: 0 12.3rem 4.6rem;

  position: relative;

  .section_title {
    h2 {
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 3.2rem;
      line-height: 4.4rem;
    }
  }

  @media (max-width: 601px) {
    margin: 0 2.4rem 2.4rem;
    
    .section_title {
      h2 {
        font-weight: 500;
        font-size: 1.8rem;
        line-height: 2.4rem;
      }
    }
  }
`;

export const Content = styled.div`
  margin-top: 2.3rem;

  display: flex;
  align-items: center;
  gap: 2.6rem;
  overflow: auto;

  > svg:first-child {
    position: absolute;
    left: 0;
    z-index: 888;

    cursor: pointer;
  }

  > svg:last-child {
    position: absolute;
    right: 0;

    cursor: pointer;
  }
`;