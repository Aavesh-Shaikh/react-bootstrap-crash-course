import react from "react";
import "./App.css";
import { Navbar, Container } from "react-bootstrap";
import Counter from "./components/Counter";
import Register from "./components/Register";
import UserList from "./components/UserList";
let App = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">Bootstrap Tutorial</Navbar.Brand>
        </Container>
      </Navbar>
      {/* <Counter /> */}
      {/* <Register /> */}
      <UserList />
    </>
  );
};

export default App;
