import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Headerr';
import Cover from './Components/Cover/Cover';
import DigitalPaket from './Components/DigitalPaket/DigitalPaket';
import Benefits from './Components/Benefits/Benefits';
import BestSolutions from './Components/BestSolutions copy/BestSolutions';
import CaruselCard from './Components/CaruselCard/CaruselCard';
import CTA from './Components/CTA/CTA';
import OurCompany from './Components/OurCompany/OurCompany';
import OurComand from './Components/OurComand/OurComand';
import	OurResult from './Components/OurResult/OurResult';

function App() {
	
	return (
		<BrowserRouter>
		<div className="App">
			<Header />
			<Cover  />
			<DigitalPaket />
			<Benefits   />
			<BestSolutions />
			<CaruselCard />
			<CTA />
			<OurCompany />
			<OurComand />
			<OurResult />
		</div>

	 </BrowserRouter>
	);
}

export default App;
