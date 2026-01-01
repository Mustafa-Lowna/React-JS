import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

function ThemedTable() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="mb-4 border">
      <table
        className={`table table-striped table-hover ${
          theme === "dark" ? "table-dark" : ""
        }`}
      >
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Course Name</th>
            <th scope="col">Price</th>
            <th scope="col">Duration</th>
            <th scope="col">Teacher</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Full Stack MERN</td>
            <td>₹24,999</td>
            <td>6 Months</td>
            <td>Ahmed Khan</td>
            <td>Complete MERN stack mastery</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>UI/UX Design Mastery</td>
            <td>₹14,999</td>
            <td>3 Months</td>
            <td>Sara Ali</td>
            <td>Modern design principles</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>React JS Advanced</td>
            <td>₹9,999</td>
            <td>2 Months</td>
            <td>Imran Syed</td>
            <td>React hooks & state management</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Graphic Design Pro</td>
            <td>₹7,499</td>
            <td>2.5 Months</td>
            <td>Ayesha Khan</td>
            <td>Photoshop & Illustrator expert</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Digital Marketing Basics</td>
            <td>₹5,999</td>
            <td>1.5 Months</td>
            <td>Fatima Noor</td>
            <td>SEO, social media & ads</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Node.js & Express</td>
            <td>₹12,999</td>
            <td>3 Months</td>
            <td>Rahul Sharma</td>
            <td>Backend API development</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>MongoDB Mastery</td>
            <td>₹8,999</td>
            <td>2 Months</td>
            <td>Zain Malik</td>
            <td>NoSQL database expert</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>Advanced CSS & Animations</td>
            <td>₹6,499</td>
            <td>1.5 Months</td>
            <td>Nadia Rehman</td>
            <td>Modern CSS3 techniques</td>
          </tr>
          <tr>
            <th scope="row">9</th>
            <td>WordPress Development</td>
            <td>₹4,999</td>
            <td>1 Month</td>
            <td>Omar Hassan</td>
            <td>Custom theme & plugins</td>
          </tr>
          <tr>
            <th scope="row">10</th>
            <td>Portfolio Building Pro</td>
            <td>₹3,999</td>
            <td>3 Weeks</td>
            <td>Layla Ahmed</td>
            <td>Professional showcase sites</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ThemedTable;
