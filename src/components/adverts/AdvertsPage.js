import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLatestAdverts } from './service';
import { useNavigate } from 'react-router-dom';
import Button from '../shared/Button';
import Layout from '../layout/Layout';
import Advert from './Advert';
import { FilterVentaCompra } from '../filters/FilterVentaCompra';
import { PriceRangeSlider } from '../filters/FilterPrice';
import { setAdverts } from '../../store/reducers/advertsReducer';

const AdvertsPage = (props) => {
  const [selectedOption, setSelectedOption] = useState('no-filtro');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(undefined);
  const [itemMaxPrice, setItemMaxPrice] = useState(0);

  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.session.isLoggedIn);
  const adverts = useSelector((state) => state.adverts.adverts);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }

    getLatestAdverts().then((adverts) => {
      dispatch(setAdverts(adverts));

      const maxPrice = Math.max(...adverts.map((advert) => advert.price));
      setItemMaxPrice(maxPrice);
      setMaxPrice(maxPrice);
    });
  }, [isLoggedIn, navigate, dispatch]);

  const navigateToNewAdvert = () => {
    navigate('adverts/new');
  };

  return (
    <>
      <div className="header">
        <h1 className="header-title">Nodepop</h1>
      </div>
      <div className="main-content">
        <Layout title="Second life for your things" {...props}>
          <div className="adverts-container">
            <h2>Filtros</h2>
            <FilterVentaCompra
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
            <PriceRangeSlider
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
              itemMaxPrice={itemMaxPrice}
            />
            <ul>
              {adverts
                ?.filter((advert) => {
                  if (selectedOption === 'venta') {
                    return advert.sale === true;
                  } else if (selectedOption === 'compra') {
                    return advert.sale === false;
                  }
                  return true;
                })
                .filter((advert) => {
                  return advert.price >= minPrice && advert.price <= maxPrice;
                })
                .map((advert) => {
                  const handleAdvertClick = () => {
                    navigate(`/adverts/${advert.id}`);
                  };

                  return (
                    <li
                      className="clickable-advert"
                      onClick={handleAdvertClick}
                      key={advert.id}
                    >
                      <Advert
                        id={advert.id}
                        name={advert.name}
                        sale={advert.sale}
                        price={advert.price}
                        tags={advert.tags}
                        photo={advert.photo}
                      />
                    </li>
                  );
                })}
            </ul>
          </div>
          <Button className="secondary-button" onClick={navigateToNewAdvert}>
            Create an Advert
          </Button>
        </Layout>
      </div>
    </>
  );
};

export default AdvertsPage;
