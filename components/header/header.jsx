import Image from "next/image";
import ladyimage from "../../assets/images/herocomponent.png";
import fontimage from "../../assets/images/herocomponent1.png";
import headerimage from "../../assets/images/headerimage.png";

import "./header.css";
import Navbar from "../navbar/navbar";

const Header = () => {
  return (
    <div className="header_container">
      <Navbar />
      <div className="header_container-hero">
        <div className="header_container-image1">
          <Image src={ladyimage} />
        </div>
        <div className="header_container-title">
          <div className="header_container-title-group1">
            <h1>WELCOME TO</h1>
          </div>
          <div className="header_container-title-group2">
            <h1>GRAPHI.KOS</h1>
          </div>
          <div className="header_container-title-group3">
            <h3>LEARN TO CREATE</h3>
            <Image src={headerimage} alt="header" />
          </div>
        </div>
        <div className="header_container-image2">
          <Image src={fontimage} />
        </div>
      </div>
      <div className="register_container">
        <button>

          <a href="register">Register Now! </a>
        </button>
      </div>
    </div>
  );
};

export default Header;
