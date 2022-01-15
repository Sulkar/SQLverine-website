import React, {useState} from "react";

const MyContext = React.createContext({});

function MyContextProvider(props) {
  const [myValues, setMyValues] = useState({
    counter: 0,
    username: "",
    database_folder: "",
    max_file_size: 5000000,
    db_count: 0,
    codes: [],
    loggedin: false,
    loader: false,
  });

  return (
    <MyContext.Provider value={[myValues, setMyValues]}>
      {props.children}
    </MyContext.Provider>
  );
}

export { MyContext, MyContextProvider };

