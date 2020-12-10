import styled from 'styled-components';

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
