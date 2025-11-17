import "./Courses.css";

type Course = {
  id: number;
  name: string;
  duration: string;
  price: number;
};

const courses: Course[] = [
  { id: 1, name: "Introduction to React", duration: "6 weeks", price: 199 },
  { id: 2, name: "Advanced JavaScript", duration: "8 weeks", price: 249 },
  {
    id: 3,
    name: "Full-Stack Web Development",
    duration: "12 weeks",
    price: 999,
  },
  { id: 4, name: "UI/UX Design Essentials", duration: "6 weeks", price: 299 },
  { id: 5, name: "Data Science with Python", duration: "10 weeks", price: 899 },
  {
    id: 6,
    name: "Mobile App Development (React Native)",
    duration: "8 weeks",
    price: 449,
  },
  {
    id: 7,
    name: "Cloud Computing Fundamentals (AWS)",
    duration: "6 weeks",
    price: 349,
  },
  { id: 8, name: "Cybersecurity Basics", duration: "6 weeks", price: 299 },
];

function Courses() {
  return (
    <div className="courses-container">
      <div className="courses-header">
        <h1>Our Courses</h1>
        <p>Explore our comprehensive selection of professional courses</p>
      </div>

      <div className="courses-list">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <span className="course-id">Course #{course.id}</span>
            <h3 className="course-name">{course.name}</h3>

            <div className="course-details">
              <div className="course-duration">{course.duration}</div>
              <div className="course-price">{course.price}</div>
            </div>

            <div className="course-actions">
              <button className="btn-enroll">Enroll Now</button>
              <button className="btn-detail">Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
