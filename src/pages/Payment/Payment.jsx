import React from "react";
import { Button, Container, FormControl, Form } from "react-bootstrap";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

export default class PaymentForm extends React.Component {
  state = {
    cvc: "cvc",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
    console.log(e);
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div id="PaymentForm">
        <Container
          style={{
            width: "400px",
            marginTop: "120px",
          }}
        >
          <Cards
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            focused={this.state.focus}
            name={this.state.name}
            number={this.state.number}
          />
          <form>
            <FormControl
              className="mt-2"
              type="tel"
              name="number"
              placeholder="Card Number"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <FormControl
              className="mt-2"
              type="text"
              name="name"
              placeholder="enter your name"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <FormControl
              className="mt-2"
              type="tel"
              name="expiry"
              placeholder="Expiry"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <FormControl
              className="mt-2"
              type="tel"
              name="cvc"
              placeholder="cvc"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <Button variant="primary" className="mt-2 " block>
              Pay
            </Button>
          </form>
        </Container>
      </div>
    );
  }
}
