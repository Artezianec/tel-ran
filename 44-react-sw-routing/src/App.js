import React, {useState} from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import {SWContext} from "./utils/context";
import {defaultHero} from "./utils/constants";

const App = () => {

	const [hero, setHero] = useState(defaultHero);

	return (
		<div className="container-fluid">
			<SWContext.Provider value={{
				hero,
				changeHero: setHero
			}}>
				<Header/>
				<Main/>
				<Footer/>
			</SWContext.Provider>
		</div>
	);

}

export default App;
