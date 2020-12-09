import styled from 'styled-components';

export const Container = styled.div`
   margin: 0 55px 15px 55px;
   border: 1px solid #404448;
   border-radius: 12px;
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

    &:hover{
        cursor: pointer;
    }
`;

export const Header = styled.div`
    padding: 10px 18px 10px 18px;
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
    padding: 6px;

    p {
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

