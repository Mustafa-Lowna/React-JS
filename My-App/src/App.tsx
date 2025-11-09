import "./App.css";
import ProfileCard from "./Components/ProfileCard";
function App() {
  return (
    <div id="app">
      <ProfileCard
        name="Ahmed"
        age={22}
        skills={["Graphic Designer", "Web Developer", "IOS Developer"]}
      ></ProfileCard>
    </div>
  );
}
export default App;
