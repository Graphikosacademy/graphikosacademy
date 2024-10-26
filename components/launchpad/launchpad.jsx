import Image from "next/image";
import rocket from "../../assets/images/rocket.png";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";
import image4 from "../../assets/images/image4.png";
import image5 from "../../assets/images/image5.png";
import "./launchpad.css";
import Card from "@/utils/card/card";

const Launchpad = () => {
  return (
    <div className="launchpad_container">
      <div className="launchpad_header">
        <div className="launchpad_header-star"></div>
        <div className="launchpad_header-title">
          <div className="launch_header-title-group">
            <h1>Graphi.kos</h1>
            <p id="academy-title">ACADEMY</p>
          </div>
          <p id="titletag">YOUR CREATIVE LAUNCHPAD</p>
        </div>
        <div className="launchpad_header-rocket">
          <Image src={rocket} alt="rocket" />
        </div>
      </div>
      <div className="launchpad-main-content">
        <Card
          image={image1}
          cardtitle="LEARN FROM THE BEST"
          discription="Our instructors are industry veterans who've mastered their craft."
        />
        <Card
          image={image2}
          cardtitle="DO MORE, LEARN MORE"
          discription="Dive into real-world projects and see your skills grow."
        />
        <Card
          image={image3}
          cardtitle="YOUR PERSONAL COACH"
          discription="Get One-On-One Guidance To Reach Your Goals Faster."
        />
        <Card
          image={image4}
          cardtitle="YOUR PERSONAL COACH"
          discription="Get One-On-One Guidance To Reach Your Goals Faster."
        />
        <Card
          image={image5}
          cardtitle="YOUR PERSONAL COACH"
          discription="Get One-On-One Guidance To Reach Your Goals Faster."
        />
      </div>
    </div>
  );
};

export default Launchpad;
