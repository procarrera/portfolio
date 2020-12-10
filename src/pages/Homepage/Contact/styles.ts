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

    p:first-child {
        font-weight: bold;
    }

    p {
        text-align: center;
        padding: 18px 0px;
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
            filter: brightness(0) invert(1);
            height: 60px;
            }
        }
    }

    // MOBILE
    @media(max-width: 425px) {
        font-size: 18px;
    }
`;
