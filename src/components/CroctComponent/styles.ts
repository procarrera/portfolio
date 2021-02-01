import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    padding: 22px;

    @media(min-width: 426px){
        border-top: none;
        border-bottom: none;
    }

    .origin-interaction{
        font-size: 16px;
        line-height: 170%;
        letter-spacing: 0.2em;
        font-weight: 400;
        padding-bottom: 22px;
        text-align: left;
    }
    
    .hidden {
        visibility: hidden;
        display: none;
    }

    button {
        border: none;
        font-size: 16px;
        text-align: center;
        color: #ffff;
        padding: 10px;
        border-radius: 6px;
        background: rgba(0, 124, 240);
        margin-bottom: 22px;
        transition: background ease-in .3s;
    }
    
    button:hover {
        cursor: pointer;
        background: rgba(0, 124, 240, 0.8);
    }

    @media(min-width: 426px){
        .contact-social {
            display: none;
            visibility: hidden;
        }
    }
    .contact-social {
        padding-top: 16px;
        text-align: center;

        a {
            padding: 0px 40px;
            > img {
            filter: invert(100%);
            height: 35px;
            }
        }
    }
`;
