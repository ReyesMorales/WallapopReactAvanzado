import "./styles.css";
import { useEffect, useState } from "react";
import { getLatestAdverts } from "./service";

const AdvertsPage = () => {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    getLatestAdverts().then((adverts) => setAdverts(adverts));
  }, []);

  return (
    <div className="advertsPage">
      <ul>
        {adverts.map((advert) => (
          <li key={advert.id}>{advert.descripcion}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdvertsPage;
