import React, { useContext, useState } from "react";
import { authContext } from "../../../contexts/AuthContext/AuthContext";
const Register = () => {
  const { addUser } = useContext(authContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleClickAddUser = () => {
    if (!email || !password || !confirm) {
      setEmail("");
      setPassword("");
      setConfirm("");
      return alert("введите все поля");
    } else if (password === confirm) {
      let newUser = {
        email,
        password,
      };
      console.log(newUser);
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
      <input
        value={email}
        type="text"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        value={password}
        type="text"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        value={confirm}
        type="text"
        placeholder="Confirm Password"
        onChange={(e) => setConfirm(e.target.value)}
      />
      <button onClick={handleClickAddUser}>enter</button>
    </div>
  );
};

export default Register;
