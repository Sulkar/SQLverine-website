import React, { useContext } from "react";
import axios from "axios";
import { MyContext } from "../MyContext";

export default function Session() {
  const [myValues, setMyValues] = useContext(MyContext);
  const urlSession = "https://test.sqlverine.org/php/session.php";

  React.useEffect(() => {
    axios.get(urlSession).then((response) => {
      if (response.data.loggedin == 1) {
        setMyValues((oldValues) => ({
          ...oldValues,
          loggedin: true,
          username: response.data.username,
          db_count: response.data.db_count,
          codes: response.data.codes.split(","),
          database_folder: response.data.id,
        }));
      }
    });
  }, []);

  return <></>;
}
