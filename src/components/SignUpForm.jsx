import React, { useState } from "react";
import axios from "axios";

export default function SignUpForm({ token, setToken }) {
  const [form, setForm] = useState({ username: "", password: "" });
  const [message, setMessage] = useState(null);
  const [validate, setValidate] = useState(null);

  const updateForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendForm = async (e) => {
    e.preventDefault();
    if (form.username.length < 8) {
      setValidate("Username needs to be at least 8 characters");
      return;
    }
    if (form.password.length < 8) {
      setValidate("Password needs to be at least 8 characters");
      return;
    }
    try {
      const response = await axios.post(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        form,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      setMessage(response.data.message);
      setToken(response.data.token);
    } catch (error) {
      setMessage(error);
    }
  };

  return (
    (!message && (
      <div>
        <form onSubmit={sendForm}>
          <h4>Sign Up</h4>
          <div className="form-group">
            <input
              type="text"
              name="username"
              className="form-control"
              id="exampleInputUsername1"
              placeholder="Enter username"
              onChange={updateForm}
            />
          </div>
          <br />
          <div className="form-group">
            <input
              type="password"
              name="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={updateForm}
            />
          </div>
          <p>{validate}</p>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>

        {/* <form onSubmit={sendForm}>
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" onChange={updateForm} />
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" onChange={updateForm} />
          <button>Submit</button>
        </form> */}
      </div>
    )) || (
      <div>
        <h2>{message}</h2>
        <h4>@{form.username}</h4>
      </div>
    )
  );
}
