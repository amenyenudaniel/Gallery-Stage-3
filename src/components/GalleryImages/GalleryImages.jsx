import React, { useState, useEffect } from "react";
import "./GalleryImages.css";

const GalleryImages = ({ imageData, setImageData }) => {
  const [imageDataState, setImageDataState] = useState([]);

  useEffect(() => {
    if (imageData) {
      setImageDataState(imageData);
      return;
    }

    const imageDataFromLocalStorage = localStorage.getItem("imageData");
    if (imageDataFromLocalStorage) {
      setImageDataState(JSON.parse(imageDataFromLocalStorage));
      return;
    }

    setImageDataState([]);
  }, [imageData]);

  useEffect(() => {
    localStorage.setItem("imageData", JSON.stringify(imageDataState));
  }, [imageDataState]);

  function deleteImage(index) {
    setImageDataState((prevImages) => prevImages.filter((_, i) => i !== index));
  }

  return (
    <div className="fancy-grid">
      {imageDataState &&
        imageDataState.map((image, index) => (
          <div key={index} className="imagedata_container">
            <img src={image?.url} alt={image?.url} />
            <p onClick={() => deleteImage(index)}>&times;</p>
          </div>
        ))}
    </div>
  );
};

export default GalleryImages;
