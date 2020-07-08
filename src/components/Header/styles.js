import styled, { keyframes } from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
`;

const shake = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
`;

export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;

  img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    animation: ${shake} 3s;
    animation-iteration-count: infinite;
    user-select: none;

    &:hover {
      cursor: grab;
      animation: ${shake} 0.2s;
      animation-iteration-count: infinite;
    }
  }
`;

export const HeaderCart = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
    }

    span {
      font-size: 12px;
    }
  }
`;
