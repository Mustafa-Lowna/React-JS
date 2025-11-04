let courses = [
  "Introduction to React Development",
  "Advanced JavaScript Programming",
  "Web Design Fundamentals",
  "Database Management Systems",
  "Mobile App Development",
  "Cloud Computing Essentials",
  "Cybersecurity Basics",
];

function CourseList2() {
  return (
    <div>
      <h1>Course List 2</h1>
      <ul className="list-group">
        {courses.map((course) => (
          <li className="list-group-item">{course}</li>
        ))}
      </ul>
    </div>
  );
}
export default CourseList2;
