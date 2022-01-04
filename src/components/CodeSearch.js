import React, { useState } from "react";
import axios from "axios";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function CodeSearch() {
  const [code, setCode] = useState("");
  const urlCode = "https://test.sqlverine.org/php/code.php";
  const dbListingPage = useBaseUrl("/databases");

  function handleCodeSubmit(event) {
    event.preventDefault();
    axios
      .post(urlCode, {
        code: code,
      })
      .then(function (response) {
        setCode("");
        if (response.data.db_name != 0) {
          window.location.href =
            "https://editor.sqlverine.org/" +
            "?folder=" +
            response.data.user_id +
            "&db=" +
            response.data.db_name;
        } else {
          window.location.href = dbListingPage;
        }
      })
      .catch(function (error) {
        console.log(error.toString());
      });
  }

  return (
    <form onSubmit={handleCodeSubmit}>
      <div className="navbar__search verineCodeSearchWrapper">
        <input
          className="verineCodeSearch"
          placeholder="Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <span className="verineCodeSearchBtn" onClick={handleCodeSubmit}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 20 20"
            style={{verticalAlign: 'middle'}}
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </span>
      </div>
    </form>
  );
}
