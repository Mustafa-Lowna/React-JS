import { Link } from "react-router-dom";

type Course = {
  id: number;
  title: string;
  description: string;
  duration?: string;
};

const courses: Course[] = [
  {
    id: 1,
    title: "Introduction to React",
    description:
      "Learn React fundamentals: components, JSX, props, state, and hooks. Build small apps and understand component lifecycle.",
    duration: "6 weeks",
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    description:
      "Deep dive into ES6+, async/await, closures, modules, performance optimizations and common design patterns.",
    duration: "8 weeks",
  },
  {
    id: 3,
    title: "Full-Stack Web Development",
    description:
      "End-to-end development with Node.js, Express, REST APIs, authentication, and MongoDB/SQL integration.",
    duration: "12 weeks",
  },
  {
    id: 4,
    title: "UI/UX Design Essentials",
    description:
      "User-centered design principles, wireframing, prototyping, visual hierarchy, and accessibility basics.",
    duration: "6 weeks",
  },
  {
    id: 5,
    title: "Data Science with Python",
    description:
      "Data analysis, visualization, and introductory machine learning using pandas, NumPy, matplotlib and scikit-learn.",
    duration: "10 weeks",
  },
  {
    id: 6,
    title: "Mobile App Development",
    description:
      "Build cross-platform apps with React Native and Expo, including navigation, state management, and native APIs.",
    duration: "8 weeks",
  },
  {
    id: 7,
    title: "Cloud Computing Fundamentals",
    description:
      "Cloud concepts, AWS core services, deployment, containers, and best practices for scalable applications.",
    duration: "6 weeks",
  },
  {
    id: 8,
    title: "Cybersecurity Basics",
    description:
      "Intro to network security, secure coding, common vulnerabilities (OWASP Top 10), and basic incident response.",
    duration: "6 weeks",
  },
];
function CourseList() {
  return (
    <div>
      <h2>Courses List</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            {" "}
            <Link to={`/courses/${course.id}`}>{course.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
