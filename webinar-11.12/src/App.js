import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeColorAction } from "./action/groupActions";
import { changeNameAction } from "./action/credentialsActions";

const App = () => {
  const dispatch = useDispatch();
  const credentials = useSelector((state) => state.credentials);
  const groups = useSelector((state) => state.groups);

  return (
    <div>
      <input
        style={{ position: "fixed", right: "10%" }}
        onChange={(e) => {
          dispatch(changeColorAction(e.target.value));
        }}
        value={groups.color}
        type="color"
      />
      <h1 style={{ color: groups.color }}>{groups.group}</h1>
      <h2>{credentials.firstName}</h2>
      <h2>{credentials.lastName}</h2>
      <button
        onClick={() => {
          const peter = { firstName: "Peter", lastName: "Jackson" };
          const john = { firstName: "John", lastName: "Smith" };
          dispatch(
            changeNameAction(credentials.firstName === "Peter" ? john : peter)
          );
        }}
      >
        Change name
      </button>
      {/* New name */}
    </div>
  );
};

export default App;
