import "./Instructors.css";

type Instructor = {
  id: number;
  name: string;
  title: string;
  specialty: string;
  image: string;
};

const instructors: Instructor[] = [
  {
    id: 1,
    name: "Mohammed Aeraf Abuhusaina",
    title: "Web Development Instructor",
    specialty: "React, JavaScript, Full-Stack",
    image:
      "https://scontent.fixe1-3.fna.fbcdn.net/v/t1.6435-9/96083538_2850115981738981_26907270029770752_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=IL1Rh8f6XnYQ7kNvwHdyT5K&_nc_oc=AdnjZcitwfVCL8g7iyOMR9RzFo0ZucJoZXTLP5K6qageybJn5tpnXY9BGnVJPvkpk5vtf10e9xDDcuXVe6DYwdHK&_nc_zt=23&_nc_ht=scontent.fixe1-3.fna&_nc_gid=7387tEe0ueQ0QJfFKq_eaA&oh=00_AfgvzeBo3ZJI3UGJPnqcfphTu_DhhIhiSgTOAwi7k_JIww&oe=694281FC",
  },
  {
    id: 2,
    name: "Qasim Khayal",
    title: "Islamic Instructor",
    specialty: "Quran, Hadith, Fiqha",
    image: "https://avatars.githubusercontent.com/u/219870825?v=4",
  },
  {
    id: 3,
    name: "Abdullah Jabali",
    title: "Accounting Instructor",
    specialty: "Financial Accounting, Auditing",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQHiSE7e5tn7Gw/profile-displayphoto-shrink_800_800/B4DZXM2p2yHwAc-/0/1742898635051?e=1764806400&v=beta&t=1A9UgUX53aNisyaZB5uDE2D6FgQIusrL5CDlD1JDaus",
  },
];

function Instructors() {
  return (
    <div className="instructors-container">
      <h1 className="instructors-title">Our Instructors</h1>
      <p className="instructors-subtitle">
        Learn from experienced professionals in their fields
      </p>

      <div className="instructors-grid">
        {instructors.map((instructor) => (
          <div key={instructor.id} className="instructor-card">
            <img
              src={instructor.image}
              alt={instructor.name}
              className="instructor-image"
            />
            <div className="instructor-content">
              <h3 className="instructor-name">{instructor.name}</h3>
              <p className="instructor-title">{instructor.title}</p>
              <p className="instructor-specialty">{instructor.specialty}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Instructors;
