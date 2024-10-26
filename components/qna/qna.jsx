import "./qna.css";

const QuestionandAnswer = () => {
  return (
    <div className="qna_container">
      <div className="qna_container-header">
        <h4>FAQ: Common questions and answers</h4>
        <p>General Questions</p>
      </div>
      <div className="qna_container-main-content">
        <div className="qna_container-main-content-qna-item">
          <h5>Q: What is Graphikos Academy?</h5>
          <p>
            A: Graphikos Academy is a leading institution dedicated to providing
            high-quality design education. We offer a diverse range of courses,
            from graphic design and interior design to UI/UX and web
            development.
          </p>
        </div>
        <div className="qna_container-main-content-qna-item">
          <h5>Q: Who are the instructors at Graphikos Academy?</h5>
          <p>
            A: Our instructors are experienced industry professionals with a
            passion for teaching. They bring their real-world expertise to the
            classroom, ensuring that students receive practical and up-to-date
            training.
          </p>
        </div>
        <div className="qna_container-main-content-qna-item">
          <h5>Q: What is the duration of the courses?</h5>
          <p>
            A: The duration of our courses varies depending on the program. Some
            courses are short-term, while others are longer-term programs that
            lead to certifications or degrees.
          </p>
        </div>
        <div className="qna_container-main-content-qna-item">
          <h5>Q: Are there any prerequisites for enrolling in the courses?</h5>
          <p>
            A: The specific prerequisites may vary depending on the course.
            However, a basic understanding of design principles and computer
            skills is generally recommended.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuestionandAnswer;
