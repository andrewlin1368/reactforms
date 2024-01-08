import { useState } from "react";
import "./App.css";
import SignUpForm from "./components/SignUpForm";
import Authenticate from "./components/Authenticate";

function App() {
  return (
    <>
      <SignUpForm></SignUpForm>
      <Authenticate></Authenticate>
    </>
  );
}

export default App;
