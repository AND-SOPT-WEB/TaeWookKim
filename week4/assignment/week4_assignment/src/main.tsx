import { Global, ThemeProvider } from '@emotion/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import global from './styles/GlobalStyle.tsx';
import { Theme } from './styles/Themes.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Global styles={global} />
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
