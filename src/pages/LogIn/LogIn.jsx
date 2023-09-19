import "./LogIn.css";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { AuthDetails } from "../../components";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="login__container">
        <h1 onClick={() => navigate("/")}>AIGallery</h1>
        <h2>Log In</h2>
      </div>
      <section className="section__login">
        <form onSubmit={handleSubmit}>
          <h1>LOGIN</h1>
          <p>Please enter your credentials to log in.</p>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="password"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">LOGIN</button>
          <small>
            Not registered?{" "}
            <span onClick={() => navigate("/signUp")}>Create Account</span>
          </small>
        </form>
      </section>
      <AuthDetails />
    </>
  );
};

export default LogIn;
