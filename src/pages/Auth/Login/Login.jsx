import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { authContext } from "../../../contexts/AuthContext/AuthContext";
import { Button, Container, Form, form, Image } from "react-bootstrap";

const Login = () => {
  const { users, getUsers } = useContext(authContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    getUsers();
  }, []);

  const handleLogin = () => {
    let logs = {
      email,
      password,
    };
    const candidate = users.filter((item) => {
      if (item.email === logs.email && item.password === logs.password) {
        return item;
      }
    });
    if (candidate.length) {
      if (candidate[0].email === "admin" && candidate[0].password === "admin") {
        localStorage.setItem("role", "true");
      }
      localStorage.setItem("user", email);

      history.push("/");
    } else {
      alert("такого пользователя не существует, просьба зарегистрироваться");
    }
  };
  return (
    <div>
      <Image
        src="https://gmedia.playstation.com/is/image/SIEPDC/ps5-games-page-background-desktop-block-01-en-15jun20?$native$"
        style={{
          position: "fixed",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      />
      <Container
        style={{
          width: "400px",
          marginTop: "120px",
        }}
      >
        <form
          className="border border-primary"
          style={{ backgroundColor: "white" }}
        >
          <div style={{ backgroundColor: "black" }}>
            <h3 style={{ color: "gray" }} className="text-center">
              SONY
            </h3>
            <Image
              src="https://my.account.sony.com/central/signin/3af9e8524048c1e82c2c86d9e2c20ebb3c2032b5/assets/images/logo_playstation.png"
              fluid
            />
          </div>
          <p>Sign in to PlayStation using one of your Sony accounts.</p>
          <Form.Control
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            className="mt-1"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            onClick={() => handleLogin()}
            variant="outline-primary"
            size="lg"
            block
            className="mt-3"
          >
            GO!
          </Button>
          <Button onClick={() => history.push("/register")} size="lg" block>
            Create new account
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Login;
