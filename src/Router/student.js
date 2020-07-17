import React from "react";
class STUDENT extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      studentlist: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:5000/students")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ studentlist: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const { error, studentlist } = this.state;
    if (error) {
      return <div>Error: {error}</div>;
    } else {
      return (
        <div>
          <h1>STUDENTS DETAILS</h1>
          <thead>
            <tr>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  width: "300px",
                }}
              >
                ID
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  width: "300px",
                }}
              >
                STUDENT NAME
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  width: "300px",
                }}
              >
                EMAIL ID
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  width: "300px",
                }}
              >
                STAFF ID
              </th>
            </tr>
          </thead>
          <tbody>
            {studentlist.map((student) => (
              <tr key={student.id}>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    width: "300px",
                  }}
                >
                  <center>{student.id}</center>
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    width: "300px",
                  }}
                >
                  <center>{student.student_name}</center>
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    width: "300px",
                  }}
                >
                  <center>{student.email}</center>
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    width: "300px",
                  }}
                >
                  <center>{student.staff_id}</center>
                </td>
              </tr>
            ))}
          </tbody>
        </div>
      );
    }
  }
}
export default STUDENT;
