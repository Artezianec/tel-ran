import React, {useEffect, useState} from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import {navItems} from './utils/constants';


const App = () => {
	const getNavItem = () => {
		const route = window.location.hash.split('/')[1];
		const item = navItems.find(i => i.route === route);
		return item ?? navItems[0];
	}

	const [currentPage, setCurrentPage] = useState(getNavItem())

	useEffect(() => {
		const changeItem = () => {
			const item = getNavItem()
			setCurrentPage(item)
		}
		window.addEventListener('hashchange', changeItem)
		return () => window.removeEventListener('hashchange', changeItem)
	}, []);

	return (
		<div className="container-fluid">
			<Header changePage={setCurrentPage}/>
			<Main currentPage={currentPage}/>
			<Footer/>
		</div>
	);

}

export default App;
