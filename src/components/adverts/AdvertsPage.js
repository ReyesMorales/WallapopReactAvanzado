import "./styles.css";
import { useEffect, useState } from "react";
import { getLatestAdverts } from "./service";
import Button from '../shared/Button'
import Layout from '../layout/Layout'
import Advert from "./Advert";


const AdvertsPage = props => {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    getLatestAdverts().then((adverts) => setAdverts(adverts));
  }, []);


  return (
    <>
    <h1 className="header-title">Nodepop</h1>
    <Layout title="Second life for your things " {...props}>
    <div className="advertsPage">
       {!!adverts.length ? <ul>
        {adverts.map((advert) => (
        <Advert name={advert.name} sale={advert.sale} price={advert.price} tags={advert.tags}/>
        ))}
      </ul> : <Button variant="secondary">Do something</Button>}
      <div>Adverts Page</div>
    </div>
    </Layout>
    </>
  );
};

export default AdvertsPage;

