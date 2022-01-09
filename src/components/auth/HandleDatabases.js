import React, { useState, useContext } from "react";
import axios from "axios";
import DatabaseItem from "./DatabaseItem";
import DatabaseUpload from "./DatabaseUpload";
import { MyContext } from "../MyContext";
import Loader from "../Loader";

export default function HandleDatabases() {
  const [myValues, setMyValues] = useContext(MyContext);
  const [databases, setDatabases] = useState([]);
  const [databasesCodes, setDatabasesCodes] = useState({});
  const urlFileUpload = "https://sqlverine.org/php/get_files.php";

  async function getDatabases() {
    setMyValues((oldValues) => ({ ...oldValues, loader: true }));
    if (myValues.loggedin) {
      axios
        .post(urlFileUpload, {
          database_folder: myValues.database_folder,
        })
        .then(function (response) {
          setDatabases(Object.values(response.data.files));
          setDatabasesCodes(response.data.codes);
          setMyValues((oldValues) => ({ ...oldValues, loader: false }));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  React.useEffect(() => {
    getDatabases();
  }, [myValues.loggedin]);

  return (
    <div>
      {myValues.loggedin ? (
        <div>
          <DatabaseUpload getDatabases={getDatabases} />

          <div className="margin-top--sm">
            <h3>Datenbanken</h3>
            {myValues.loader ? <Loader /> : <></>}
            <ul className="verineList">
              {databases.map((database) => (
                <DatabaseItem
                  name={database}
                  code={databasesCodes[database]}
                  getDatabases={getDatabases}
                  key={database}
                />
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div>logged out</div>
      )}
    </div>
  );
}
