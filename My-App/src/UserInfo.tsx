import "./UserInfo.css";

type UserInfo = {
  name: string;
  phonenumber: number | string;
  email: string;
  address: string;
};
function UserInfo() {
  let info: UserInfo = {
    name: "John Smith",
    phonenumber: 1234567890,
    email: "john.smith@example.com",
    address: "123 Main St, Anytown, USA",
  };
  return (
    <div className="uInfo card">
      <h3> Name: {info.name}</h3>
      <h4> Phone No: {info.phonenumber}</h4>
      <h4>Email: {info.email}</h4>
      <h4>Address: {info.address}</h4>
    </div>
  );
}
export default UserInfo;
