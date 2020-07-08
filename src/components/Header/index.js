import React from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { useSelector } from 'react-redux';

import { Container, HeaderCart, HeaderLogo } from './styles';
import logo from '../../assets/images/pokemon.svg';

function Header() {
  const cartSize = useSelector((state) => state.cart.length);

  return (
    <Container>
      <HeaderLogo>
        <img src={logo} draggable="false" alt="Logo" />
        Pokedux
      </HeaderLogo>
      <HeaderCart>
        <div>
          <strong>Meu Carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#000" />
      </HeaderCart>
    </Container>
  );
}

export default Header;
