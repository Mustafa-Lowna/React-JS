import { useState } from "react";

type Employee = {
  id: number | string;
  employee_name: string;
  employee_salary: number | string;
  employee_age: number | string;
};
function EmployeeList() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  const fetchEmployees = async () => {
    let response = await fetch(
      "https://dummy.restapiexample.com/api/v1/employees"
    );
    let data = await response.json();
    setEmployees(data.data);
  };
  return (
    <div className="container mb-4 m-5">
      Employee List
      <button className="btn btn-success mx-3" onClick={fetchEmployees}>
        Fetch Employees
      </button>
      <ul className="list-group mt-3">
        {employees.map((emp) => (
          <li key={emp.id} className="list-group-item">
            <h5 className="text-danger mb-1">{emp.employee_name}</h5>
            <p className="mb-0">Age: {emp.employee_age}</p>
            <p className="mb-0">Salary: ₹{emp.employee_salary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default EmployeeList;
