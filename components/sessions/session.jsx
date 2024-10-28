import Image from "next/image";
import sessionimage1 from "../../assets/images/sessionimage1.png";
import sessionimage2 from "../../assets/images/sessionimage2.png";
import admissionimage from "../../assets/images/admissionimage.png";
import "./session.css";

const Sessions = () => {
  return (
    <>
      <div className="session-container">
        <div className="session-container-list">
          <div className="session-container-list_item">
            <div className="session-container-list_item-media">
              <Image src={sessionimage1} alt="session1" />
              <Image src={sessionimage2} alt="session1" />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundColor: "#1E1E1E" }}
        className="admisssion-main_container"
      >
        <div className="admission-container">
          <div className="admission-container_header">
            <Image src={admissionimage} alt="admission" />
            <h1>ADMISSIONS</h1>
            <h3>ELIGIBILITY CRITERIA</h3>
          </div>
          <div className="admission-container_discription-list">
            <div className="admission-container_discription-list-item">
              <p>Educational Background</p>
              <div className="admission-container_discription-list-item-dics">
                <ul>
                  <li>
                    A high school diploma or equivalent is typically required.
                  </li>
                  <li>
                    Previous experience in interior design or related fields
                    (e.g., architecture, art) can be beneficial but not
                    mandatory.
                  </li>
                </ul>
              </div>
            </div>
            <div className="admission-container_discription-list-item">
              <p>Computer Skills</p>
              <div className="admission-container_discription-list-item-dics">
                <ul>
                  <li>
                    Basic computer proficiency, including familiarity with
                    operating systems and software applications, is essential.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sessions;
