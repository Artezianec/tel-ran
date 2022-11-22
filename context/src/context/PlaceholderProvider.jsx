import React, { createContext, useState } from "react";

export const PlaceholderContext = createContext(null);

const PlaceholderProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const handleGetUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        const res = data.map((item) => {
          return {
            username: item.username,
            email: item.email,
            phone: item.phone,
            website: item.website,
          };
        });
        setUsers(res);
      });
  };

  const hadnleAddUser = (newUser) => {
    setUsers((prevState) => {
      prevState.push(newUser);
      return prevState;
    });
  };

  const values = {
    users,
    getUsers: handleGetUsers,
    addUser: hadnleAddUser
  };

  return (
    <PlaceholderContext.Provider value={values}>
      {children}
    </PlaceholderContext.Provider>
  );
};

export default PlaceholderProvider;
