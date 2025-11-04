type Course = {
  id: number;
  name: string;
  duration: string;
  price: number;
};

const courses: Course[] = [
  {
    id: 1,
    name: "Full Stack Web Development",
    duration: "12 weeks",
    price: 999,
  },
  {
    id: 2,
    name: "Data Science Fundamentals",
    duration: "8 weeks",
    price: 799,
  },
  {
    id: 3,
    name: "Mobile App Development with React Native",
    duration: "10 weeks",
    price: 899,
  },
  {
    id: 4,
    name: "Cloud Computing & AWS",
    duration: "6 weeks",
    price: 699,
  },
  {
    id: 5,
    name: "UI/UX Design Master Course",
    duration: "8 weeks",
    price: 749,
  },
  {
    id: 6,
    name: "Python Programming for AI",
    duration: "10 weeks",
    price: 849,
  },
  {
    id: 7,
    name: "Cybersecurity Essentials",
    duration: "8 weeks",
    price: 799,
  },
];

function CourseList3() {
  return (
    <div>
      <h1>Course List 3</h1>
      <ul className="list-group">
        {courses.map((course) => (
          <li className="list-group-item">
            <h3>ID No: {course.id}</h3>
            <h3>{course.name}</h3>
            <p>Duration: {course.duration}</p>
            <p>Price: {course.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CourseList3;
