import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../layout/Layout';
import Button from '../shared/Button';
import { useNavigate } from 'react-router-dom';
import { createAdvert, getTags } from './service';
import FileInput from '../shared/FileInput';
import { setTags, createAdvert as createAdvertAction } from '../../store/reducers/advertsReducer';
import styled from 'styled-components';

const NewAdvertForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const FormField = styled.div`
  margin-bottom: 1rem;

  label {
    margin-bottom: 0.5rem;
  }

  input,
  select {
    width: 100%;
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  select {
    background-color: #fff;
    cursor: pointer;
  }
`;

const TagCheckbox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  input[type='checkbox'] {
    margin-right: 0.5rem;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const NewAdvertPage = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    sale: '',
    tags: [],
    photo: undefined,
  });

  const tags = useSelector((state) => state.adverts.tags);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    void (async () => {
      try {
        const response = await getTags();
        dispatch(setTags(response));
      } catch (error) {
        console.error('Error fetching tags:', error);
      }
    })();
  }, [dispatch]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await createAdvert(formData);
      console.log('Advert created successfully:', response);
      dispatch(createAdvertAction(response)); // Dispatching the action to add the new advert to the state
      navigate('/');
    } catch (error) {
      console.error('Error creating advert:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    if (type === 'checkbox') {
      const { checked } = event.target;
      const selectedTags = [...formData.tags];
      if (checked) {
        selectedTags.push(value);
      } else {
        const index = selectedTags.indexOf(value);
        if (index !== -1) {
          selectedTags.splice(index, 1);
        }
      }

      setFormData({
        ...formData,
        [name]: selectedTags,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handlePhotoChange = (photo) => {
    setFormData({
      ...formData,
      photo,
    });
  };

  return (
    <Layout title="What do you need?" {...props}>
      <h1>New Advert Page</h1>
      <NewAdvertForm onSubmit={handleSubmit}>
        <FormField>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" onChange={handleChange} required />
        </FormField>
        <FormField>
          <label htmlFor="sale">Tipo:</label>
          <select id="sale" name="sale" onChange={handleChange} required>
            <option value="">-- Selecciona una opción --</option>
            <option name="venta" value={true}>
              Venta
            </option>
            <option name="compra" value={false}>
              Compra
            </option>
          </select>
        </FormField>
        <FormField>
          <label htmlFor="price">Precio:</label>
          <input type="text" id="price" name="price" onChange={handleChange} required />
        </FormField>
        <FormField>
          <label>Tags:</label>
          {tags.map((tag) => (
            <TagCheckbox key={tag}>
              <input
                type="checkbox"
                name="tags"
                value={tag}
                checked={formData.tags.includes(tag)}
                onChange={handleChange}
              />
              <label>{tag}</label>
            </TagCheckbox>
          ))}
        </FormField>
        <FormField>
          <FileInput id="photo" onChange={handlePhotoChange} />
        </FormField>
        <ButtonsContainer>
          <Button
            type="submit"
            name="create-advert-button"
            className="create-advert-button"
            variant="primary"
            disabled={
              formData.name === '' ||
              formData.sale === '' ||
              formData.price === '' ||
              formData.tags.length === 0
            }
          >
            Create
          </Button>
          <Button
            type="button"
            name="cancel-advert-button"
            className="create-advert-button"
            variant="secondary"
            onClick={() => navigate('/')}
          >
            Cancel
          </Button>
        </ButtonsContainer>
      </NewAdvertForm>
    </Layout>
  );
};

export default NewAdvertPage;
