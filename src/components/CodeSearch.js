import React, { useState } from "react";
import axios from "axios";
import Alert from "./Alert";

export default function CodeSearch() {
  const [code, setCode] = useState("");
  const [alert, setAlert] = useState("");
  const urlCode = "https://test.sqlverine.org/php/code.php";

  function handleCodeSubmit(event) {
    event.preventDefault();
    axios
      .post(urlCode, {
        code: code,
      })
      .then(function (response) {
        if (response.data != 0) {
          setCode("");
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
    <form onSubmit={handleCodeSubmit}>
      <div className="navbar__search">
        <input
          className="navbar__search-input verineCodeSearch"
          placeholder="DB Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </div>
    </form>
  );
}
