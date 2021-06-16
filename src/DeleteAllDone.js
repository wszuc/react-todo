import React from "react";

export default function DeleteAllDone(props) {
  return (
    <div>
      <button onClick={props.deleteDone}>Delete all done</button>
    </div>
  );
}
