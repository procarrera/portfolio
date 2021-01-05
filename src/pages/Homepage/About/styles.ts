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
    min-height: 100%;
    max-width: 1080px;
    margin: 0 45px;
    width: 100%;
    padding-top: 95px;
    display: flex;
    flex-direction: column;

    color: #fff;
    font-size: 0.6rem;

    animation: ${focusIn} 0.4s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;

    // MOBILE
    @media(max-width: 425px) {
        margin: 0 15px;
    }

    > h1 {
        height: 105px;
        font-size: 32px;
        color: #007cf0;
        padding: 0 14px;

        > img {
            height: 45px;
        }

        > span {
            font-size: 26px;
            font-weight: 400;
            color: #fff;
        }
        
        // MOBILE
        @media(max-width: 425px) {
            padding-bottom: 10px;
            border-bottom: none;
        }
    }

    .bio {
        padding: 0px 14px;
        border-radius: 25px;
        font-size: 18px;
        line-height: 28px;
        text-align: justify;

        // MOBILE
        @media(max-width: 425px) {
            margin-top: 00px;
        }
    }

    .history {
        margin-top: 14px;
        padding: 14px;
        border-radius: 25px;
        font-size: 18px;
        line-height: 28px;
        text-align: justify;
    }

    .breaker {
        text-align: center;
        font-weight: bold;
        font-size: 24px;
        margin-top: 60px;
        border-radius: 25px;
        padding: 4px;
        background: linear-gradient(90deg, #ff4d4d, #f9cb28);
    }

    .main {
        padding-top: 60px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content:space-between;
        flex: 1;

        // MOBILE
        @media(max-width: 425px) {
            flex-direction: column;
            margin: 0px;
        }

        .timeline {
            display: flex;
            flex-direction: row;
            height: 100%;

            .line {
                position: relative;
                padding-right: 1px;
                margin-right: 16px;
                background: linear-gradient(0deg, rgba(0, 0 ,0 ,0) 0%, rgba(255,255,255) 20% 100% );

                > img:nth-child(1) {
                    position: absolute;
                    top: 0%;
                    left: -8px;
                    height: 16px;
                }
                > img:nth-child(2) {
                    position: absolute;
                    top: 11.5%;
                    left: -8px;
                    height: 16px;
                }
                > img:nth-child(3) {
                    position: absolute;
                    top: 27%;
                    left: -8px;
                    height: 16px;
                }
                > img:nth-child(4) {
                    position: absolute;
                    top: 42%;
                    left: -8px;
                    height: 16px;
                }
                > img:nth-child(5) {
                    position: absolute;
                    top: 57%;
                    left: -8px;
                    height: 16px;
                }
                > img:nth-child(6) {
                    position: absolute;
                    top: 71%;
                    left: -8px;
                    height: 16px;
                }
                > img:nth-child(7) {
                    position: absolute;
                    top: 86%;
                    left: -8px;
                    height: 16px;
                }
            }

            > div {
                padding-top: 40px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;

            a.timelineItem:nth-child(1) {
                margin-top: 45px;
            }

            a.timelineItem:last-child {
                margin-bottom: 80px;
            }

            a.timelineItem {
                font-size: 20px;
                line-height: 140%;
                font-weight: 400;
                color: #ffffff;
                opacity: 90%;
                margin-bottom: 60px;
                padding: 14px 6px;
                display: flex;
                flex-direction: row;
                align-items: center;
                max-width: 320px;

                    > img {
                        height: 65px;
                        width: 65px;
                        margin-right: 12px;
                    }
                transition: 0.2s ease-in;
                }

                a.timelineItem:hover {
                opacity: 100%;
                border-radius: 25px;
                box-shadow: 0px 0px 0px 1px #404448;
                cursor: pointer;
            }
        }
               
    }

    .skills {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-end;
        font-size: 16px;

        // MOBILE
        @media(max-width: 425px) {
            align-items: center;
        }

        > .techs {
            padding: 14px;
            border-radius: 25px;
            border: 1px solid #404448;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;

            // MOBILE
            @media(max-width: 425px) {
                width: 100%;
                flex-wrap: wrap;
                align-items: center;
            }
        }

        p {
            letter-spacing: 4px;
            font-weight: bold;
        }

        img {
            height: 25px;
            margin: 8px 0;
        }

            > .softskills {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-end;
                > span {
                margin: 8px 0;
                padding: 6px;
                border: 1px solid #888;
                border-radius: 6px;
            }
             // MOBILE
             @media(max-width: 425px) {
                width: 100%;
                margin: 25px 0px;
                flex-direction: row;
                flex-wrap: wrap;
                align-items: center;
                justify-content: flex-start;
                border-radius: 25px;
                border: 1px solid #404448;
                padding: 14px;

                p:first-child {
                    flex-basis: 100%;
                    margin-bottom: 5px;
                    font-weight: bold;
                }
            }
        }
        
        
    }
}
   
`;
