import { createGlobalStyle } from 'styled-components';
import moderNormalize from 'modern-normalize';

const GlobalStyles = createGlobalStyle`
${moderNormalize}

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

  .custom-switch .MuiSwitch-switchBase.Mui-checked {
    color: red !important; // Цвет переключателя в состоянии "checked"
  }

  .custom-switch .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track {
    background-color: white !important; // Цвет фона трека в состоянии "checked"
  }

`;

export default GlobalStyles;
