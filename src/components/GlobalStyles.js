import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  src: url('styles/fonts/Poppins-Regular.woff2') format('woff2'),
    url('styles/fonts/Poppins-Regular.woff') format('woff');
}

@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  src: url('styles/fonts/Poppins-medium.woff2') format('woff2'),
    url('styles/fonts/poppins-medium.woff') format('woff');
}

@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  src: url('styles/fonts/Poppins-SemiBold.woff2') format('woff2'),
    url('styles/fonts/Poppins-SemiBold.woff') format('woff');
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill::first-line {
    transition: background-color 5000s ease-in-out 0s; 
  }

body {
  margin: 0;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Roboto',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,h2,h3 {
  margin: 0;
  padding: 0;
}

p, ul, ol, li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
  object-fit: cover;
}

a {
  text-decoration: none;
}

`;

export default GlobalStyle;
