import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    padding: 20px;
    width: 200px;

    img {
      align-self: center;
      max-width: 250px;
    }

    > strong {
      font-size: 20px;
      line-height: 20px;
      color: #1b53ba;
      margin-top: 5px;
      text-transform: capitalize;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      background-color: #1b53ba;
      color: white;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      display: flex;
      align-items: center;
      transition: background-color 0.2s;

      &:hover {
        background-color: #4dad5b};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background-color: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        font-weight: bold;
      }
    }
  }
`;
