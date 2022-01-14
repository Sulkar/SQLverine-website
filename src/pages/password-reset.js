import React, { useContext } from "react";
import { Redirect } from "@docusaurus/router";
import Layout from "@theme/Layout";
import PasswordReset from "../components/auth/PasswordReset";
import { MyContext } from "../components/MyContext";

export default function profil() {
  const [myValues, setMyValues] = useContext(MyContext);

  return (
    <Layout>
      <main>
        {myValues.loggedin ? (
          <div className="container">
            <div className="row mt-5">
              <div className="col col--4"></div>
              <div className="col col--4">
                <PasswordReset />
              </div>
              <div className="col col--4"></div>
            </div>
          </div>
        ) : (
          <Redirect to="/" />
        )}
      </main>
    </Layout>
  );
}
