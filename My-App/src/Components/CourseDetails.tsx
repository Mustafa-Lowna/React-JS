import { useParams } from "react-router-dom";

function CourseDetails() {
  const params = useParams();
  return (
    <div>
      <h2>Course Details for Course ID: {params.id}</h2>
    </div>
  );
}
export default CourseDetails;
