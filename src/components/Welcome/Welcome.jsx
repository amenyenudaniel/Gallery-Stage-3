import "./Welcome.css";
import { camera, star1, star2, star3, star4, star5 } from "../../assets";
const Welcome = () => {
  return (
    <section className="welcome__section">
      <div className="welcome__banner">
        <div className="welcome__content">
          <h2>Welcome to the AIGallery</h2>
          <p>
            Dive into an ocean of artistic wonders and capture your senses with
            our breathtaking art and photography collections! Are you ready to
            embrace the extraordinary?
          </p>
        </div>
        <img src={camera} alt="camera__image" />
      </div>

      <div className="welcome__stars">
        <img src={star1} alt="star__image" className="first__image" />
        <img src={star2} alt="star__image" className="last__image" />
        <img src={star3} alt="star__image" className="middle__image" />
        <img src={star4} alt="star__image" className="last__image" />
        <img src={star5} alt="star__image" className="first__image" />
      </div>
    </section>
  );
};

export default Welcome;
