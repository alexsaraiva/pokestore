import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';

import * as cartActions from '../../store/modules/cart/actions';
import { ProductList, Container } from './styles';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import Cart from '../../components/Cart';

function Home() {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  const amount = useSelector((state) =>
    state.cart.reduce((amountSum, product) => {
      amountSum[product.id] = product.amount;
      return amountSum;
    }, {})
  );

  useEffect(() => {
    async function getProducts(page = 1, limit = 150) {
      const response = await api.get('/pokestore', {
        params: {
          page: 1,
          limit: 150,
        },
      });

      const data = response.data.results.map((pokemon) => ({
        ...pokemon,
        priceFormatted: formatPrice(pokemon.price),
      }));

      setProducts(data);
    }

    getProducts();
  }, []);

  function handleAddProduct(product) {
    dispatch(cartActions.addToCart(product));
  }

  return (
    <Container>
      <ProductList>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.sprite} alt={product.name} />
            <strong>{product.name}</strong>
            <span>{product.priceFormatted}</span>

            <button type="button" onClick={() => handleAddProduct(product)}>
              <div>
                <MdAddShoppingCart size={16} color="#FFF" /> {amount[product.id] || 0}
              </div>
              <span>Adicionar</span>
            </button>
          </li>
        ))}
      </ProductList>
      <Cart />
    </Container>
  );
}

export default Home;
