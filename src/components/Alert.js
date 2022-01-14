import React from "react";

export default function Alert(props) {
  return (
    <>
      {props.type == "success" ? (
        <div className="alert alert--success margin-bottom--xs" role="alert">
          {props.info}
        </div>
      ) : (
        <div className="alert alert--danger margin-bottom--xs" role="alert">
          {props.info}
        </div>
      )}
    </>
  );
}
