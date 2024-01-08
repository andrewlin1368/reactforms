import React, { useState } from "react";
import axios from "axios";

export default function Authenticate({ token, setToken }) {
  const [message, setMessage] = useState(null);
  console.log("auth", token);
  const authToken = async () => {
    try {
      const response = await axios.get(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage(response.data.message);
      console.log(response.data.message);
    } catch (error) {
      setMessage(error.message);
      console.log("error", error.message);
    }
  };

  return (
    (!message && (
      <div>
        Authenticate
        <button onClick={authToken}>Authenticate Token</button>
      </div>
    )) || <div>Message: {message}</div>
  );
}
