import { css } from 'emotion'

export default {
  app: css`
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    text-align: center;
    font-family: 'Roboto', sans-serif;
  `,
  appHeader: css`
    background-color: #222;
    height: 150px;
    padding: 20px;
    color: white;
  `,
  appTitle: css`
    font-size: 2.5em;
  `,
  chartContainer: css`
    position: absolute;
    top: 220px;
    bottom: 20px;
    left: 0;
    right: 0;
  `
}
