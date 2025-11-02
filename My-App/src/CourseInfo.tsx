import "./CourseInfo.css";
type Course = {
  title: string;
  instructor: string;
  duration: string;
  description: string;
};
function CourseInfo() {
  let course: Course = {
    title: "Introduction to TypeScript",
    instructor: "Jane Doe",
    duration: "4 weeks",
    description:
      "Learn the basics of TypeScript, a powerful language that builds on JavaScript.",
  };
  return (
    <div className="card">
      <h3>{course.title}</h3>
      <p>Instructor: {course.instructor}</p>
      <p>Duration: {course.duration}</p>
      <p>Description: {course.description}</p>
    </div>
  );
}
export default CourseInfo;
