import "./Greet.css";
function Greet() {
  let name: string = "Mustafa";
  if (name) {
    return <h2>Hi {name}, Welcome to React from Greet Component!</h2>;
  } else {
    <h2>Hi, Welcome to React from Greet Component!</h2>;
  }
}
export default Greet;
