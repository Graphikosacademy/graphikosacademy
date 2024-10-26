import CourseCard from "@/utils/coursecard/coursecard";
import courseimage1 from "../../assets/images/courseimage1.png";
import courseimage2 from "../../assets/images/courseimage2.png";
import courseimage3 from "../../assets/images/courseimage3.png";
import heart from "../../assets/images/heart.png";
import "./coursedetails.css";
import Image from "next/image";

const CourseDetails = () => {
  return (
    <div className="coursedetails_container">
      <div className="cousedetails_header">
        <h1>COURSE DETAILS</h1>
      </div>
      <div className="coursecard_list">
        <CourseCard
          cardbackground="#fad85d"
          title="DIGITAL INTERIOR DESIGN"
          image={courseimage1}
          overview="This foundational course is designed to introduce you to the world of digital interior design. You'll learn essential software skills, design principles, and industry best practices."
          duration="08 Weeks"
          certification="Upon successful completion, you'll receive a certificate from Graphikos Academy."
        />
        <CourseCard
          cardbackground="#fad85d"
          title="ADVANCED COURSE IN DIGITAL INTERIOR DESIGN "
          image={courseimage2}
          overview="This advanced course builds upon the foundational knowledge acquired in the certificate course. You'll delve deeper into complex interior design projects and explore cutting-edge techniques."
          duration="08 Weeks"
          certification="Upon successful completion, you'll receive a certificate from Graphikos Academy."
        />
        <CourseCard
          cardbackground="#fad85d"
          title="DIPLOMA IN DIGITAL INTERIOR DESIGN "
          image={courseimage3}
          overview="This comprehensive diploma program provides in-depth training in digital interior design, equipping you with the skills and knowledge needed to excel in the field."
          duration="08 Weeks"
          certification="Upon successful completion, you'll receive a certificate from Graphikos Academy."
        />
      </div>
      <div className="coursedetails_discription">
        <div className="coursedetails_discription-title">
          <h1>
            <span>
              <Image src={heart} height="20px" width="20px" />
            </span>
            <span>Graphikos Academy</span>
             offers a flexible learning experience that accommodates your
            individual needs and schedule. Choose between live and recorded
            sessions to optimize your learning journey.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
