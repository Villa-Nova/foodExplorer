import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
//    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    background-color: #5500ff;


    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.4rem;

    *::-webkit-scrollbar {
      display: none;
    }

    *::-webkit-scrollbar-corner {
      display: none;
    }

    *::-webkit-scrollbar-thumb {
      display: none;
    }
  }

  input {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;

    cursor: pointer;
    transition: all 0.3s;
  }

  button:hover, a:hover {
    filter: brightness(1.8);
  }
`;