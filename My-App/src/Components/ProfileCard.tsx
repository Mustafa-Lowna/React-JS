type ProfileCardProps = {
  name: string;
  age: number;
  skills: string[];
};
function ProfileCard(props: ProfileCardProps) {
  return (
    <div className="container mx-auto">
      <h3 className="text-success">{props.name}</h3>
      <h4 className="text-primary">{props.age}</h4>
      <h5 className="text-danger">Skills</h5>
      <ul>
        {props.skills.map((skill) => (
          <li className="text-secondary">{skill}</li>
        ))}
      </ul>
    </div>
  );
}
export default ProfileCard;
