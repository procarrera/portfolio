import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100%;
    max-width: 1080px;
    margin: 0 45px;
    width: 100%;
    padding-top: 95px;
    display: flex;
    flex-direction: column;

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
            text-decoration: none;
            color: #fff;
            padding: 14px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            border: 1px solid #404448;
            border-radius: 12px;
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
            background: linear-gradient(180deg, #007cf0, #00dfd8);
        }
    }
`;
