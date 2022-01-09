import React, { useState, useContext } from "react";
import axios from "axios";
import DatabaseItem from "./DatabaseItem";
import DatabaseUpload from "./DatabaseUpload";
import { MyContext } from "../MyContext";
import Loader from "../Loader";

export default function ListDatabases() {
  const [myValues, setMyValues] = useContext(MyContext);
  const [databases, setDatabases] = useState([]);
  const [databasesCodes, setDatabasesCodes] = useState({});
  const urlDatabaseList = "https://sqlverine.org/php/list_databases.php";

  async function getDatabases() {
    setMyValues((oldValues) => ({ ...oldValues, loader: true }));
    axios
      .post(urlDatabaseList)
      .then(function (response) {
        setDatabases(response.data);
        setMyValues((oldValues) => ({ ...oldValues, loader: false }));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  React.useEffect(() => {
    getDatabases();
  }, []);

  return (
    <div>
      <div>
        <div className="margin-top--sm">
          
          {myValues.loader ? <Loader /> : <></>}
          <ul className="verineList">
            <li
              className="verineListItem"
              key="header"
              style={{ fontWeight: "bolder" }}
            >
              Datenbank
              <span>Code</span>
            </li>
            {databases.map((database) => (
              <li className="verineListItem" key={database["code"]}>
                <div>
                  <a
                    href={
                      "https://editor.sqlverine.org/" +
                      "?folder=" +
                      database["user_id"] +
                      "&db=" +
                      database["db_name"]
                    }
                  >
                    {database["db_name"]}
                  </a>
                  <div style={{fontSize: '0.875em'}}>von {database["username"]}</div>
                </div>

                <span>{database["code"]}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
