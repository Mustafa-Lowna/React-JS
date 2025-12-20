import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

function ThemedTable() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="mb-4 border">
      <table
        className={`table table-striped table-hover ${
          theme === "dark" ? "table-dark" : ""
        }`}
      >
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Ayesha</td>
            <td>Khan</td>
            <td>@ayesha</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Rahul</td>
            <td>Sharma</td>
            <td>@rahul_dev</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Fatima</td>
            <td>Noor</td>
            <td>@fatima_marketing</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Imran</td>
            <td>Syed</td>
            <td>@imran_dev</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Sara</td>
            <td>Ali</td>
            <td>@sara_design</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ThemedTable;
