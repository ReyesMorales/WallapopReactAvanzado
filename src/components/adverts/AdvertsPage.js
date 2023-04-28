import "./styles.css";
import { useEffect, useState } from "react";
import { getLatestAdverts } from "./service";
import Button from '../shared/Button'
import { logout } from "../auth/service";
import Layout from '../layout/Layout'


const AdvertsPage = ({ onLogout }) => {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    getLatestAdverts().then((adverts) => setAdverts(adverts));
  }, []);

  const handleClick = async () => {
    await logout();
    onLogout();
  };

  return (
    <Layout title="How are you?">
    <div className="advertsPage">
        { /* <Button onClick={ handleClick }>Logout</Button> */}
      {!!adverts.length ? <ul>
        {adverts.map((advert) => (
          <li key={advert.id}>{advert.descripcion}</li>
        ))}
      </ul> : <Button variant="secondary">Do something</Button>}
    </div>
    </Layout>
  );
};

export default AdvertsPage;
