import { createGlobalStyle } from 'styled-components'

interface Lock {
    locked: boolean
}

const GlobalStyles = createGlobalStyle<Lock>`
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
        overflow: ${({ locked }) => locked ? "hidden" : 'visible'};
        -webkit-font-smoothing: antialiased !important;
        ::-webkit-scrollbar {
        width: 11px;
        }
        ::-webkit-scrollbar-track {
        background: #a8a8a8;
        }
        ::-webkit-scrollbar-thumb {
        background: #3d3d3d;
        border: 0.5px solid #000;
        }
        ::-webkit-scrollbar-thumb:hover {
        background: #555;
        }
            }

    *, input, button{
        font-size: 12px;
        font-family: 'Montserrat', sans-serif;
    }
`

export default GlobalStyles;