import React, { useEffect, useState, useRef } from "react";
import "../../../SQLverine/src/css/SqlVerineEditor.css";

export default function CustomEditorLink({ fontSize, border, sqlQuery }) {
  const [customQuery, setCustomQuery] = useState([]);
  const [customQueryNewline, setCustomQueryNewline] = useState([]);
  //alternative
  const styleClassArray = ["codeline", "synSQL", "synColumns", "synTables"];

  const styleClassMap = new Map([
    ["n", "codeline"],
    ["s", "synSQL"],
    ["c", "synColumns"],
    ["t", "synTables"],
    ["o", "synOperators"],
    ["i", "synValues"],
    ["b", "synBrackets"],
    ["typ", "synTyp"],
  ]);

  function createCustomSqlQuery(sqlQuery) {
    const sqlQueryNewlineArray = sqlQuery.split("/n");
    let tempQueryNewline = [];
    sqlQueryNewlineArray.forEach((newline, index) => {
      let tempQuery = [];
      const sqlQueryArray = newline.trim().split(" ");
      //get childs
      sqlQueryArray.forEach((query, index) => {
        const identifierClass = query.match(/\/(\w)/)[1];
        const command = query.replace(/\/(\w)/, "");
        let newQueryObject = {
          text: command,
          class: styleClassMap.get(identifierClass),
        };
        tempQuery.push(newQueryObject);
      });
      //add childs to newline
      let newQueryNewlineObject = {
        text: "",
        class: styleClassMap.get("n"),
        children: tempQuery,
      };
      tempQueryNewline.push(newQueryNewlineObject);
    });

    setCustomQueryNewline(tempQueryNewline);
  }

  useEffect(() => {
    createCustomSqlQuery(sqlQuery);
  }, []);

  return (
    <>
      <div
        className="codeArea"
        style={{ border: border, fontSize: fontSize, minHeight: "0em" }}
      >
        <pre>
          <code>
            {customQueryNewline.map((queryNewline, index) => (
              <span key={index} className={queryNewline.class}>
                {queryNewline.children.map((query, index) => (
                  <span key={index} className={query.class}>
                    {query.text !== "," ? " " : ""}
                    {query.text}
                  </span>
                ))}
              </span>
            ))}
          </code>
        </pre>
      </div>
    </>
  );
}
