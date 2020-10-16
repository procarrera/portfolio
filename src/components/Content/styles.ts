import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    min-height: 100%;
    flex-grow:1;
    flex-direction: column;
    background: #F6F8FA;
    /* background:#15202B; */
`;

export const TwoColumns = styled.div`
    display: flex;
    flex-direction: row;

    @media(max-width: 750px){
        flex-direction: column;
    }
`;
export const OneColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Header = styled.div`
    padding: 45px 0 45px 0;
    display: flex;
    flex: column;
    align-items: center;
    justify-content: start;
    margin-left: 5%;

    .avatar {
        border-radius: 50%;
        border: 6px solid #E9ECEF;
        
        @media(max-width: 850px){
            width: 120px;
        }
    }

    .social-media {
        flex-direction: row;
        padding-top: 15px;

        img{
            width: 50px;
            margin-left: 8px;

            @media(max-width: 850px){
                width: 35px;
            }
        }
    }


    h1 {
        color: #1DA1F2;
        font-size: 28px;
        font-weight: 700;
    }

    h3 {
        color: #000;
        font-weight: 700;
    }

    h2 {
        color: #000 ;
    }
    
`;

export const Nav = styled.ul`
    align-self: center;
    list-style-type: none;
    width: 100%;
    padding: 0 35px;
    flex: 1;
    color: #000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 22px;

    @media(max-width: 850px){
        display: grid;
        grid-template-columns: 1fr;
        gap: 8px;
        width: 100%;
    }
`;