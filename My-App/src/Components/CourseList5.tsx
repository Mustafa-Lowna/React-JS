import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
}
const API_URL = "https://69303ff8778bbf9e00708d87.mockapi.io/api/Courses";

const CourseList5 = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  const fetchCourses = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setCourses(data);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div id="container">
      <h1 className="text-danger">Course List</h1>
      <Link to={`/courseadd`} className="btn btn-success my-3">
        <i className="bi-plus-circle me-2"></i> Add Course
      </Link>
      <table className="table table-hover">
        <thead>
          <tr className="table-dark">
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr>
              <th scope="row">{course.id}</th>
              <td>{course.title}</td>
              <td>{course.description}</td>
              <td>{course.price}</td>
              <td>
                <Link
                  to={`/edit-course/${course.id}`}
                  className="btn btn-primary me-3"
                >
                  <i className="bi-pencil-square me-2"></i>Edit
                </Link>
                <button className="btn btn-danger">
                  {" "}
                  <i className="bi-trash me-2"></i> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseList5;
