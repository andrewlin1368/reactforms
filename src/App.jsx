import { useState } from "react";
import "./App.css";
import SignUpForm from "./components/SignUpForm";
import Authenticate from "./components/Authenticate";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [token, setToken] = useState(null);
  console.log(token);
  return (
    <>
      <SignUpForm token={token} setToken={setToken}></SignUpForm>
      <br />
      <Authenticate token={token} setToken={setToken}></Authenticate>
    </>
  );
}

export default App;
