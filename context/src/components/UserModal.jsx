import React, { useContext, useState } from "react";
import { PlaceholderContext } from "../context/PlaceholderProvider";
import style from "../modules/style.module.css";

const UserModal = ({ close }) => {
  const { addUser } = useContext(PlaceholderContext);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");

  return (
    <div className={style.modalWrapper}>
      <div className={style.modalContent}>
        <span onClick={close} className={style.closeIcon}>
          X
        </span>
        <label>
          Username:
          <input
            value={username}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            placeholder="username"
          />
        </label>
        <label>
          Email:
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="email"
          />
        </label>
        <label>
          Phone:
          <input
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            placeholder="phone"
          />
        </label>
        <label>
          Website:
          <input
            value={website}
            onChange={(e) => {
              setWebsite(e.target.value);
            }}
            placeholder="website"
          />
        </label>
        <button
          onClick={() => {
            addUser({
              username,
              email,
              phone,
              website,
            });
            close();
          }}
        >
          Add user
        </button>
      </div>
    </div>
  );
};

export default UserModal;
