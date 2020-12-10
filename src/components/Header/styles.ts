import styled, { keyframes, css } from 'styled-components';

interface ContainerProps {
    fullHeight: boolean,
    module: string,
}

const slideIn = keyframes`
0%, 33% {
        height: 80px;
    }
100% {
        height: 100%;
    }
`;

const slideOut = keyframes`
0% {
        height: 100%;
    }
100% {
        height: 80px;
        padding: 35px 0;
    }
`;

const colorCycle = keyframes`
0%, 55% {
        filter: brightness(0) invert(1);
    }
11%, 33% {
        filter: none;
    }
`;

export const Container = styled.div<ContainerProps>`
    position: fixed;
    z-index: 999;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.2);
    color: #ffffff;
    backdrop-filter: saturate(180%) blur(12px);
    display: flex;
    justify-content: center;

    ${({ module }) => module === 'home' ? css`
    height: 100%;` :
        css`
    height: 80px;
    padding: 35px 0;
    `}

    ${({ fullHeight, module }) => {
        if (fullHeight && module !== 'home') {
            return css`animation: ${slideIn} 0.8s  cubic-bezier(0.250, 0.460, 0.450, 0.940) both;`
        } else {
            if (module !== 'home')
                return css`animation: ${slideOut} 0.8s  cubic-bezier(0.250, 0.460, 0.450, 0.940) both;`
        }
    }}          
`;

export const Wrapper = styled.div<ContainerProps>`
    flex: 1;
    max-width: 680px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .header {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 45px;
       
        img {
            width: 220px;
            border-radius: 50%;
        }
        //Mobiles
        @media(max-width: 425px){
            flex-direction: column;

            img {
                width: 180px;
                margin-bottom: 25px;
            }
        }

        .animation {
            max-width: 425px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            h1 {
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                color: #fff;

                

                span {
                    font-size: 35px;
                    font-weight: bold;
                    line-height: 35px;
                    letter-spacing: 4px;
                    color: #fff;

                    filter: brightness(0) invert(1);
                    padding: 0 0.6rem;
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;

                    animation: ${colorCycle} 6s ease-in-out infinite;
                }

                span:nth-child(1) {
                    background-image: linear-gradient(90deg, #007cf0, #00dfd8);
                }
                span:nth-child(2) {
                    background-image: linear-gradient(90deg, #7928ca, #ff0080);
                    animation-delay: 2s;
                }
                span:nth-child(3) {
                    background-image: linear-gradient(90deg, #ff4d4d, #f9cb28);
                    animation-delay: 4s;
                }
            }
        }
    }

    nav {
        width: 100%;
        max-width: 100vw;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        // MOBILE
        @media(max-width: 425px) {
            padding: 0 15px;
        }

        a {
                color: #fff;
                font-weight:bold;
                text-decoration: none;
        }

        button {
            color: #fff;
            font-size: 1.4em;
            font-weight:bold;
            text-decoration: none;
            background: transparent;
            border: 1px solid transparent;
            
            padding: 0.8em;
            border-radius: 0.3em;
            transition: 0.2s;
            color: #fff;
            transition: 0.2s ease-in;

            
        }

        button:hover {
            border: 1px solid #404448;
            background: rgba(196,196,196,0.1);
            cursor: pointer;
        }

        // MOBILE
        @media(max-width: 425px){

            ${({module})=> module !== 'home' && css`
                button {
                    font-size: 1em;
                }
            `}
            
        }

    }

    div.moduleDocker {
        padding-top: 45px;
    }

    .social {
        padding-top: 120px;

    a {
        padding: 0px 40px;
        > img {
        filter: invert(100%);
        height: 50px;
        }
    }
 }
`;

