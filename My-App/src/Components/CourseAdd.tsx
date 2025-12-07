import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CourseAdd.css";

const API_URL = "https://69303ff8778bbf9e00708d87.mockapi.io/api/Courses";

const CourseAdd = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = () => {
    console.log("Handle Submit called");
    setError(null);

    if (title.length == 0) {
      setError("Course title cannot be left blank");
      return;
    }
    if (description.length == 0) {
      setError("Course description cannot be left blank");
      return;
    }
    if (price === undefined || price === null) {
      setError("Course price cannot be left blank");
      return;
    }

    setSuccess("Course has been added successfully.");
  };

  let errorMessage = null;

  if (error) {
    errorMessage = <div className="alert alert-danger">{error}</div>;
  }

  let successMessage = null;
  if (success) {
    successMessage = <div className="alert alert-success">{success}</div>;
  }
  const navigate = useNavigate();
  const addCourse = async () => {
    const course = {
      title,
      description,
      price,
    };
    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course),
    });
    navigate("/courseadd");
  };
  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="course-card p-4 shadow-sm bg-white">
        <h3 className="text-primary mb-4 text-center fw-bold">
          Add New Course
        </h3>

        <div className="mb-4">
          <label className="form-label fw-semibold">Course Title</label>
          <input
            type="text"
            className="form-control pro-input"
            placeholder="Example. React, Java, Python"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="form-label fw-semibold">Course Description</label>
          <textarea
            className="form-control pro-input"
            rows={3}
            placeholder="Brief Course Overview..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="form-label fw-semibold">Course Price (₹)</label>
          <input
            type="number"
            className="form-control pro-input no-spinner"
            placeholder="Price In INR"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>
        {errorMessage}
        {successMessage}
        <button
          className="btn btn-primary w-100 pro-btn"
          onClick={() => {
            handleSubmit();
            addCourse();
          }}
        >
          Add Course
        </button>
      </div>
    </div>
  );
};
export default CourseAdd;
