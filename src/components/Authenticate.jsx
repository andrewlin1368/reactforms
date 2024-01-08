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
      if (response.data.message === "jwt malformed")
        setMessage("Not signed in");
      else setMessage(response.data.message);
      console.log(response.data.message);
    } catch (error) {
      setMessage(error.message);
      console.log("error", error.message);
    }
  };

  if (token && message === "Not signed in") authToken();

  return (
    <div className="form-group">
      <button type="submit" className="btn btn-primary" onClick={authToken}>
        Authenticate Token
      </button>
      <h4>{message}</h4>
      {/* <button onClick={authToken}>Authenticate Token</button> */}
    </div>
  );
}
