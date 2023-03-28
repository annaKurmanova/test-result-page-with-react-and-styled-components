import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @font-face {
  font-family: 'HankenGrotesk';
  src: local('HankenGrotesk'), url(./fonts/HankenGrotesk-VariableFont_wght.tff) format('tff');

}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'HankenGrotesk';
  transition: all 0.4s ease;
}
body {
  padding: 50px;
}
li {
  list-style: none;
}
`;

export default GlobalStyles;
