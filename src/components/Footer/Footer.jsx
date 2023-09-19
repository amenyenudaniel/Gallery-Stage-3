import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { footerLinks } from "../../utils/data";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer__links">
        {footerLinks.map((item) => (
          <div key={item.id}>
            {item.links.map((link) => (
              <p className="linkName">{link.linkName}</p>
            ))}
          </div>
        ))}
      </div>

      <div className="social__icons">
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
        <FaYoutube />
      </div>
      <p className="copyright">&copy; 2023 AIGallery. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
