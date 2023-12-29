import React, { useEffect, useState } from "react";
import { userService } from "../../src/Services/UserService";
import { Col, Container, Row, Table } from "react-bootstrap";
function UserList() {
  const [state, setState] = useState({
    users: null,
  });

  useEffect(() => {
    userService
      .getAllUsers()
      .then((response) => {
        setState({
          ...state,
          users: response.data,
        });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col>
            <h3>User List</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iste,
              quo voluptates eos officiis, ipsum nemo possimus exercitationem
              debitis cumque perferendis sed sit qui quisquam sint fugit maxime
              mollitia laboriosam.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table striped bordered hover className="shadow-lg text-center">
              <thead>
                <tr>
                  <th>SNo</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Website</th>
                  <th>Company</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                {state.users?.length > 0 &&
                  state.users.map((user) => {
                    return (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.website}</td>
                        <td>{user.company.name}</td>
                        <td>{user.address.city}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default UserList;
