import { useState } from 'react';

import API from '../../../config';

import ItemList from './ItemList';
import './BuyModal.scss';

function BuyModal({ setBuyModalToggle, product, goToCartModalToggleChange }) {
  const [selectedItem, setSelectedItem] = useState([]);
  const [arrowToggle, setArrowToggle] = useState(true);
  const [totalCount, setTotalCount] = useState({
    total1: 0,
    total2: 0,
    total3: 0,
    total4: 0,
  });
  const [imageId, setImageId] = useState({
    imageId1: 0,
    imageId2: 0,
    imageId3: 0,
    imageId4: 0,
  });
  console.log('a', selectedItem);
  console.log('b', totalCount);

  const postData = () => {
    fetch(`${API.cartIn}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        imageId1: imageId.imageId1,
        quantity1: totalCount.total1,
        imageId2: imageId.imageId2,
        quantity2: totalCount.total2,
        imageId3: imageId.imageId3,
        quantity3: totalCount.total3,
        imageId4: imageId.imageId4,
        quantity4: totalCount.total4,
      }),
    });
  };

  const buyModalToggleChange = () => {
    setArrowToggle(!arrowToggle);
  };

  const selectItem = ({ target }) => {
    const selectObj = product.productDetail[Number(target.id)];

    if (!selectedItem.includes(selectObj)) {
      setSelectedItem([
        ...selectedItem,
        Object.assign(selectObj, {
          quantity: 1,
          image: selectObj.imageId,
        }),
      ]);
    }

    if (selectObj.imageId === 1) {
      setImageId({ ...imageId, imageId1: selectObj.imageId });
      setTotalCount({ ...totalCount, total1: 1 });
    } else if (selectObj.imageId === 2) {
      setImageId({ ...imageId, imageId2: selectObj.imageId });
      setTotalCount({ ...totalCount, total2: 1 });
    } else if (selectObj.imageId === 3) {
      setImageId({ ...imageId, imageId3: selectObj.imageId });
      setTotalCount({ ...totalCount, total3: 1 });
    } else if (selectObj.imageId === 4) {
      setImageId({ ...imageId, imageId4: selectObj.imageId });
      setTotalCount({ ...totalCount, total4: 1 });
    }
  };

  const deleteItem = id => {
    const filteredItem = [...selectedItem].filter(item => item.imageId !== id);
    setSelectedItem(filteredItem);
  };

  const closeBuyModal = () => {
    setBuyModalToggle(false);
  };
  return (
    <div className="buyModalBox">
      <div className="toast">
        <div className="toastContainer">
          <div className="closeBox" onClick={closeBuyModal}>
            ×
          </div>
          <section>
            <h1>탄력/잡티/모공/세럼</h1>
            <div className="selectBox">
              <div className="boxHandle">
                <span className="defaultText">타입</span>
                <span className="arrowButton" onClick={buyModalToggleChange}>
                  ˅
                </span>
              </div>
              {arrowToggle && (
                <div className="selectOption">
                  {product?.productDetail?.map((list, idx) => {
                    return (
                      <div
                        className="option"
                        key={list.imageId}
                        id={idx}
                        onClick={selectItem}
                      >
                        {list.options}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </section>
          <section className="itemContainerWrap">
            <ItemList
              setImageId={setImageId}
              imageId={imageId}
              selectedItem={selectedItem}
              deleteItem={deleteItem}
              totalCount={totalCount}
              setTotalCount={setTotalCount}
            />
            <div className="itemBuy">
              <button
                className="cartButton"
                onClick={() => {
                  postData();
                  selectedItem.length > 0 && goToCartModalToggleChange();
                }}
              >
                장바구니
              </button>
              <button className="buyButton">일반구매</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default BuyModal;
