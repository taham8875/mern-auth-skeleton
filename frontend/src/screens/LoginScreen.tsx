import { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import FormContainer from "../components/FormContainer";
import { toast } from "react-toastify";

import CustomSpinner from "../components/CustomSpinner";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }, result] = useLoginMutation();

  console.log(`result`, result);

  const { userInformation } = useSelector((state: any) => state.auth);

  console.log(`userInformation`, userInformation);

  useEffect(() => {
    if (userInformation) {
      navigate("/");
    }
  }, [navigate, userInformation]);

  const submitHandler = async (e: any) => {
    e.preventDefault();
    try {
      const result = await login({ email, password }).unwrap();
      console.log(result);
      dispatch(setCredentials(result));
      navigate("/");
    } catch (error) {
      toast.error(error?.data?.message || error?.error, {
        position: "bottom-center",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="my-5">
      <FormContainer>
        <h1>Sign In</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="my-2" controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="my-2" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button
            type="submit"
            variant="primary"
            className="mt-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
            }}
            disabled={isLoading}
          >
            {isLoading && <CustomSpinner />} Sign In
          </Button>
        </Form>

        <Row className="py-3">
          <Col>
            Don't have an account? <Link to="/register">Create an account</Link>
          </Col>
        </Row>
      </FormContainer>
    </div>
  );
}

export default LoginScreen;
