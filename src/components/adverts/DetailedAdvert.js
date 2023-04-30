import React, { useEffect, useState } from 'react';
import Advert from './Advert';
import { useParams } from 'react-router-dom';
import { getAdvertDetail } from './service';
import Layout from '../layout/Layout';

export const DetailedAdvert = () => {
  const { id } = useParams();
  const [advert, setAdvert] = useState({});

  useEffect(() => {
    getAdvertDetail(id)
      .then((response) => {
        setAdvert(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <Layout title="Advert Detail">
      <Advert
        id={id}
        name={advert.name}
        sale={advert.sale}
        price={advert.price}
        tags={advert.tags}
      />
    </Layout>
  );
};
