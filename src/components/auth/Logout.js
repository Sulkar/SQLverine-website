import React, { useContext } from "react";
import axios from "axios";
import { MyContext } from "../MyContext";

export default function Logout() {
  const urlLogout = "https://test.sqlverine.org/php/logout.php";
  const [myValues, setMyValues] = useContext(MyContext);

  // Logout
  async function handleLogout(event) {
    axios.get(urlLogout).then((response) => {
      setMyValues((oldValues) => ({ ...oldValues, loggedin: false }));
    });
  }

  return <button className="button button--outline button--danger margin-bottom--xs" onClick={() => handleLogout()}>Logout</button>;
}
