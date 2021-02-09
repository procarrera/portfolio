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

    width: 100%;
    background: rgb(6, 33 , 50, 0.5);

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    font-size: 26px;
    letter-spacing: 4px;
    color: #fff;

    animation: ${focusIn} 0.4s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;

    img {
        border-radius: 50%;
    }

    .meeting {
        padding: 16px;
        border-radius: 8px;
        border: 1px solid white;
        font-size: 14px;
        background: rgba(196,196,196,0.1);
        color: white;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: background ease-in 0.3s;
    }

    .meeting:hover{
        background: rgba(196,196,196,0.3);
    }

    p:first-child {
        font-weight: bold;
        line-height: 160%;
    }

    p {
        text-align: center;
        padding: 35px 0px;
    }

    p:last-child {
        padding: 0;
        padding-bottom: 6px;
    }

    .social {
        padding-bottom: 18px;

        a {
            padding: 0px 18px;
            > img {
                transition: ease-in .3s;
                opacity: .8;
                filter: brightness(0) invert(1);
                height: 50px;
            }
        }
        a:hover {
            > img {
                opacity: 1;
            }
        }
    }

    // MOBILE
    @media(max-width: 425px) {
        font-size: 18px;
    }
`;
