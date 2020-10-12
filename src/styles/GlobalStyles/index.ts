import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html,
    body,
    #__next {
        height: 100%;
    }

    body {
        -webkit-font-smoothing: antialiased !important;
    }

    *, input, button{
        font-family: 'Montserrat', sans-serif;
    }
`