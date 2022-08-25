import { useState, useEffect } from 'react';

// import Nav from '../../../components/NavScroll/Nav/Nav';
import './UnderBar.scss';

function UnderBar() {
  const [barState, setUnderBarState] = useState('');

  useEffect(() => {
    window.addEventListener('wheel', e => navHandleScroll(e));
    return () => {
      window.removeEventListener('wheel', e => navHandleScroll(e));
    };
  }, []);

  const navHandleScroll = e => {
    window.scrollY > 424 && setUnderBarState('underBar');
    window.scrollY < 424 && setUnderBarState('NoUnderBar');
    window.scrollY > 2650 && setUnderBarState('NoUnderBar');
  };

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {barState === 'underBar' && (
        <div className={`underBarContainer ${barState}`}>
          <div className="underBarBox">
            <h1>탈모 고민용 부스터 100ml</h1>
            <div className="underBarMainContent">
              <div className="underBarAverage">
                <div className="underBarAverageStar">★★★★☆</div>
                <div className="underBarAverageRating">4.6</div>
                <div className="underBarAverageTotalReview">(327)</div>
                <div className="underBarAveragePrice">4,900원</div>
              </div>
              <div className="underBarBuyButtonWrap">
                <button className="underBarSubscribeButton">정기구독</button>
                <button className="underBarBuyButton">일반구매</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default UnderBar;
