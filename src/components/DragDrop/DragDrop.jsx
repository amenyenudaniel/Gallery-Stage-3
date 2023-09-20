import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import "./DragDrop.css";

const DragDrop = ({ setImages, images, setImageData }) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  function selectFiles() {
    fileInputRef.current.click();
  }

  function onFileSelect(e) {
    const files = e.target.files;
    if (files.length === 0) return;

    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((e) => e.name === files[i].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  }

  function deleteImage(index) {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  }

  function onDragOver(e) {
    e.preventDefault();
    setIsDragging(true);
    e.dataTransfer.dropEffect = "copy";
  }

  function onDragLeave(e) {
    e.preventDefault();
    setIsDragging(false);
  }

  function onDrop(e) {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((e) => e.name === files[i].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  }

  function upLoadImage() {
    console.log(images);
    setImages([]);
    setImageData(images);
  }

  const dragDropAnimation = {
    scale: isDragging ? 1.1 : 1,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  };

  return (
    <motion.div className="app__dragDrop" animate={dragDropAnimation}>
      <div
        className="drag-area"
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        {isDragging ? (
          <span className="select">Drop images here </span>
        ) : (
          <>
            Drag & Drop image here
            <span className="select" role="button" onClick={selectFiles}>
              Browse
            </span>
          </>
        )}

        <input
          type="file"
          name="file"
          className="file"
          multiple
          ref={fileInputRef}
          onChange={onFileSelect}
        />
      </div>
      <div className="container">
        {images.map((images, index) => (
          <div className="image" key={index}>
            <span className="delete" onClick={() => deleteImage(index)}>
              &times;
            </span>
            <img src={images.url} alt="" />
          </div>
        ))}
      </div>
      <button type="button" onClick={upLoadImage}>
        Upload
      </button>
    </motion.div>
  );
};

export default DragDrop;
