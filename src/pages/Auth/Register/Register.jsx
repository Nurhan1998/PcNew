import React, { useContext, useState, useEffect } from "react";
import { Button, Container, FormControl, Image } from "react-bootstrap";
import { authContext } from "../../../contexts/AuthContext/AuthContext";

const Register = () => {
  const { users,addUser, getUsers } = useContext(authContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  useEffect(() => {
    getUsers();
  }, []);
console.log(users)
  const handleClickAddUser = () => {
    if (!email || !password || !confirm) {
      setEmail("");
      setPassword("");
      setConfirm("");
      return alert("заполните все поля");
    } else if (password === confirm) {
      let newUser = {
        email,
        password,
      };

      addUser(newUser);
      setEmail("");
      setPassword("");
      setConfirm("");
    } else {
      setPassword("");
      setConfirm("");
      return alert("неправильно ввели пароль");
    }
  };

  return (
    <div>
       <Image src="https://gmedia.playstation.com/is/image/SIEPDC/ps5-games-page-background-block-desktop-03-en-15jun20?$native$" style={{
                    position: "absolute",
                    width: "100%",
                    left: "50%",
                    top: "50%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "translate(-50%, -50%)",
                    zIndex: "-1"
                }}/>
      <Container
        style={{
          width: "400px",
          marginTop: "120px",
        }}
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
        <FormControl
          className="mt-1"
          value={email}
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormControl
          className="mt-1"
          value={password}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormControl
          className="mt-1"
          value={confirm}
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setConfirm(e.target.value)}
        />
        <Button onClick={handleClickAddUser} size="lg" block className="mt-3">
          Sign Up
        </Button>
      </Container>
    </div>
  );
};

export default Register;
