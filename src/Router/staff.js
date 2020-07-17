import React from "react";
class STAFF extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      stafflist: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:5000/counts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ stafflist: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const { error, stafflist } = this.state;
    console.log(stafflist);
    if (error) {
      return <div>Error: {error}</div>;
    } else {
      return (
        <div>
          <h1>STAFF DETAILS</h1>
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
                STAFF NAME
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
                STUDENTS COUNT
              </th>
            </tr>
          </thead>
          <tbody>
            {stafflist.map((staff) => (
              <tr key={staff.id}>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    width: "300px",
                  }}
                >
                  <center>{staff.id}</center>
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    width: "300px",
                  }}
                >
                  <center>{staff.staff_name}</center>
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    width: "300px",
                  }}
                >
                  <center>{staff.email}</center>
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    width: "300px",
                  }}
                >
                  <center>{staff.student_Count}</center>
                </td>
              </tr>
            ))}
          </tbody>
        </div>
      );
    }
  }
}
export default STAFF;
