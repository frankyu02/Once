const { createGlobalStyle } = require("styled-components");

const GlobgalStyles = createGlobalStyle`
html,
:root{
  --Background: #f2f7f5;
  --Headline: #00473e;
  --Paragraph: #475d5b;
  --Button: #faae2b;
  --ButtonText: #00473e;
}
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

@media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
  }
  body {
    color: white;
    background: black;
  }
}
`;

export default GlobgalStyles;
