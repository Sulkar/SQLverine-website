import React, { useState } from "react";
import axios from "axios";
import Alert from "./Alert";

export default function CodeSearch() {
  const [code, setCode] = useState("");
  const [alert, setAlert] = useState("");
  const urlCode = "https://test.sqlverine.org/php/code.php";

  function handleCodeSubmit(event) {
    axios
      .post(urlCode, {
        code: code,
      })
      .then(function (response) {
        if (response.data != 0) {
          window.location.href = response.data;
        } else {
          setAlert(
            <Alert alert="Der eingegebene Code wurde nicht gefunden!" />
          );
        }
      })
      .catch(function (error) {
        setAlert(<Alert alert={error.toString()} />);
      });
  }

  return (
    <div className="inputWithButton">
      <input type="text" onChange={(e) => setCode(e.target.value)} />
      <span onClick={handleCodeSubmit}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </span>
      <div className="margin-top--xs">{alert}</div>
    </div>
  );
}
