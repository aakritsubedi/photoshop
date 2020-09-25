import React, { useState } from "react";

import PhotoOutput from "components/PhotoOutput";
import Sidebar from "components/Sidebar";
import Slider from "components/Slider";

import DEFAULT_OPTIONS from "constants/defaultOptions";

import "assets/css/App.css";

function App() {
  const [image, setImage] = useState(null);
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const selectedOptions = options[selectedOptionIndex];

  const handleClick = (index) => {
    setSelectedOptionIndex(index);
  };

  const uploadImage = (e) => {
    console.log(e.target);
    setImage(e.target.value);
  };

  return (
    <div className="container">
      {image !== null ? (
        <PhotoOutput image={image} />
      ) : (
        <input type="file" onChange={(e) => uploadImage(e)} />
      )}
      <Sidebar
        options={options}
        selectedOptionIndex={selectedOptionIndex}
        handleClick={handleClick}
      />
      <Slider />
    </div>
  );
}

export default App;
