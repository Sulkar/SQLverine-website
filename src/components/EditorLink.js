import React, { useEffect, useState, useRef } from "react";
import { AstToSqlVerine } from "../../../SQLverine-parser/src/AstToSqlVerine";
import { parse } from "../../../SQLverine-parser/src/sqlverine.pegjs";
import "../../../SQLverine/src/css/SqlVerineEditor.css";

export default function EditorLink({ link, sqlQuery, runBtn }) {
  const [sqlVerineLink, setSqlVerineLink] = useState("");
  const [maxElementNr, setMaxElementNr] = useState(0);
  const myContainer = useRef(null);


  function parseSqlTextQuery(sqlTextQuery) {
    try {
      const outputAST = parse(sqlTextQuery);
      const astToSql = new AstToSqlVerine(outputAST);
      astToSql.parseAst();
      setMaxElementNr(astToSql.getElementCount());
      return astToSql.getOutput(); // = innerHTML
    } catch (error) {
      console.log(error);
    }
  }

  function createSQLverineLink(sqlQuery, link) {
    const encodedQuery = encodeURI(sqlQuery);
    const sqlverineLink =
      link + "&maxElementNr=" + maxElementNr + "&code=" + encodedQuery;
    return sqlverineLink;
  }

  useEffect(() => {
    myContainer.current.innerHTML = parseSqlTextQuery(sqlQuery);
    setSqlVerineLink(createSQLverineLink(sqlQuery, link));
  }, [maxElementNr]);

  return (
    <>
      <div className="codeArea">
        <pre>
          <code ref={myContainer}></code>
        </pre>
      </div>
      {runBtn === "show" ? (
        <a href={sqlVerineLink} target="_blank" style={{ float: "right" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.8em"
            height="1.8em"
            fill="forestgreen"
            className="bi bi-play-btn"
            viewBox="0 0 16 16"
          >
            <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"></path>{" "}
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"></path>
          </svg>
        </a>
      ) : (
        ""
      )}
    </>
  );
}
