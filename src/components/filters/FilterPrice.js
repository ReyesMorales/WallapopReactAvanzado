import React from 'react';
import ReactSlider from 'react-slider';
// import 'react-slider/react-slider.css';
import './styles.css';

function PriceRangeSlider({ minPrice, maxPrice, setMinPrice, setMaxPrice, itemMaxPrice }) {
  const handlePriceChange = (values) => {
    setMinPrice(values[0]);
    setMaxPrice(values[1]);
  };

  return (
    <div>
      <ReactSlider
        className="price-range-slider"
        thumbClassName="price-range-slider-thumb"
        trackClassName="price-range-slider-track"
        value={[minPrice, maxPrice]}
        min={0}
        max={itemMaxPrice}
        step={50}
        onChange={handlePriceChange}
      />
      <div className="price-range-values">
        <span>Min: {minPrice}</span>
        <span>Max: {maxPrice}</span>
      </div>
    </div>
  );
}

export { PriceRangeSlider };
