import React from 'react';
import './Cart.scss';
import { useState, useEffect } from 'react';
import ProductsCart from './ProductsCart/ProductsCart';
import API from '../../config';
import SubNav from '../../components/SubNav/SubNav';
const Cart = () => {
  const [products, setProducts] = useState([]);
  const [subscriptionCycle, setSubscriptionCycle] = useState('');
  useEffect(() => {
    fetch(API.cart, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(setProducts);
  }, []);

  if (setProducts.length === 0) return;

  return (
    <div className="cartContainer">
      <SubNav />
      <div className="cartTitle">장바구니</div>
      <div className="cartMenu">
        {subscriptionCycle === '' ? '일반구매' : '정기구독'}
        <span className="itemTotal">{products.length}</span>
      </div>
      <div className="cartSpace">
        <div className="cartBox">
          {products.length === 0 ? (
            <div className="emptyCart">
              <img
                src="images/emptyBox.png"
                alt="emptyBox"
                className="emptyImg"
              />
              <div className="emptyTitle">담은 상품이 없습니다 :(</div>
              <button className="buyBtn">구매하러 가기</button>
            </div>
          ) : (
            <ProductsCart
              products={products}
              setProducts={setProducts}
              subscriptionCycle={subscriptionCycle}
              setSubscriptionCycle={setSubscriptionCycle}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
