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
          cardbackground="#67897D"
          image={image1}
          cardtitle="LEARN FROM THE BEST"
          discription="Our instructors are industry veterans who've mastered their craft."
        />
        <Card
          cardbackground="#FAD85D"
          image={image2}
          cardtitle="DO MORE, LEARN MORE"
          discription="Dive into real-world projects and see your skills grow."
        />
        <Card
          cardbackground="#67897D"
          image={image3}
          cardtitle="YOUR PERSONAL COACH"
          discription="Get one-on-one guidance to reach your goals faster."
        />
        <Card
          cardbackground="#FAD85D"
          image={image4}
          cardtitle="LEARN WHEN YOU WANT TO "
          discription="Choose online or in-person classes to fit your life."
        />
        <Card
          cardbackground="#67897D"
          image={image5}
          cardtitle="MEET YOUR TRIBE"
          discription="Connect with other creatives and build your network."
        />
      </div>
    </div>
  );
};

export default Launchpad;
