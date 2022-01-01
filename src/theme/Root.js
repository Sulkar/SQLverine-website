import React, { useContext, useState } from "react";
import { MyContextProvider } from "../components/MyContext";
import Session from "../components/auth/Session";

// Default implementation, that you can customize
function Root({ children }) {
  return (
    <MyContextProvider>      
      <Session />
      <>{children}</>
    </MyContextProvider>
  );
}
export default Root;
