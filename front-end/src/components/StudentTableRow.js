import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class StudentTableRow extends Component {

  //*binding
  DeleteStudent = ()=>{
    axios.delete(`http://localhost:4000/students/delete-student/${this.props.student._id}`)
    .then((res) =>{
    console.log('Successfully deleted')
    })
    .catch((err) =>console.log(err.message))
  }

  render() {
    return (
      <tr>
        <td>{this.props.student.name}</td>
        <td>{this.props.student.email}</td>
        <td>{this.props.student.roll_no}</td>
        <td>
          <Link
            className="edit-link btn btn-warning mx-2"
            to={`/edit-student/${this.props.student._id}`}
          >Edit</Link>
          <Button variant='danger' onClick={this.DeleteStudent} >Delete</Button>
        </td>
      </tr>
    );
  }
}
