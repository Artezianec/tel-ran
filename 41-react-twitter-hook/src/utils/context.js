import React, {createContext, useState} from "react";
import style from '../modules/style.modules.css';
import {defaultFollowers, defaultFollowing, defaultNameUser, defaultUrlAvatar} from "./const";

export const TwitterContext = createContext(null);

const PlaceholderProvider = ({children}) => {

	const [user, setUser] = useState({
		avatar: defaultUrlAvatar,
		name: defaultNameUser
	});
	const [stats, setStats] = useState({
		followers: defaultFollowers,
		following: defaultFollowing
	});


	const changeAvatar = url => {
		if (url) {
			setUser(prevState => ({avatar: url, name: prevState.name}))
		} else {
			setUser(prevState => ({avatar: defaultUrlAvatar, name: prevState.name}))
		}
	}


	const values = {
		user,
		stats,
		changeAvatar,
		style
	}
	return (
		<TwitterContext.Provider value={values}>
			{children}
		</TwitterContext.Provider>
	)
}

export default PlaceholderProvider;