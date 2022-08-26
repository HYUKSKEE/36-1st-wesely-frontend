import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import OverView from './OverView/OverView';
import GoCartModal from './GoCartModal/GoCartModal';
import OpenDetailView from './OpenDetailView/OpenDetailView';
import Review from '../DetailPage/Review/Review';
import Footer from '../../components/Footer/Footer';
import API from '../../config';
import Nav from '../../components/NavScroll/Nav/Nav';
import UnderBar from './UnderBar/UnderBar';

function DetailPage() {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [goToCartToggle, setGoToCartToggle] = useState(false);
  const goToCartModalToggleChange = () => {
    setGoToCartToggle(!goToCartToggle);
  };

  const goToCartModalClose = () => {
    setGoToCartToggle(false);
  };

  const [offset, setOffset] = useState(0);

  const [navState, setNavState] = useState('');

  useEffect(() => {
    window.addEventListener('wheel', e => handleScroll(e));
    return () => {
      window.removeEventListener('wheel', e => handleScroll(e));
    };
  }, []);

  const handleScroll = e => {
    e.deltaY > 0 && setNavState('noHeader');
    e.deltaY < 0 && setNavState('fixed');
  };

  const LIMIT = 7;
  const OFFSET = LIMIT + offset;
  useEffect(() => {
    setIsLoading(prev => true);
    fetch(`${API.detail}/${params.id}?limit=${LIMIT}&offset=${OFFSET - 7}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
      });
    setIsLoading(prev => false);
  }, [OFFSET, params.id]);

  return (
    !isLoading && (
      <div>
        {goToCartToggle && (
          <GoCartModal goToCartModalClose={goToCartModalClose} />
        )}

        {navState === '' || navState === 'noHeader' || navState === 'fixed' ? (
          <Nav navState={navState} />
        ) : (
          ''
        )}
        <OverView
          product={product}
          goToCartModalToggleChange={goToCartModalToggleChange}
        />
        <OpenDetailView product={product} />
        <Review
          product={product}
          offset={offset}
          setOffset={setOffset}
          LIMIT={LIMIT}
        />
        <UnderBar />
        <Footer />
      </div>
    )
  );
}

export default DetailPage;
