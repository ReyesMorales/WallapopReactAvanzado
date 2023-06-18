import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAdvertDetail, deleteAdvert as deleteAdvertService } from './service';
import Layout from '../layout/Layout';
import Button from '../shared/Button';
import Modal from '../shared/Modal';
import Advert from './Advert';
import { useNavigate } from 'react-router-dom';
import { setAdvertDetail, deleteAdvert } from '../../store/reducers/advertsReducer';
import styled from 'styled-components';

const StyledAdvertPhoto = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  object-position: center;
  margin: 0 auto;
  display: block;
`;

export const DetailedAdvert = () => {
  const { id } = useParams();
  const advert = useSelector((state) => state.adverts.advertDetail);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteAdvertService(advert.id)
      .then(() => {
        dispatch(deleteAdvert(advert.id)); // Dispatching the action to remove the advert from the state
        setShowModal(false);
        navigate('/');
      })
      .catch((error) => {
        console.error('Error deleting advert:', error);
      });
  };

  useEffect(() => {
    getAdvertDetail(id)
      .then((response) => {
        dispatch(setAdvertDetail(response)); // Dispatching the action to set the advert detail in the state
      })
      .catch((error) => {
        console.error('Error fetching advert detail:', error);
      });
  }, [dispatch, id]);

  return (
    <Layout title="Advert Detail">
      <Advert
        id={id}
        name={advert?.name}
        sale={advert?.sale}
        price={advert?.price}
        tags={advert?.tags}
      />
      {advert?.photo && (
        <StyledAdvertPhoto src={advert.photo} alt="Advert Photo" />
      )}
      <Button onClick={() => setShowModal(true)}>Delete</Button>
      <Button onClick={() => navigate('/')}>Back</Button>
      {showModal && (
        <Modal
          title="Confirmation"
          message="Are you sure you want to delete this advert?"
          onCancel={() => setShowModal(false)}
          onConfirm={handleDelete}
        />
      )}
    </Layout>
  );
};
