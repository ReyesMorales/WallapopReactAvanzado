import Layout from '../layout/Layout';
import Button from '../shared/Button';
import React, { useState, useEffect } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { createAdvert, getTags } from './service';
import FileInput from '../shared/FileInput';

const NewAdvertPage = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    sale: '',
    tags: [],
    photo: undefined,
  });
  const [tags, setTags] = useState([]);

  
  useEffect(() => {
    void(async () => {
      try {
        const response = await getTags();
        setTags(response);
      } catch (error) {
        console.error('Error fetching tags:', error);
      }
    })();
  }, []);

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (formData.name !== '' && formData.sale !== '' && formData.price !== '') {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [formData]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await createAdvert(formData);
      console.log('Advert created successfully:', response);
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
      <form className="new-advert-form">
        <label>
          Nombre:
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <br />
        <label>
          Tipo:
          <select type="select-one" name="sale" onChange={handleChange}>
            <option value="">-- Selecciona una opción --</option>
            <option name="venta" value={true}>
              Venta
            </option>
            <option name="compra" value={false}>
              Compra
            </option>
          </select>
          <br />
        </label>
        <label>
          Precio:
          <input type="text" name="price" onChange={handleChange} />
        </label>
        <br />
        <br />
        <label>
          Tags:
          {tags.map((tag) => (
            <React.Fragment key={tag}>
              <input
                type="checkbox"
                name="tags"
                value={tag}
                checked={formData.tags.includes(tag)}
                onChange={handleChange}
              />
              <label>{tag}</label>
              <br />
            </React.Fragment>
          ))}
        </label>
        <div>
          <FileInput id="photo" onChange={handlePhotoChange} />
        </div>
      </form>
      <Button
        type="submit"
        name="create-advert-button"
        className="create-advert-button"
        onClick={handleSubmit}
        variant="primary"
        disabled={buttonDisabled}
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
    </Layout>
  );
};

export default NewAdvertPage;
