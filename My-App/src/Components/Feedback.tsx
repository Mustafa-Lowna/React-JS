import "./Feedback.css";

function Feedback() {
  return (
    <div className="feedback-container">
      <div className="feedback-card">
        <h2>Student Feedback</h2>
        <p className="lead">
          Real reviews from learners who completed our courses.
        </p>

        <div className="feedback-list">
          <div className="feedback-item">
            <h4 className="text-info">Mohammed Yusuf</h4>
            <p className="muted">Full-stack student</p>
            <p>Great platform for learning new skills!</p>
          </div>

          <div className="feedback-item mt-3">
            <h4 className="text-info">Aisha Khan</h4>
            <p className="muted">UI/UX learner</p>
            <p>The courses are well-structured and easy to follow.</p>
          </div>

          <div className="feedback-item mt-3">
            <h4 className="text-info">David Lee</h4>
            <p className="muted">Data science student</p>
            <p>Instructors are knowledgeable and supportive.</p>
          </div>
        </div>

        <div className="form-actions">
          <button className="btn btn-secondary">Cancel</button>
          <button className="btn btn-primary">Leave Feedback</button>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
