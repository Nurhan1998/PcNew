import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { authContext } from "../../../contexts/AuthContext/AuthContext";
import {Button,Container,Form,form,Image} from "react-bootstrap"


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
    <div  style={{
      
      position: "absolute",
      width: "100%",
      left: "50%",
      top: "50%",
      height: "100%",
      objectFit: "cover",
      transform: "translate(-50%, -50%)",
      zIndex: "-1"
  }}>
  
    
    <Container style={{
      width:"400px",
      marginTop:"120px",

  }} >
   
 <form style={{backgroundColor:"white"}} >
 <div style={{backgroundColor:"black"}}>
      {/* <Image src="http://assets.stickpng.com/images/5848242ecef1014c0b5e49c8.png" fluid /> */}
      <h3 style={{color:"white"}} >SONY</h3>
      {/* <Image src="https://logo-logos.com/wp-content/uploads/2016/10/Sony_logo_black.png" fluid/> */}
      <Image src="https://my.account.sony.com/central/signin/3af9e8524048c1e82c2c86d9e2c20ebb3c2032b5/assets/images/logo_playstation.png" fluid/>
    </div>
      {/* <Image src="https://gmedia.playstation.com/is/image/SIEPDC/ps5-games-background-block-desktop-01-en-11jun20?$native$" fluid/> */}
      <p>Sign in to PlayStation using one of your Sony accounts.</p>
      <Form.Control 
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Form.Control 
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin} variant="outline-primary" 
        size="lg" block>GO!</Button>
      <Button onClick={() => history.push("/register")}
        size="lg" block
      >Create new account</Button>
    </form>
    </Container>
    </div>
  );
};

export default Login;
