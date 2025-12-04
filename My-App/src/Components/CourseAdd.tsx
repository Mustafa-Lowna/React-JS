import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "https://69303ff8778bbf9e00708d87.mockapi.io/api/Courses";

const CourseAdd = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>("");

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
    <div className="container">
      <h2 className="text-primary my-4">Add Course</h2>

      <div id="addCourseForm" className="border rounded shadow p-4 bg-white">
        <div className="mb-4">
          <label htmlFor="titleTextBox" className="form-label fw-semibold">
            Course Title
          </label>
          <input
            type="text"
            id="titleTextBox"
            className="form-control"
            placeholder="e.g. React, Java, Python"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="descriptionTextBox"
            className="form-label fw-semibold"
          >
            Course Description
          </label>
          <textarea
            id="descriptionTextBox"
            className="form-control"
            rows="3"
            placeholder="Write a short description... (topics, details)"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="priceTextBox" className="form-label fw-semibold">
            Course Price (₹)
          </label>
          <input
            type="number"
            id="priceTextBox"
            className="form-control"
            placeholder="Enter course price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>

        <div className="mt-4">
          <button className="btn btn-primary w-100" onClick={addCourse}>
            Add Course
          </button>
        </div>
      </div>
    </div>
  );
};
export default CourseAdd;
