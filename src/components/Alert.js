import React from "react";

export default function Alert(props) {
  return (
    <div className="alert alert--danger margin-bottom--xs" role="alert">
      {props.alert}
    </div>
  );
}
