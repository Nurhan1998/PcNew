import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { authContext } from "../../../contexts/AuthContext/AuthContext";

const Login = () => {
  const { users, getUsers } = useContext(authContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const history = useHistory();
  const handleLogin = () => {
    getUsers();
    let logs = {
      email,
      password,
    };
    users.forEach((element) => {
      if (element.email === logs.email && element.password === logs.password) {
        setIsValid(true);
      } else {
        alert("пройдите регистрацию");
      }
    });
    history.replace(isValid ? "/home" : "/login");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>enter</button>
      <button>signUp</button>
    </div>
  );
};

export default Login;
