import styled, { keyframes } from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  border-radius: 4px;
  width: 360px;
  margin-left: 20px;

  footer {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const shakeTop = keyframes`
  0% { transform: translateY(4px)}
  50% { transform: translateY(0px)}
  100% { transform: translateY(4px)}
`;

export const ProductTable = styled.table`
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 15px 10px;
  position: sticky;
  top: 10px;
  animation: ${shakeTop} 1s;
  animation-iteration-count: infinite;

  tbody td {
    padding: 5px;
    font-size: 10px;
    color: #000;
  }

  img {
    height: 50px;
    border-radius: 50%;
  }

  strong {
    display: block;
    color: #000;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 12px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #f5f5f5;
      border-radius: 4px;
      color: #1b53ba;
      padding: 6px;
      width: 50px;
      background-color: ${darken(0.05, '#f5f5f5')};
    }
  }

  button {
    background: none;
    border: 0;
  }

  tfoot {
    button {
      display: block;
      margin: 10px auto;
      background-color: #1b53ba;
      color: white;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background-color 0.2s;
      font-size: 10px;

      &:hover {
        background: ${darken(0.03, '#1b53ba')};
      }
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 10px;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
