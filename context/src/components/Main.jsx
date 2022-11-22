import React, { useContext, useState } from "react";
import { PlaceholderContext } from "../context/PlaceholderProvider";
import UsersList from "./UsersList";
import UserModal from "./UserModal";

const Main = () => {
  const { getUsers } = useContext(PlaceholderContext);
  const [userModal, setUserModal] = useState(false);

  const handleCloseModal = () => {
    setUserModal(false);
  };

  return (
    <div>
      <button onClick={getUsers}>Get users</button>
      <button
        onClick={() => {
          setUserModal(!userModal);
        }}
      >
        Add user
      </button>
      <UsersList />
      {userModal && <UserModal close={handleCloseModal} />}
    </div>
  );
};

export default Main;
