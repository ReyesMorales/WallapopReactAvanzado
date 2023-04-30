import "./styles.css";
import { useEffect, useState } from "react";
import { getLatestAdverts } from "./service";
import Button from "../shared/Button";
import Layout from "../layout/Layout";
import Advert from "./Advert";

const AdvertsPage = (props) => {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    getLatestAdverts().then((adverts) => setAdverts(adverts));
  }, []);

  console.log(adverts);

  return (
    <>
      <div className="header">
        <h1 className="header-title">Nodepop</h1>
      </div>
      <div className="main-content">
        <Layout title="Second life for your things" {...props}>
          <div className="adverts-container">
            {!!adverts.length ? (
              <ul>
                {adverts.map((advert) => (
                  <Advert
                    key={advert.id}
                    name={advert.name}
                    sale={advert.sale}
                    price={advert.price}
                    tags={advert.tags}
                  />
                ))}
              </ul>
            ) : (
              <Button className="secondary-button">Publish your add</Button>
            )}
          </div>
        </Layout>
      </div>
    </>
  );
};

export default AdvertsPage;
