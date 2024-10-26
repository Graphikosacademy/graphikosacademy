import Image from "next/image";
import aboutimage1 from "../../assets/images/aboutusimage.png";
import abouttext from "../../assets/images/aboutustext.png";
import arrow from "../../assets/images/arrow.png";
import "./aboutus.css";

const Aboutus = () => {
  return (
    <div className="aboutus_container">
      <div className="aboutus_container-title">
        <Image src={aboutimage1} alt="aboutimage1" />

        <h1>ABOUT US</h1>
        <Image src={arrow} alt="abouttext" />
      </div>
      <div className="aboutus_container-footer">
        <p>
          At Graphi.kos Academ, we're passionate about helping you turn your
          design dreams into reality. Whether you're a seasoned professional or
          just starting your creative journey, our courses are designed to equip
          you with the skills and knowledge you need to succeed.
        </p>
      </div>
    </div>
  );
};

export default Aboutus;
