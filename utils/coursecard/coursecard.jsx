import Image from "next/image";
import "./coursecard.css";

const CourseCard = ({
  cardbackground,
  image,
  title,
  overview,
  duration,
  certification,
}) => {
  return (
    <div
      className="coursecard-container"
      style={{ backgroundColor: `${cardbackground}` }}
    >
      <div className="coursecard-container-header">
        <div className="coursecard-container-header-media">
          <Image src={image} alt={title} />
        </div>

        <div className="coursecard-container-header-title">
          <h2 style={{ fontSize: `${title.length > 23 ? "18px" : "22px"}`, marginTop: `${title.length > 23 ? "2.15rem" : "2rem"}`}}>{title}</h2>
        </div>
      </div>
      <div className="coursecard-container-main-content">
        <div className="coursecard-container-main-content-list">
          <h3>Overview:</h3>
          <p>{overview}</p>
        </div>
        <div className="coursecard-container-main-content-list">
          <h3>Duration:</h3>
          <p>{duration}</p>
        </div>
        <div className="coursecard-container-main-content-list">
          <h3>Certification:</h3>
          <p>{certification}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
