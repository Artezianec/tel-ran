import React, {useContext, useEffect} from 'react'
import DreamTeam from './DreamTeam'
import FarGalaxy from './FarGalaxy'
import Hero from './Hero'
import {useParams,useNavigate} from "react-router-dom";
import {SWContext} from "../utils/context";
import {defaultHero, friends} from "../utils/constants";

const Home = () => {
	const {hero: heroId} = useParams();
	const {changeHero} = useContext(SWContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (friends.indexOf(heroId) < 0) {
			navigate(`/home/${defaultHero}`)
		} else {
			changeHero(heroId);
		}
	}, [changeHero, heroId])

	return (
		<main className="clearfix">
			<Hero/>
			<DreamTeam/>
			<FarGalaxy/>
		</main>
	)
}

export default Home