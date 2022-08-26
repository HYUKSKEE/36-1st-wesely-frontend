import { Link } from 'react-router-dom';
import './GoCartModal.scss';

function GoCartModal({ goToCartModalClose }) {
  return (
    <div className="GoCartModalContainer">
      <div className="GoCartModalBox">
        <div className="GoCartModalXBtn" onClick={goToCartModalClose}>
          ×
        </div>
        <div className="GoCartModalItemInfo">
          <div className="GoCartModalParagraph">
            <img
              src="https://wiselystatic.s3.amazonaws.com/THUMBNAIL/prod/assets/images/item/200201000/main/ow-booster-porecontrol-main.png"
              alt=""
            />
            <div className="GoCartModalText">
              <h1>장바구니에 담았습니다.</h1>
              <p>유기농 순면 생리대 중형/대형</p>
            </div>
          </div>
          <div className="GoCartModalButton">
            <button className="GoCartModalMore" onClick={goToCartModalClose}>
              쇼핑 계속하기
            </button>
            <Link to="/Cart" className="GoCartModalCart">
              장바구니 가기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoCartModal;
