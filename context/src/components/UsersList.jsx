import React, { useContext } from "react";
import { PlaceholderContext } from "../context/PlaceholderProvider";
import User from "./User";

const UsersList = () => {
  const { users } = useContext(PlaceholderContext);
  return (
    <div>
      {users.map((item, key) => {
        return <User user={item} key={key} />;
      })}
    </div>
  );
};

export default UsersList;
