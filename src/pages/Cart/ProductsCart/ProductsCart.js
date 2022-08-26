import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import CartItem from './CartItem/CartItem';

import './ProductsCart.scss';

const ProductsCart = ({
  products,
  setProducts,
  subscriptionCycle,
  setSubscriptionCycle,
}) => {
  const navigate = useNavigate();

  const totalPrice = products?.reduce(
    (acc, cur) => acc + Number(cur.price * cur.totalQuantity),
    0
  );

  const point = products[0].point;
  const holdPoint = Number(point).toLocaleString();
  const totalWon = totalPrice.toLocaleString() + '원';
  const remainPoint = (Number(point) - Number(totalPrice)).toLocaleString();
  const isPurchaseUnable = point - totalPrice < 0;

  return (
    <>
      <div className="subscribeBox">
        <div className={`subscribeTitle ${subscriptionCycle !== ''}`}>
          정기 구독 주기
        </div>
        <ul className="subscribeList">
          {PERIOD_LIST.map(info => {
            return (
              <button
                className={`subscribe ${subscriptionCycle === info.id}`}
                key={info.id}
                onClick={() =>
                  subscriptionCycle === info.id
                    ? setSubscriptionCycle('')
                    : setSubscriptionCycle(info.id)
                }
              >
                {info.period}
              </button>
            );
          })}
        </ul>
      </div>
      {products.map(product => {
        return (
          <CartItem
            key={product.image_id}
            {...product}
            products={products}
            setProducts={setProducts}
          />
        );
      })}
      <div className="billBox">
        <div className="bill">
          <span>합계</span>
          <span className="billPrice">{totalWon}</span>
        </div>
        <div className="bill">
          <span>배송비</span>
          <span className="billPrice">무료</span>
        </div>
        <div className="totalBill">
          <span>결제 예정 금액</span>
          <span>{totalWon}</span>
        </div>
        <div className="pointBillBox">
          <div className="pointBill">
            <div className="pointInfo">보유 포인트</div>
            <div className="point">{holdPoint}</div>
          </div>
          <div className="pointBill">
            <div className={`pointInfo ${isPurchaseUnable}`}>잔여 포인트</div>
            <div className={`point ${isPurchaseUnable}`}>{remainPoint}</div>
          </div>
        </div>
      </div>
      <div className="cartBtnBox">
        <Link to="/">
          <button className="keepBtn"> 더 담으러 가기</button>
        </Link>
        <button
          className={`purchaseBtn ${!isPurchaseUnable}`}
          disabled={isPurchaseUnable}
          onClick={() => navigate('/')}
        >
          결제하기
        </button>
      </div>
    </>
  );
};

export default ProductsCart;

const PERIOD_LIST = [
  { id: 2, period: '4주' },
  { id: 3, period: '8주' },
  { id: 4, period: '12주' },
  { id: 5, period: '16주' },
];
