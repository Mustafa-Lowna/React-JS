import { useState } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
  };
  company: {
    name: string;
  };
};

function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  };

  return (
    <div className="container mb-4 m-5">
      User List
      <button className="btn btn-danger mx-3" onClick={fetchUsers}>
        Fetch Users
      </button>
      <ul className="list-group mt-4">
        {users.map((user) => (
          <li key={user.id} className="list-group-item mb-2">
            <h4 className="text-warning mb-4">{user.name}</h4>
            <p className="text-secondary">{user.email}</p>s
            <p className="text-secondary">
              {user.address.street}, {user.address.suite}
            </p>
            <p className="text-secondary">{user.company.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
