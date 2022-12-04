import React, {useContext, useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import styles from "../css_modules/aboutMe.module.css";
import {characters, defaultHero, friends, period_month} from "../utils/constants";
import {SWContext} from "../utils/context";

const AboutMe = () => {

	const [hero, setHero] = useState();
	let {hero: heroId} = useParams();
	const {changeHero} = useContext(SWContext);
	const navigate = useNavigate();


	useEffect(() => {
		if (friends.indexOf(heroId) < 0) {
			navigate(`/about_me/${defaultHero}`)
		} else {
			const hero = JSON.parse(localStorage.getItem(heroId));
			if (hero && ((Date.now() - hero.time) < period_month)) {
				setHero(hero.payload);
			} else {
				fetch(characters[heroId].url)
					.then(response => response.json())
					.then(data => {
						let info = {
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
						localStorage.setItem(heroId, JSON.stringify(info));
					});
			}
			changeHero(heroId);
		}
	}, [changeHero, heroId,navigate])

	return (
		<div>
			{(hero) &&
				<div className={`farGalaxy ${styles.hero_box}`}>
					<p><span className={styles.hero_titles}>name:</span> {hero.name}</p>
					<p><span className={styles.hero_titles}>height:</span> {hero.height}</p>
					<p><span className={styles.hero_titles}>birth year:</span> {hero.birth_year}</p>
					<p><span className={styles.hero_titles}>gender:</span> {hero.gender}</p>
					<p><span className={styles.hero_titles}>mass:</span> {hero.mass}</p>
					<p><span className={styles.hero_titles}>hair color:</span> {hero.hair_color}</p>
					<p><span className={styles.hero_titles}>skin color:</span> {hero.skin_color}</p>
					<p><span className={styles.hero_titles}>eye color:</span> {hero.eye_color}</p>
				</div>
			}
		</div>
	)

}

export default AboutMe