import React, { useState } from "react";
import axios from "axios";

export default function SignUpForm() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [message, setMessage] = useState(null);

  const updateForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const sendForm = async (e) => {
    e.preventDefault();
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
    } catch (error) {
      setMessage(error);
    }
  };

  return (
    (!message && (
      <div>
        <form onSubmit={sendForm}>
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" onChange={updateForm} />
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" onChange={updateForm} />
          <button>Submit</button>
        </form>
      </div>
    )) || (
      <div>
        <h2>{message}</h2>
        <h4>{form.username}</h4>
      </div>
    )
  );
}
