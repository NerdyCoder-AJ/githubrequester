import React, { useContext, useState } from "react";
import axios from "axios";

import { Row, Container, Col, Input, Button } from "reactstrap";

import Repos from "../Components/Repos";
import { UserContext } from "../Context/UserContext";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import Usercard from "../Components/UserCard";

const Home = () => {
  const context = useContext(UserContext);
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);

  const fetchDetails = async () => {
    try {
      const { data } = await axios.get(`https://api.github.com/users/${query}`);
      setUser(data);
    } catch (error) {
      toast("User not find out", {
        type: "error",
      });
    }
  };
  return (
    <Container>
      <Row className=" mt-3">
        <Col md="5">
          <div className="d-flex">
            <Input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Please provide the username"
            />
            <Button
              onClick={fetchDetails}
              className=" btn btn-sm mt-2 btn-info "
            >
              FetchUser
            </Button>
          </div>
          {user ? <Usercard user={user} /> : null}
        </Col>
        <Col md="7">{user ? <Repos repos_url={user.repos_url} /> : null}</Col>
      </Row>
    </Container>
  );
};
export default Home;
