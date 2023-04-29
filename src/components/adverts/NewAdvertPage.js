import Layout from "../layout/Layout";
import Button from "../shared/Button";
import React, { useState, useEffect } from "react";

const NewAdvertPage = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    sale: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (formData.name !== "" && formData.sale !== ""  && formData.price !== "") {
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
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
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
          <br></br>
        </label>
        <label>
          Precio:
          <input type="text" name="price" onChange={handleChange} />
        </label>
      </form>
      <Button
        type="submit"
        name="button"
        onClick={handleSubmit}
        variant="secondary"
        disabled={buttonDisabled}
      >Crear
      </Button>
    </Layout>
  );
};

export default NewAdvertPage;
