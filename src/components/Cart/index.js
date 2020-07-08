import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import * as cartActions from '../../store/modules/cart/actions';
import { Container, ProductTable, Total } from './styles';
import { formatPrice } from '../../util/format';

function Cart() {
  const dispatch = useDispatch();

  const total = useSelector((state) =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );

  const cart = useSelector((state) =>
    state.cart.map((product) => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  function increment(product) {
    dispatch(cartActions.updateAmount(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(cartActions.updateAmount(product.id, product.amount - 1));
  }

  return (
    <Container>
      {cart.length > 0 && (
        <ProductTable>
          <tbody>
            {cart.map((product) => (
              <tr key={product.id}>
                <td>
                  <img src={product.sprite} alt={product.name} />
                </td>

                <td>
                  <strong>{product.name}</strong>
                  <span>{product.priceFormatted}</span>
                </td>

                <td>
                  <div>
                    <button type="button" onClick={() => decrement(product)}>
                      <MdRemoveCircleOutline size={20} color="#1b53ba" />
                    </button>
                    <input type="number" readOnly value={product.amount} />
                    <button type="button" onClick={() => increment(product)}>
                      <MdAddCircleOutline size={20} color="#1b53ba" />
                    </button>
                  </div>
                </td>

                <td>
                  <strong>{product.subtotal}</strong>
                </td>

                <td>
                  <button
                    type="button"
                    onClick={() => dispatch(cartActions.removeFromCart(product.id))}
                  >
                    <MdDelete size={20} color="#E3350D" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}> </td>
              <td colSpan={2}>
                <strong>{total}</strong>
              </td>
            </tr>
            <tr>
              <td colSpan={5}>
                {cart.length > 0 && <button type="button">Finalizar pedido</button>}
              </td>
            </tr>
          </tfoot>
        </ProductTable>
      )}
    </Container>
  );
}

export default Cart;
