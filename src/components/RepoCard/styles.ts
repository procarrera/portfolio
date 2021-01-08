import styled from 'styled-components';

export const Container = styled.div`
   background: transparent;
   margin: 0 55px 30px 55px;
   border: 1px solid #404448;
   border-radius: 12px;
   transition: 0.2s ease-in;

   &:hover {
    background: rgba(196,196,196,0.1);
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

    a#projectLink {
        padding: 18px 0px;
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 14px;
        color: #fff;
        letter-spacing: 1px;

        img {
            margin-right: 6px;
            opacity: 0.6;
            width: 18px;
        }
    }
    a#projectLink:hover {
        font-weight: bold;
        img {
            opacity: 1;
        }
    }

    a#repoLink{
        padding: 18px 0px;
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 14px;
        color: #fff;
        letter-spacing: 1px;

        img {
            filter: brightness(0) invert(1);
            margin-right: 6px;
            opacity: 0.6;
            width: 18px;
        }
    }
    a#repoLink:hover {
        font-weight: bold;
        img {
            opacity: 1;
        }
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

