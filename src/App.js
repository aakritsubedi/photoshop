import React, { useState } from "react";

import PhotoOutput from "components/PhotoOutput";
import Sidebar from "components/Sidebar";
import Slider from "components/Slider";

import DEFAULT_OPTIONS from "constants/defaultOptions";

import "assets/css/App.css";

function App() {
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const selectedOptions = options[selectedOptionIndex];

  const handleClick = (index) => {
    setSelectedOptionIndex(index);
  };

  const handleChange = ({ target }) => {
    setOptions((prevOptions) => {
      return prevOptions.map((option, index) => {
        if (index !== selectedOptionIndex) return option;

        return { ...option, value: target.value };
      });
    });
  };
 
  const getImageStyle = () => {
    const filters = options.map(option => {
      return `${option.property}(${option.value}${option.unit})`
    })

    return { filter: filters.join(' ') }
  }

  return (
    <div className="container">
      <PhotoOutput style={getImageStyle()} />
      <Sidebar
        options={options}
        selectedOptionIndex={selectedOptionIndex}
        handleClick={handleClick}
      />
      <Slider
        min={selectedOptions.range.min}
        max={selectedOptions.range.max}
        value={selectedOptions.value}
        handleChange={handleChange}
      />
    </div>
  );
}

export default App;
