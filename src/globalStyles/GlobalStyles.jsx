import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #0f1214;
    padding: 0 0 10px 0;
    max-width: 100vw;
    overflow-x: hidden;
  }

  p {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-style: normal;
    color: #fffff0;
  }
`;
