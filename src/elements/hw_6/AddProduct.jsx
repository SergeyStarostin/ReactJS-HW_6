import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from './productSlice';

const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  const handleAddProduct = () => {
    if (name && description && price) {
      dispatch(
        addProduct({
          id: Date.now(),
          name,
          description,
          price,
          available: true,
        })
      );
      setName("");
      setDescription("");
      setPrice("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Имя"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Описание"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Цена"
      />
      <div className="btnAdd">
        <button onClick={handleAddProduct}>Добавить продукт</button>
      </div>
    </div>
  );
};

export default AddProduct;
