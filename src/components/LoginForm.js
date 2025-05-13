import React from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import { FaGoogle, FaApple } from "react-icons/fa";

function LoginForm() {
  return (
    <Card style={{ width: "100%", maxWidth: "400px", padding: "20px", backgroundColor: "#004595", border: "none" }}>
      <h5 className="mb-4 text-white">Sign in to Skill Kwiz</h5>
      <Form>
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group controlId="formPassword" className="mb-3">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <div className="d-flex justify-content-between align-items-center mb-3 text-white">
          <Form.Check type="checkbox" label="Remember me" />
          <a href="#" className="text-white text-decoration-none">Forget Password?</a>
        </div>

        <Button variant="danger" type="submit" className="w-100 mb-3">
          Sign In
        </Button>

        <div className="text-center text-white mb-2">— Or Login with —</div>
        <Row className="mb-3 text-center">
          <Col>
            <Button variant="light" className="rounded-circle">
              <FaGoogle />
            </Button>
          </Col>
          <Col>
            <Button variant="dark" className="rounded-circle">
              <FaApple />
            </Button>
          </Col>
        </Row>

        {/* Sign Up Button */}
        <Button variant="outline-light" className="w-100">
          Sign Up
        </Button>
      </Form>
    </Card>
  );
}

export default LoginForm;
