import styled, { keyframes } from 'styled-components';

const focusIn = keyframes`
0%, 50%{
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
`;

export const Container = styled.div`
    min-height: 100%;
    max-width: 1080px;
    margin: 0 45px;
    width: 100%;
    padding-top: 95px;
    display: flex;
    flex-direction: column;

    animation: ${focusIn} 0.4s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;

    // MOBILE
    @media(max-width: 425px) {
        margin: 0 15px;
    }

    color: #fff;

    .header {
    margin: 0px 55px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 35px;
    border-bottom: 1px solid #404448;

    @media(max-width: 425px) {
        margin: 0 15px;
    }

        span {
            h1 {
                font-size: 35px;
                margin-bottom: 15px;
            }
            h3 {
                font-size: 14px;
                letter-spacing: 4px;
            }
        }

        img {
        height: 105px;
        }
    }

    .stack {
        display: flex;
        flex-direction: column;

        .tech a {
            margin: 18px 0px;
            padding: 14px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            border: 1px solid #404448;
            border-radius: 12px;
            text-decoration: none;
            color: #fff;
            text-align: justify;
            transition: 2s ease-in;

            >img {
                width: 95px;
                margin: 28px;
            }

            .infos {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                height: 100%;

                >span {
                    font-size: 16px;
                    line-height: 26px;
                }
                >a {
                    margin: 18px 0px;
                    color: #fff;
                    font-size: 18px;
                }
            }
        }

        a:hover {
            border: 1px solid transparent;
            background: linear-gradient(180deg, rgba(0,124,240,0.4), rgba(0,223,216,0.4));
        }
    }
`;
