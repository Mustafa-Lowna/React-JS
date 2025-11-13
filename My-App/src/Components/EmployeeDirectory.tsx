import EmployeeCard from "./EmployeeCard";

function EmployeeDirectory() {
  let employees = [
    {
      name: "Mohammed",
      position: "HR Manager",
      department: "HR",
      salary: 6000,
    },
    {
      name: "Aisha Khan",
      position: "Software Engineer",
      department: "Engineering",
      salary: 8500,
    },
    {
      name: "Liam Smith",
      position: "Product Manager",
      department: "Product",
      salary: 9000,
    },
    {
      name: "Olivia Brown",
      position: "UX Designer",
      department: "Design",
      salary: 7500,
    },
    {
      name: "Noah Johnson",
      position: "DevOps Engineer",
      department: "Engineering",
      salary: 8000,
    },
    {
      name: "Emma Davis",
      position: "QA Analyst",
      department: "Quality Assurance",
      salary: 5800,
    },
    {
      name: "Ethan Wilson",
      position: "Data Scientist",
      department: "Data",
      salary: 9500,
    },
    {
      name: "Sophia Martinez",
      position: "Marketing Specialist",
      department: "Marketing",
      salary: 6200,
    },
    {
      name: "Lucas Garcia",
      position: "Frontend Engineer",
      department: "Engineering",
      salary: 7800,
    },
    {
      name: "Maya Patel",
      position: "Backend Engineer",
      department: "Engineering",
      salary: 8200,
    },
    {
      name: "Benjamin Lee",
      position: "Mobile Developer",
      department: "Engineering",
      salary: 7600,
    },
    {
      name: "Isabella Rossi",
      position: "HR Recruiter",
      department: "HR",
      salary: 5400,
    },
    {
      name: "Alexander Müller",
      position: "CTO",
      department: "Executive",
      salary: 15000,
    },
    {
      name: "Fatima Al-Sayed",
      position: "Data Engineer",
      department: "Data",
      salary: 9200,
    },
    {
      name: "Daniel Kim",
      position: "Security Engineer",
      department: "Security",
      salary: 8900,
    },
    {
      name: "Grace Wilson",
      position: "Technical Writer",
      department: "Documentation",
      salary: 5000,
    },
    {
      name: "Samuel Thompson",
      position: "Customer Support Lead",
      department: "Support",
      salary: 6100,
    },
    {
      name: "Chloe Nguyen",
      position: "Business Analyst",
      department: "Business",
      salary: 7000,
    },
  ];
  return (
    <div className="container my-5">
      <h2 className="text-success text-center mb-5">Employee Directory</h2>
      <div className="row">
        {employees.map((emp) => (
          <div className="col-md-4 mb-4">
            <EmployeeCard
              name={emp.name}
              position={emp.position}
              department={emp.department}
              salary={emp.salary}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default EmployeeDirectory;
