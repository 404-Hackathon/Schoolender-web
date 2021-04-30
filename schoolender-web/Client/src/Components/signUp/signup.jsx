import React from "react";
import * as userService from "../../services/userService";
import * as authService from "../../services/authServices";
import "./signup.css";
class signup extends React.Component {
  state = {
    account: {
      username: "",
      email: "",
      password: "",
    },
    para: false,
  };
  submit = async () => {
    this.setState({ para: true });
    const { username, email, password } = this.state.account;
    const user = {
      username: username,
      email: email,
      password: password,
    };

    try {
      const resUser = await userService.register(user);

      const { data: jwt } = await authService.login(
        this.state.account.email,
        this.state.account.password
      );

      console.log(jwt);
      localStorage.setItem("jwt", jwt);
      window.location.reload();
      return;
    } catch (err) {
      console.log(err.response);
    }
    this.setState({ para: false });
  };

  handleChange = async ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    await this.setState({ account });
  };
  render() {
    return (
      <div className="Signup">
        <div className="container">
          <input
            type="text"
            placeholder="username"
            name="username"
            id="username"
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="email"
            name="email"
            id="email"
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="password"
            name="password"
            id="password"
            onChange={this.handleChange}
          />
          <div className="login-btn" onClick={this.submit}>
            Signup
          </div>
        </div>
      </div>
    );
  }
}

export default signup;
