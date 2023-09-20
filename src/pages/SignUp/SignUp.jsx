import "./SignUp.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { AuthDetails } from "../../components";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          console.log(userCredentials);
        })
        .finally(() => {
          setLoading(false);
          setPassword("");
          setEmail("");
        });
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <div className="login__container">
        <h1 onClick={() => navigate("/")}>AIGallery</h1>
        <h2>Sign Up</h2>
      </div>
      <section className="section__login">
        <form onSubmit={handleSubmit}>
          <h1>Create Account</h1>
          <input
            type="email"
            placeholder="Enter Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign Up</button>
          <small>
            Already have an account{" "}
            <span onClick={() => navigate("/logIn")}>Log In</span>
          </small>
        </form>
      </section>
      <AuthDetails />
    </>
  );
};

export default SignUp;
