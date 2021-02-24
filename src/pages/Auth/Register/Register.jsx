import React, { useContext, useState } from "react";
import { Button, Container, FormControl,Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { authContext } from "../../../contexts/AuthContext/AuthContext";

const Register = () => {
  const history = useHistory();
  const { addUser } = useContext(authContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

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
      history.push("/login");
    } else {
      setPassword("");
      setConfirm("");
      return alert("неправильно ввели пароль");
    }
  };

  return (
    <div>
      <Container style={{
        width:"400px",
        marginTop:"120px"
  }}>
    <div style={{backgroundColor:"black"}}>
      <h3 style={{color:"gray"}} className="text-center">SONY</h3>
      <Image src="https://my.account.sony.com/central/signin/3af9e8524048c1e82c2c86d9e2c20ebb3c2032b5/assets/images/logo_playstation.png" fluid/>
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
      <Button onClick={handleClickAddUser} size="lg" block className="mt-3">Sign Up</Button>
      </Container>
      
    </div>
  );
};

export default Register;
