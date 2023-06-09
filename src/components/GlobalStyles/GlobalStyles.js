import { Global, css } from '@emotion/react';

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        html {
          box-sizing: border-box;
          width: 100vw;
          overflow-x: hidden;
        }
        *,
        *::before,
        *::after {
          box-sizing: inherit;
        }
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
          color: #212121;
          background-color: #ebe2f5;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        code {
          font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
          margin: 0;
        }
        ul,
        ol {
          margin: 0;
          padding: 0;
        }
        li {
          list-style: none;
        }
        img {
          display: block;
          max-width: 100%;
          height: auto;
        }
        a {
          text-decoration: none;
        }
        link {
          text-decoration: none;
        }
      `}
    />
  );
};

export default GlobalStyles;
