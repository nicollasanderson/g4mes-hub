import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root {
        --redError: #FF0000;
        --cleanBlack: #222222;
        --white: #FFFFFF;
        --purple: #9D4EDD;
        --black: #000000;
        --grey: #C4C4C4;
        --blackComment: #111111;
        --background:#10002B;
        --mainFont: "Inter", sans-serif;
        --blackOpsFont:'Black Ops One', cursive;
        --toastify-color-success: #9D4EDD;
        --toastify-color-error: #9D4EDD;
        --toastify-color-dark: #0A011B;
        --toastify-toast-min-height: 85px;
        --toastify-text-color-dark: #FFF;
        --toastify-font-family: 'Inter', sans-serif;
    }

    body, input, button {
        font-size: 1rem;
    }

    h1, h2, h3, h4, p, span {
        font-weight: 700;
    }

    button {
        cursor: pointer;
    }

    figcaption {
        display: none;
    }

    ul{
        list-style: none;
    }
    body{
        background-color: var(--background);
        margin: 0;
        font-family: var(--mainFont), 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        font-size: 14px;
    }
    ::-webkit-scrollbar {
        width: 12px;
    }
    ::-webkit-scrollbar-track {
        background: var(--background); 
    }
    ::-webkit-scrollbar-thumb {
        background: var(--purple); 
    }
    .App {
        text-align: center;
    }
`;
