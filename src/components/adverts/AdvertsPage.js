import './styles.css';
import { useEffect, useState } from 'react';
import { getLatestAdverts } from './service';
import { useNavigate } from 'react-router-dom';
import Button from '../shared/Button';
import Layout from '../layout/Layout';
import Advert from './Advert';
import { FilterVentaCompra } from '../filters/FilterVentaCompra';
import { PriceRangeSlider } from '../filters/FilterPrice';

const AdvertsPage = (props) => {
  const [adverts, setAdverts] = useState([]);
  const [selectedOption, setSelectedOption] = useState('no-filtro');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const navigate = useNavigate();

  useEffect(() => {
    getLatestAdverts().then((adverts) => {
      setAdverts(adverts);
    });
  }, []);

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
