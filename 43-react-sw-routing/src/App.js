import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import PlaceHolderProvider from "./utils/context";


const App = () => {
	return (
		<div className="container-fluid">
			<PlaceHolderProvider>
			<Header/>
			<Main/>
			<Footer/>
			</PlaceHolderProvider>
		</div>
	);

}

export default App;
