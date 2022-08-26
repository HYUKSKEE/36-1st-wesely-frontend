import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import ProductCard from './ContentItem/ProductCard';
import PageBtn from './PageBtn/PageBtn';
import API from '../../config';
import './ListPage.scss';
import NavScroll from '../../components/NavScroll/NavScroll';
import Footer from '../../components/Footer/Footer';

function ListPage() {
  const [productData, setProductData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(0);
  const [offset, setOffSet] = useState(0);
  const [sortType, setSortType] = useState('price');

  const maxLimit = 6;

  useEffect(() => {
    const checkStatus = res => {
      if (!res.ok) throw new Error(`Again Check Status: ${res.status}`);
      return res.json();
    };
    const uploadProductData = data => {
      setProductData(data);
    };

    fetch(
      `${API.product}?${
        category === 0
          ? `offset=${offset}&limit=${maxLimit}&ordering=${sortType}`
          : `offset=${offset}&limit=${maxLimit}&categoryId=${category}&ordering=${sortType}`
      }`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then(checkStatus)
      .then(uploadProductData)
      .catch(error => console.error(error));
  }, [category, offset, sortType]);

  const movePage = pageNumber => {
    const settingOffset = (pageNumber - 1) * 6;
    searchParams.set('offset', settingOffset);
    searchParams.set('limit', maxLimit);
    setOffSet(settingOffset);
    setSearchParams(searchParams);
  };

  const moveCategory = categoryId => {
    if (categoryId !== 0) {
      searchParams.set('category', categoryId);
      searchParams.set('offset', 0);
      searchParams.set('limit', maxLimit);
      setOffSet(0);
    } else {
      searchParams.delete('category');
    }
    setCategory(categoryId);
    setSearchParams(searchParams);
  };

  const changeCategorySort = sortId => {
    setSortType(sortId);
  };

  return (
    <>
      <NavScroll />
      <div className="listPage">
        <div className="contentTitle">
          <h1>제품보기</h1>
        </div>
        <nav className="contentCategory">
          <ul className="categoryWrapper">
            {categoryData.map(cateData => (
              <li
                className={`categoryName ${
                  cateData.id === category && 'currentCategory'
                }`}
                key={cateData.id}
                onClick={() => {
                  moveCategory(cateData.id);
                }}
              >
                {cateData.categoryName}
              </li>
            ))}
          </ul>
        </nav>
        <div className="listSortWrapper">
          <ul className="listSort">
            {sortCategoryNames.map(sortItem => (
              <li
                className="sortBtn"
                key={sortItem.sortId}
                onClick={() => changeCategorySort(sortItem.sortId)}
              >
                {sortItem.sortName}
              </li>
            ))}
          </ul>
        </div>
        <main className="productWrapper">
          <div className="productList">
            {productData.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </main>
        <PageBtn movePage={movePage} />
      </div>
      <Footer />
    </>
  );
}

export default ListPage;

const categoryData = [
  {
    id: 0,
    categoryName: '전체',
  },
  {
    id: 1,
    categoryName: '면도용품',
  },
  {
    id: 2,
    categoryName: '스킨케어',
  },
  {
    id: 3,
    categoryName: '두피케어',
  },
  {
    id: 4,
    categoryName: '영양제',
  },
  {
    id: 5,
    categoryName: '덴탈케어',
  },
  {
    id: 6,
    categoryName: '바디케어',
  },
  {
    id: 7,
    categoryName: '생리대',
  },
];

const sortCategoryNames = [
  {
    sortId: 'price',
    sortName: '높은 가격순',
  },
  {
    sortId: '-price',
    sortName: '낮은 가격순',
  },
  {
    sortId: 'sales',
    sortName: '판매량순',
  },
  {
    sortId: 'avgRating',
    sortName: '평점순',
  },
];
