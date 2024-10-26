import Image from 'next/image'
import sessionimage1 from "../../assets/images/sessionimage1.png";
import sessionimage2 from "../../assets/images/sessionimage2.png";
import admissionimage from "../../assets/images/admissionimage.png";
import './session.css'


const Sessions = () => {
  return (
    <>
      <div className="session-container">
        <div className="session-container-list">
          <div className="session-container-list_item">
            <div className="session-container-list_item-media">
              <Image src={sessionimage1} alt="session1" />
            </div>
            <div className="session-container-list_item-title">
              <p>
                ·<strong>Real-time Interaction</strong>  : Engage directly with
                instructors and classmates in interactive live sessions.
              </p>
              <p>
                ·<strong>Personalized Guidance</strong>  :  Receive immediate
                feedback and support from our experienced faculty.
              </p>
              <p>
                ·<strong> Collaborative Learning</strong>  :  Benefit from
                discussions, group projects, and peer-to-peer learning.
              </p>
              <p>
                ·<strong> Scheduled Times</strong>  :  Attend live sessions at
                designated times, ensuring consistent interaction and a
                structured learning environment.
              </p>
            </div>
          </div>
          <div className="session-container-list_item">
            <div className="session-container-list_item-media">
              <Image src={sessionimage2} alt="session1" />
            </div>
            <div className="session-container-list_item-title">
              <p>
                ·<strong> Flexibility and Convenience</strong>  : Access
                recorded lectures and materials at your own pace and time
              </p>
              <p>
                ·<strong>Self-Directed Learning</strong>  :  Review concepts and
                topics as needed, allowing for deeper understanding.
              </p>
              <p>
                ·<strong> On-Demand Access </strong>  :  Watch recordings
                whenever you have free time, making learning more convenient.
              </p>
              <p>
                ·<strong>Supplement Live Sessions</strong>  : Use recorded
                sessions to reinforce learning from live classes or catch up on
                missed content.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{backgroundColor: "#1E1E1E"}}>

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
                  (e.g., architecture, art) can be beneficial but not mandatory.
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
}

export default Sessions