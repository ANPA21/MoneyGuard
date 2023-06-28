import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
// import { ThemeProvider } from 'styled-components';

import { Provider } from 'react-redux';
import { peristor, store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { cyan, teal } from '@mui/material/colors';

// const theme = {
//   colors: {
//     black: '#222222',
//     white: '#ffffff',
//     secondary: '#7f8d9c',
//     accent: '#f3f6f9',
//     border: '#dde4ec',
//     online: '#52ac54',
//     offline: '#fb5355',
//   },
//   radius: {
//     small: '2px',
//     medium: '4px',
//     large: '8px',
//   },
//   shadow:
//     '0px 1px 3px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 2px 3px rgba(0, 0, 0, 0.14);',
//   bgc: ['#4cc4fa', '#a43bf5', '#e84b64', '#20b7c5', '#ffe0b2'],
// };

const theme = createTheme({
  palette: {
    primary: {
      main: teal[500],
      light: teal[300],
      dark: teal[700],
    },
    secondary: {
      main: cyan[500],
    },
    buttons: {
      main: teal[100],
      bg: teal[800],
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={peristor}>
        <ThemeProvider theme={theme}>
          <BrowserRouter basename="/hw-08-phonebook">
            <CssBaseline />
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
