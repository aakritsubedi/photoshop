import React, { useEffect } from "react";

function PhotoOutput({ image, style }) {
  const setImgBg = () => {
    document.getElementById('main-img').style.backgroundImage =  `url(${image})`;
  }

  useEffect(() => {
    setImgBg();
  })

  return <div className="main-image" id='main-img' style={style}></div>;
}

export default PhotoOutput;
