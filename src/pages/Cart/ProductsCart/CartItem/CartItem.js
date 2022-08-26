import React from 'react';
import API from '../../../../config';
import './CartItem.scss';
import { useState } from 'react';
const CartItem = ({
  user_id,
  image_id,
  name,
  options,
  price,
  totalQuantity,
  image_url,
  products,
  setProducts,
}) => {
  const [isOutOfstock, setiIOutOfstock] = useState(false);

  function quantityPlus() {
    fetch(`${API.cart}/plus/image/${image_id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token'),
      },
    })
      .then(response => response.json())
      .then(validData => {
        if (validData.message === 'MAXIMUM STOCK OVER') {
          setiIOutOfstock(true);
        } else {
          setProducts(
            products.map(product =>
              product.image_id === image_id
                ? { ...product, totalQuantity: Number(totalQuantity) + 1 }
                : product
            )
          );
        }
      });
  }

  function quantityMinus() {
    if (totalQuantity > 1) {
      fetch(`${API.cart}/minus/image/${image_id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          authorization: localStorage.getItem('token'),
        },
      });
      if (isOutOfstock) setiIOutOfstock(false);
      setProducts(
        products.map(product =>
          product.image_id === image_id
            ? { ...product, totalQuantity: Number(totalQuantity) - 1 }
            : product
        )
      );
    }
  }

  function productDelete() {
    fetch(`${API.cart}/image/${image_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token'),
      },
    });
    setProducts(products.filter(product => product.image_id !== image_id));
  }
  return (
    <div className="itemContainer">
      <div className="imgCover">
        <img src={image_url} alt="itemImg" className="itemImg" />
      </div>
      <div className="itemBox">
        <div className="itemInfo">
          <div>
            <div className="itemName">{name}</div>
            <div className="itemType">{options}</div>
          </div>
          <div className="itemPrice">
            {Number(price * totalQuantity).toLocaleString() + '원'}
          </div>
        </div>
        <div className="iconBox">
          <div>
            <i className="fa-solid fa-xmark" onClick={productDelete} />
          </div>
          <div className="outOfStock">{isOutOfstock && '재고 부족'}</div>
          <div className="quantityBox">
            <button className="minusBtn" onClick={quantityMinus}>
              <i className="fa-solid fa-minus" />
            </button>
            <div className="quantityNum">{totalQuantity}</div>
            <button className="plusBtn" onClick={quantityPlus}>
              <i className="fa-solid fa-plus" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
