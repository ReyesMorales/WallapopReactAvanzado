import Layout from '../layout/Layout';
import Button from '../shared/Button';
import React, { useState, useEffect } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

const NewAdvertPage = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    sale: '',
    tags: [],
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (formData.name !== '' && formData.sale !== '' && formData.price !== '') {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [formData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
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
        <label>
          Tags:
          <input
            type="checkbox"
            name="tags"
            value="lifestyle"
            checked={formData.tags.includes('lifestyle')}
            onChange={handleChange}
          />
          <label>Lifestyle</label>
          <br />
          <input
            type="checkbox"
            name="tags"
            value="mobile"
            checked={formData.tags.includes('mobile')}
            onChange={handleChange}
          />
          <label>Mobile</label>
          <br />
          <input
            type="checkbox"
            name="tags"
            value="motor"
            checked={formData.tags.includes('motor')}
            onChange={handleChange}
          />
          <label>Motor</label>
          <br />
          <input
            type="checkbox"
            name="tags"
            value="work"
            checked={formData.tags.includes('work')}
            onChange={handleChange}
          />
          <label>Work</label>
        </label>
      </form>
      <Button
        type="submit"
        name="create-advert-button"
        className="create-advert-button"
        onClick={handleSubmit}
        variant="secondary"
        disabled={buttonDisabled}
      >
        Crear
      </Button>
      <Button
        type="button"
        name="cancel-advert-button"
        className="create-advert-button"
        variant="secondary"
        onClick={() => navigate('/')}
      >
        Cancelar
      </Button>
    </Layout>
  );
};

export default NewAdvertPage;
