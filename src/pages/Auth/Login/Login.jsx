import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { authContext } from "../../../contexts/AuthContext/AuthContext";

const Login = () => {
  const { users, getUsers } = useContext(authContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    getUsers();
  }, [users]);

  const handleLogin = () => {
    console.log("askat");
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
      history.push("/home");
    } else {
      alert("такого пользователя не существует, просьба зарегистрироваться");
    }
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
      <button onClick={() => history.push("/register")}>signUp</button>
    </div>
  );
};

export default Login;
