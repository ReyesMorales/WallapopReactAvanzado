import React, { useEffect, useState } from 'react';
import Advert from './Advert';
import { useParams } from 'react-router-dom';
import { getAdvertDetail } from './service';
import Layout from '../layout/Layout';
import Button from '../shared/Button';
import { useNavigate } from 'react-router-dom';


export const DetailedAdvert = () => {
  const { id } = useParams();
  const [advert, setAdvert] = useState({});

  const navigate = useNavigate();

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
      <Button onClick={() => {navigate('/')}}>Back</Button>
    </Layout>
  );
};
