import "./applicationprocess.css"

const ApplicationProcess = () => {
  return (
    <div className="applicationprocess_container">
      <div className="applicationprocess_container-title">
        <h1>APPLICATION PROCESS</h1>
      </div>
      <div className="applicationprocess-main_content">
        <p>Online Course</p>
        <ul>
          <li>
            <strong>Visit the Academy Website</strong>: Browse the course
            information and curriculum.
          </li>
          <li>
            <strong>Fill Out the Online Application Form</strong>: Provide
            personal details, educational background, and any relevant
            experience.
          </li>
          <li>
            <strong> Submit Required Documents</strong>: Upload copies of your
            educational certificates, identification documents, and any required
            portfolio or test results.
          </li>
          <li>
            <strong> Pay the Application Fee</strong>:  Complete the payment
            process using the designated online payment methods.
          </li>
          <li>
            <strong>Await Notification</strong>:  You will receive a
            notification of the admissions decision via email.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ApplicationProcess