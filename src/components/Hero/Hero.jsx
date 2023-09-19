import "./Hero.css";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <header>
      <nav>
        <h1 onClick={() => navigate("/")}>AIGallery</h1>
        <div className="buttons">
          <button className="signUp__btn">Sign Up</button>
          <button className="logIn__btn">Log In</button>
        </div>
      </nav>

      <section className="hero__section">
        <h1>
          "Explore the artistry of our vibrant gallery with <br />
          <span>AIGallery</span>, <br />
          where aesthetics evoke inspiration at every turn"
        </h1>
      </section>
    </header>
  );
};

export default Hero;
