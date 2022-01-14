import React, { useContext, useState } from "react";
import { MyContext } from "../MyContext";
import axios from "axios";
import Alert from "../Alert";

export default function PasswordReset() {
  const [myValues, setMyValues] = useContext(MyContext);
  const urlPasswordReset = "https://sqlverine.org/php/reset_password.php";
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [alert, setAlert] = useState("");

  // Password Reset
  async function handlePasswordReset(event) {
    event.preventDefault();
    if (password1 != password2) {
      setAlert(<Alert type="" info="Passwörter stimmen nicht überein!" />);
    } else if (password1.length < 6) {
      setAlert(
        <Alert
          type=""
          info="Das Passwort muss mindestens eine Länge von 6 Zeichen haben!"
        />
      );
    } else {
      axios
        .post(urlPasswordReset, {
          new_password: password1,
        })
        .then(function (response) {
          if (response.data == 1) {
            setPassword1("");
            setPassword2("");
            setAlert(
              <Alert
                type="success"
                info="Passwort wurde erfolgreich geändert."
              />
            );
          } else {
            setAlert(<Alert type="" info={response} />);
          }
        })
        .catch(function (error) {
          setAlert(<Alert type="" info={error.toString()} />);
        });
    }
  }

  return (
    <>
      <div className="row margin-top--sm">
        <div className="col text--center">
          <h2>Passwort ändern:</h2>
        </div>
      </div>
      <form className="verineLogin" onSubmit={handlePasswordReset}>
        <div className="container">
          <label htmlFor="fname">
            <b>neues Passwort</b>
          </label>
          <input
            type="password"
            placeholder=""
            name="fpass1"
            required
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
          />

          <label htmlFor="fpass">
            <b>neues Passwort bestätigen</b>
          </label>
          <input
            type="password"
            placeholder=""
            name="fpass2"
            required
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />

          <div className="text--center">
            <button
              className="button button--outline button--primary margin-vert--xs"
              onClick={handlePasswordReset}
            >
              Passwort ändern
            </button>
          </div>
        </div>
      </form>
      <div className="margin-top--xs">{alert}</div>
    </>
  );
}
