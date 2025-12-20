import "./EmployeeCard.css";
type EmployeeProps = {
  name: string;
  position: string;
  department: string;
  salary: number;
  children?: any;
};
function EmployeeCard(props: EmployeeProps) {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">{props.name}</h3>
        <h4 className="card-title text-danger">{props.position}</h4>
        <p className="card-text">Department: {props.department}</p>
        <p className="card-text text-secondary">Salary: ${props.salary}</p>
        {props.children}
      </div>
    </div>
  );
}
export default EmployeeCard;
