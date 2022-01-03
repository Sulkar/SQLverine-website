import React, { useContext, useState } from "react";
import { MyContext } from "../MyContext";
import axios from "axios";
import Alert from "../Alert";

export default function Login() {
  const [myValues, setMyValues] = useContext(MyContext);
  const urlLogin = "https://test.sqlverine.org/php/login.php";
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");

  // Login
  async function handleLogin(event) {
    event.preventDefault();
    axios
      .post(urlLogin, {
        name: name,
        password: password,
      })
      .then(function (response) {
        if (response.data.loggedin == 1) {
          setMyValues((oldValues) => ({
            ...oldValues,
            loggedin: true,
            username: response.data.username,
            db_count: response.data.db_count,
            codes: response.data.codes.split(","),
            database_folder: response.data.id,
          }));
        } else {
          setAlert(
            <Alert alert="Benutzername oder Password sind nicht korrekt!" />
          );
        }
      })
      .catch(function (error) {
        console.log(error);
        setAlert(<Alert alert={error.toString()} />);
      });
  }

  return (
    <>
      <div className="row margin-top--sm">
        <div className="col text--center">
          <h2>Anmelden</h2>
        </div>
      </div>
      <form className="verineLogin" onSubmit={handleLogin}>
        <div className="container">
          <label htmlFor="fname">
            <b>Benutzername</b>
          </label>
          <input
            type="text"
            placeholder=""
            name="fname"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="fpass">
            <b>Passwort</b>
          </label>
          <input
            type="password"
            placeholder=""
            name="fpass"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="text--center">
            <button
              className="button button--outline button--primary margin-vert--xs"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
