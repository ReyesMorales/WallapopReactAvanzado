import React from 'react';

export const FilterVentaCompra = ({ selectedOption, setSelectedOption }) => {
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <form>
      <div>
        <label>
          <input
            type="radio"
            value="venta"
            checked={selectedOption === 'venta'}
            onChange={handleOptionChange}
          />
          Venta
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="compra"
            checked={selectedOption === 'compra'}
            onChange={handleOptionChange}
          />
          Compra
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="no-filtro"
            checked={selectedOption === 'no-filtro'}
            onChange={handleOptionChange}
          />
          No filtro
        </label>
      </div>
    </form>
  );
};
