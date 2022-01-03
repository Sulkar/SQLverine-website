import React, { useContext } from "react";
import Layout from "@theme/Layout";
import { MyContext } from "../components/MyContext";
import Login from "../components/auth/Login";
import Logout from "../components/auth/Logout";
import HandleDatabases from "../components/auth/HandleDatabases";

export default function profil() {
  const [myValues, setMyValues] = useContext(MyContext);
  return (
    <Layout>
      <main>
        {myValues.loggedin ? (
          <div className="container">
            <div className="row margin-top--sm">
              <div className="col">
                <h2>Hallo {myValues.username}</h2>
                <ul>
                  <li>Maximale Anzahl von Datenbanken: {myValues.db_count}</li>
                  <li>Mögliche Codes: {myValues.codes.toString()}</li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <HandleDatabases />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col text--center">
                <Logout />
              </div>
            </div>
          </div>
        ) : (
          <div className="container">
            <div className="row mt-5">
              <div className="col col--4"></div>
              <div className="col col--4">
                <div>{myValues.loggedin ? <></> : <Login />}</div>
              </div>
              <div className="col col--4"></div>
            </div>
          </div>
        )}
      </main>
    </Layout>
  );
}
