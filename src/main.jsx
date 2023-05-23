import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from "styled-components";

import theme from "./styles/theme";//totem de cor
import GlobalStyles from "./styles/global"//Estilos comuns
import { Details } from './pages/Details.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Details />
    </ThemeProvider>
  </React.StrictMode>,
);