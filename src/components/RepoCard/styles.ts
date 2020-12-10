import styled from 'styled-components';

export const Container = styled.div`
   background: transparent;
   margin: 0 55px 15px 55px;
   border: 1px solid #404448;
   border-radius: 12px;
   transition: 0.2s ease-in;

   &:hover {
        background: rgb(108, 99, 255, 0.8);
        border: 1px solid rgb(108, 99, 255, 0.8);
        cursor: pointer;
    }

      // MOBILE
    @media(max-width: 425px) {
        margin: 15px;
    }
`;

export const Card = styled.li`
    width: 100%;
    min-width: 300px;
    border-radius: 20px;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    text-decoration: none;


    .bold {
        font-weight: bold;
    }
  
    p {
        color: #FFF;
        margin: 8px 0;
    }

    #homepage {
        color: #fff;
        padding-bottom: 15px;
    }

    .tags {
        padding-right: 15px;
    }
`;

export const Header = styled.div`
    padding: 10px 18px 0px 18px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h1 {
        font-size: 14px;
        font-weight: bold;
        color: #fff;
        text-decoration: none;
        text-transform: capitalize;

    }
`;

export const Infos = styled.div`
    padding: 0px 18px 10px 18px;

    p {
        font-size: 14px;
        line-height: 26px;
        color: #fff;
    }

    .row {
        display: flex;
        flex-direction: row;
    }
`;


export const Tags = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: left;
    padding: 8px;
    border-top: 1px solid #404448;
    border-radius: 0px 0px 12px 12px;
`;

