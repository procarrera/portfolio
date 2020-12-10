import styled from 'styled-components';

export const Container = styled.div`
 width: 100%;
 background: rgb(33, 54, 67, 1);

 display: flex;
 flex-direction: column;
 flex-wrap: wrap;
 justify-content: center;
 align-items: center;

 font-size: 14px;
 letter-spacing: 4px;

 p {
     color: #fff;
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
        opacity: 0.7;
        filter: brightness(0) invert(1);
        height: 40px;
        }
    }
 }

`;
