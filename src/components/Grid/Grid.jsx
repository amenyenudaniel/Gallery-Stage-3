import "./Grid.css";
import { gallery1, gallery2, gallery3, gallery4 } from "../../assets";
import { useNavigate } from "react-router-dom";
const Grid = () => {
  const navigate = useNavigate();
  return (
    <section className="section__grid">
      <h2>Curated Masterpieces</h2>
      <div className="grid__container">
        <div className="grid">
          <img src={gallery1} alt="gallery__images" className="small__image" />
          <img src={gallery2} alt="gallery__images" className="large__image" />
        </div>
        <div className="grid">
          <img src={gallery3} alt="gallery__images" className="large__image" />
          <img src={gallery4} alt="gallery__images" className="small__image" />
        </div>
      </div>
      <div className="join" id="join">
        <h3>Join the Movement</h3>
        <p>
          Don’t just stand on the sidelines—unleash your <br />
          inner artist with AiGallery. Sign up today to share
          <br /> your work, awaken your inspiration, and connect <br />
          with your dream audience.
        </p>
        <div className="buttons">
          <button className="signUp__btn" onClick={() => navigate("/signUp")}>
            Sign Up
          </button>
          <button className="logIn__btn" onClick={() => navigate("/logIn")}>
            Log In
          </button>
          <button className="signUp__btn2" onClick={() => navigate("/signUp")}>
            Sign Up
          </button>
          <button className="logIn__btn2" onClick={() => navigate("/logIn")}>
            Log In
          </button>
        </div>
      </div>
    </section>
  );
};

export default Grid;
