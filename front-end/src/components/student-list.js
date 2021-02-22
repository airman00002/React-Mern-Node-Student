import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import StudentTableRow from "./StudentTableRow";

export default class StudentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/students")
      .then((res) => {
        this.setState({ students: res.data.result });
      })
      .catch((err) => console.log(err.message));
  }

  DataTable() {
    return this.state.students.map((val, index) => {
      return <StudentTableRow student={val} key={index} />;
    });
  }

  render() {
    return (
      <div className="table-wrapper">
        <h1 className="mt-4 mb-3" >Student List</h1>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Groll No</th>
              <th>Active</th>
            </tr>
          </thead>
          <tbody>{this.DataTable()}</tbody>
        </Table>
      </div>
    );
  }
}
