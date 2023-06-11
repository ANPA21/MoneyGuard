import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    black: '#222222',
    white: '#ffffff',
    secondary: '#7f8d9c',
    accent: '#f3f6f9',
    border: '#dde4ec',
    online: '#52ac54',
    offline: '#fb5355',
  },
  radius: {
    small: '2px',
    medium: '4px',
    large: '8px',
  },
  shadow:
    '0px 1px 3px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 2px 3px rgba(0, 0, 0, 0.14);',
  bgc: ['#4cc4fa', '#a43bf5', '#e84b64', '#20b7c5', '#ffe0b2'],
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
