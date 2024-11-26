import "./footer.css";
import headerimage from "../../assets/images/headerimage.png";
import { AiFillInstagram } from "react-icons/ai";
import Image from "next/image";



const Footer = () => {

const HandleSubmit = () => {
  // If you want to open an external link directly
  window.location.href =
    "https://www.instagram.com/graphi.kos_academy/profilecard/?igsh=MTZvanBlem10OXJncw==";
  };
  return (
    <div className="footer_container">
      <div className="footer_container-group">
        <div className="footer_container-title">
          <h1>GRAPHI.KOS</h1>
          <Image src={headerimage} alt="acedemy" />
        </div>
        <div className="footer_container-title-icons">
          <AiFillInstagram
            size={30}
            onClick={HandleSubmit}
          />
        </div>
      </div>
      <div className="footer_container-group-1">
        <div className="footer_container-group-1-title">
          <h4>Company</h4>
          <a href="/#Aboutus">Aboutus</a>
          <a href="/#course">Course</a>
          <a href="/#">Contact</a>
        </div>
        <div className="footer_container-group-1-policy">
          <p>Terms</p>
          <p>Privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
