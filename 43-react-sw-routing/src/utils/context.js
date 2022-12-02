import {createContext, useEffect, useState} from "react";
import {base_url, period_month} from "./constants";

export const SWContext = createContext(null)

const PlaceHolderProvider = ({children}) => {
	const [hero, setHero] = useState({});


	useEffect(() => {
		const hero = JSON.parse(localStorage.getItem('hero'));
		if (!hero || ((Date.now() - hero.time) > period_month) || hero.id !== 1) {
			fetch(`${base_url}/v1/peoples/1`)
				.then(response => response.json())
				.then(data => {
					let info = {
						"id": data.id,
						"name": data.name,
						"height": data.height,
						"mass": data.mass,
						"hair_color": data.hair_color,
						"skin_color": data.skin_color,
						"eye_color": data.eye_color,
						"birth_year": data.birth_year,
						"gender": data.gender
					};
					setHero(info);
					info = {
						payload: info,
						time: Date.now()
					}
					localStorage.setItem('hero', JSON.stringify(info));
				})
		} else {
			setHero(hero.payload);
		}

	}, [])

	const changeHomeImage = (url) => {
		if (url) {
			setHero(prevState => ({image: url, name: prevState.name}))
		} else {
			setHero(prevState => ({image: '../Images/main.jpg', name: prevState.name}))
		}
	}
	const values = {
		hero,
		setHero,
		changeHomeImage
	}
	return (
		<SWContext.Provider value={values}>
			{children}
		</SWContext.Provider>
	)
}
export default PlaceHolderProvider;


