import React, {useContext} from 'react';
import styles from "../css_modules/aboutMe.module.css";
import {SWContext} from "../utils/context";

const AboutMe = () => {

	const {hero} = useContext(SWContext)
	
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