import React, { useContext } from "react";
import axios from "axios";
import { MyContext } from "../MyContext";

export default function Logout() {
  const urlLogout = "https://test.sqlverine.org/php/logout.php";
  const [myValues, setMyValues] = useContext(MyContext);

  // Login
  async function handleLogout(event) {
    axios.get(urlLogout).then((response) => {
      setMyValues((oldValues) => ({ ...oldValues, loggedin: false }));
    });
  }

  return <button className="button button--danger mt-3 mb-1" onClick={() => handleLogout()}>Logout</button>;
}
