import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { DragDrop, GalleryImages } from "../../components";
import "./Gallery.css";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [imageData, setImageData] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updateScrollPosition = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", updateScrollPosition);

    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, []);

  return (
    <motion.div
      className="app__gallery"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
      <section className="section__gallery">
        <nav>
          <h1 onClick={() => navigate("/gallery")}>AIGallery</h1>

          <button className="signOut__btn" onClick={() => navigate("/")}>
            Sign Out
          </button>
        </nav>
        <h1 className="app__H1">
          "Explore the artistry of our vibrant gallery with <br />       {" "}
          <span>AIGallery</span>, <br />        where aesthetics evoke
          inspiration at every turn"
        </h1>
      </section>
      <section className="section__padding">
        <DragDrop
          setImages={setImages}
          images={images}
          setImageData={setImageData}
        />
        <GalleryImages
          images={images}
          imageData={imageData}
          setImageData={setImageData}
        />
      </section>
    </motion.div>
  );
};

export default Gallery;
