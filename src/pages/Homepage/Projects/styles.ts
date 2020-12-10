import styled, { keyframes, css } from 'styled-components';

interface ContainerProps {
  page: string;
}

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

export const Container = styled.div<ContainerProps>`
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
 
 .header {
  margin: 0px 55px;
  margin-bottom: 30px;
  height: 350px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-image: ${({ page }) => page !== 'home' && css`url("/img/moon.svg");`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 65% 25%;

span {
  h1 {
    font-size: 35px;
    margin-bottom: 15px;
  }
  h3 {
    font-size: 14px;
    letter-spacing: 4px;
  }
  max-width: 300px;
}

img {
  height: 105px;
}
 }

`;
