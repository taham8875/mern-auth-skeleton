import { Container, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Hero() {
  return (
    <div className="mx-2">
      <Container className="mx-auto mx-2 d-flex flex-column align-items-center justify-content-center py-5 bg-light m-4 border border-secondary rounded">
        <h1 className="text-center mb-4">MERN Authentication</h1>
        <p className="text-center mb-4">
          {" "}
          This is a boilerplate project for authentication with the MERN stack.{" "}
        </p>
        <div className="d-flex gap-3">
          <LinkContainer to="/login">
            <Button variant="primary">Sign In</Button>
          </LinkContainer>
          <LinkContainer to="/register">
            <Button variant="secondary">Register</Button>
          </LinkContainer>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
