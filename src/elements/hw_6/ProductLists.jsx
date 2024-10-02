import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProduct, toggleAvailability } from './productSlice';
const ProductLists = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} - {product.price}$ - Доступен:{" "}
          {product.available ? "Да" : "Нет"}
          <button onClick={() => dispatch(removeProduct(product.id))}>
            Удалить
          </button>
          <button onClick={() => dispatch(toggleAvailability(product.id))}>
            Переключить доступность
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ProductLists;
