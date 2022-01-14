import React, { useContext } from "react";
import {Redirect} from '@docusaurus/router';
import Layout from "@theme/Layout";
import Logout from "../components/auth/Logout";
import { MyContext } from "../components/MyContext";

export default function profil() {
  const [myValues, setMyValues] = useContext(MyContext);

  return (
    <Layout>
      <main>
        {myValues.loggedin ? (
          <div className="container">
            <div className="row margin-top--sm">
              <div className="col text--center">
                <h2>Abmelden</h2>
                <Logout />
              </div>
            </div>
          </div>
        ) : (
          <Redirect to="/" />
        )}
      </main>
    </Layout>
  );
}
