import React, { Component } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class EditStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      roll_no: "",
    };
  }

  componentDidMount() {
    console.log("useEffect");
    axios
      .get(
        `http://localhost:4000/students/edit-student/${this.props.match.params.id}`
      )
      .then((res) => {
        this.setState({
          name: res.data.result.name,
          email: res.data.result.email,
          roll_no: res.data.result.roll_no,
        });
      })
      .catch((err) => console.log(err.message));
  }

  onChangeStudentName = (event)=>{
    this.setState({ name: event.target.value });
  }
  onChangeStudentEmail = (event)=>{
    this.setState({ email: event.target.value });
  }
  onChangeStudentRollno = (event)=>{
    this.setState({ roll_no: event.target.value });
  }

  onSubmit = (event)=>{
    event.preventDefault();

    const StudentObject = {
      name: this.state.name,
      email: this.state.email,
      roll_no: this.state.roll_no,
    };
    axios
      .put(
        `http://localhost:4000/students/update-student/${this.props.match.params.id}`,
        StudentObject
      )
      .then((res) => {
        console.log(res.data.result);
        console.log("successfully Updated");
      })
      .catch((err) => console.log(err.message));

    //* Redirect to Student List
    this.props.history.push("/student-list");
  }

  render() {
    return (
      <div classNam="form-wrapper mt-4">
        <h1>Update Student</h1>

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
            className="offset-lg-3 col-lg-6"
            variant="outline-info"
            size="lg"
            block="block"
            type="submit"
          >
            Update Student
          </Button>
        </Form>

      </div>
    );
  }
}
