import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./CourseEdit.css";

const API_URL = "https://69303ff8778bbf9e00708d87.mockapi.io/api/Courses";

const CourseEdit = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<number | "">("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_URL}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setDescription(data.description);
        setPrice(data.price || "");
      });
  }, [id]);

  const handleSubmit = () => {
    setError(null);

    if (title.length == 0) {
      setError("Course title cannot be left blank");
      return;
    }
    if (description.length == 0) {
      setError("Course description cannot be left blank");
      return;
    }
    if (price === "" || price === 0) {
      setError("Course price cannot be left blank");
      return;
    }
  };

  const updateCourse = async () => {
    handleSubmit();

    if (error) return;

    const priceNum = typeof price === "string" ? parseFloat(price) : price;

    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        price: priceNum,
      }),
    });
    setSuccess("Course has been updated successfully.");
    setTimeout(() => navigate("/courses"), 1000);
  };

  let errorMessage = null;
  if (error) {
    errorMessage = <div className="alert alert-danger">{error}</div>;
  }

  let successMessage = null;
  if (success) {
    successMessage = <div className="alert alert-success">{success}</div>;
  }

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="course-card p-4 shadow-sm bg-white">
        <h3 className="text-primary mb-4 text-center fw-bold">Edit Course</h3>

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
            onChange={(e) =>
              setPrice(e.target.value === "" ? "" : Number(e.target.value))
            }
          />
        </div>

        {errorMessage}
        {successMessage}

        <button
          className="btn btn-primary w-100 pro-btn"
          onClick={updateCourse}
        >
          Update Course
        </button>

        <div className="mt-3 text-center">
          <Link to="/courselist" className="btn btn-link text-decoration-none">
            Back to Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseEdit;
