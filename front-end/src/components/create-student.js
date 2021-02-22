import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class CreateStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      roll_no: "",
    };
  }

  //*method inputed
  onChangeStudentName = (event) => {
    this.setState({ name: event.target.value });
  };
  onChangeStudentEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  onChangeStudentRollno = (event) => {
    this.setState({ roll_no: event.target.value });
  };
  //*method submit
  onSubmit = (event) => {
    event.preventDefault();

    const StudentObject = {
      name: this.state.name,
      email: this.state.email,
      roll_no: this.state.roll_no,
    };
    axios
      .post("http://localhost:4000/students/create-student", StudentObject)
      .then((res) => {
        console.log(res.data);
      });

    this.setState({
      name: "",
      email: "",
      roll_no: "",
    });
  };

  render() {
    return (
      <div classNam="form-wrapper mt-4">
        <h1>Create Student</h1>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={this.state.name}
              onChange={this.onChangeStudentName}
            />
          </Form.Group>

          <Form.Group controlId="Email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={this.state.email}
              onChange={this.onChangeStudentEmail}
            />
          </Form.Group>

          <Form.Group controlId="Roll">
            <Form.Label>Roll No.</Form.Label>
            <Form.Control
              type="text"
              value={this.state.roll_no}
              onChange={this.onChangeStudentRollno}
            />
          </Form.Group>

          <Button
            variant="outline-success"
            size="lg"
            block="block"
            type="submit"
          >
            Create Student
          </Button>
        </Form>
      </div>
    );
  }
}
