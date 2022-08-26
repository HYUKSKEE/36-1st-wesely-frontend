import { useState } from 'react';
import BuyModal from '../BuyModal/BuyModal';

import './OverView.scss';

function OverView({ product, goToCartModalToggleChange }) {
  const [buyModalToggle, setBuyModalToggle] = useState(false);
  const displayRating =
    Math.floor(product?.optionData?.map(list => list.avgRating) * 10) / 10;

  return (
    <>
      <div className="overView">
        <div className="overViewContainer">
          <h1 className="productImage">
            <img src={product?.optionData?.map(list => list.thumbImg)} alt="" />
          </h1>
          <div className="productInfoWrap">
            <div className="productInfo">
              <h2>해비추얼</h2>
              <h3>{product?.optionData?.map(list => list.productName)}</h3>
              <p>{product?.optionData?.map(list => list.description)}</p>
            </div>
            <div className="productMain">
              <div className="productLike">
                <div className="totalReview">
                  <p className="star">★★★★☆</p>
                  <p className="number">
                    {Number(displayRating).toLocaleString()}
                  </p>
                  <span>
                    (
                    {Number(
                      product?.optionData?.map(list => list.countRating)
                    ).toLocaleString()}
                    )
                  </span>
                </div>
                <span className="price">
                  {Number(
                    product?.optionData?.map(list => list.price)
                  ).toLocaleString()}
                </span>
              </div>
              <div className="productBuy">
                <button
                  className="productBuyButton"
                  onClick={() => setBuyModalToggle(!buyModalToggle)}
                >
                  구매
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {buyModalToggle && (
        <BuyModal
          setBuyModalToggle={setBuyModalToggle}
          goToCartModalToggleChange={goToCartModalToggleChange}
          product={product}
        />
      )}
    </>
  );
}

export default OverView;
