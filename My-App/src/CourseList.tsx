import "./CourseList.css";
function CourseList() {
  return (
    <table>
      <tr>
        <th>Course Id</th>
        <th>Course Name</th>
        <th>Course Price</th>
      </tr>
      <tr>
        <td>101</td>
        <td>React</td>
        <td>Free</td>
      </tr>
      <tr>
        <td>102</td>
        <td>Angular</td>
        <td>Free</td>
      </tr>
      <tr>
        <td>103</td>
        <td>Vue</td>
        <td>Free</td>
      </tr>
      <tr>
        <td>104</td>
        <td>Svelte</td>
        <td>Free</td>
      </tr>
      <tr>
        <td>105</td>
        <td>Ember</td>
        <td>Free</td>
      </tr>
    </table>
  );
}
export default CourseList;
