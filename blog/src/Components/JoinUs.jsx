import React from "react";
import { Form, Row, Col, Button, SplitButton, Dropdown } from "react-bootstrap";
import "../Css/JoinUs.css";

function JoinUs(props) {
  return (
    <Row xs={2} style={{ margin: "0px" }}>
      <Col xs={8}>
        <Form className="JoinUs-form">
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Phone number</Form.Label>
            <Form.Control type="number" placeholder="Enter phone number" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Organisation</Form.Label>
            <Form.Control type="text" placeholder="Enter organisation" />
          </Form.Group>
          <SplitButton
            key="primary"
            id={`dropdown-split-variants-primary`}
            variant={"primary".toLowerCase()}
            title="Department"
          >
            <Dropdown.Item eventKey="1">Content Writer</Dropdown.Item>
            <Dropdown.Item eventKey="2">Editor</Dropdown.Item>
            <Dropdown.Item eventKey="3">Graphic Designer</Dropdown.Item>
            <Dropdown.Item eventKey="4">Social Media</Dropdown.Item>
          </SplitButton>

          <Button
            variant="primary"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default JoinUs;
