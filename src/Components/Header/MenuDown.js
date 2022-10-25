import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import s from'./MenuDown.module.css';
import { ReactComponent as Search} from '../../img/search.svg';
import { useEffect, useState } from 'react';
import { getHeaderMenu } from './Servis/Servis';


const  MenuDown = () => {
	const [menu, setMenu] = useState([]);
	const [actives, setActives] = useState('true');

	useEffect(() => {
		const servisMenu = getHeaderMenu();
		setMenu(servisMenu);
		// console.log('hhh');
	}, []);


	const Active = () =>
		{setActives(!actives)};

	// useEffect(() => {
	// 	setActive(Active)
	
	// }, []);
	
	return (
		<div className={s.wrapMenuDown} >
			<ul className={s.reset+''+ s.menuItem}>
				<li className={s.realit} >
					<button className={s.menuBtn} onClick={Active}>Увеличение продаж</button>
				<div className = {actives ? s.dropDown :  s.active } >
					<ul className={s.dropDownList +''+ s.reset}>
						<li className={s.dropDownItem}>
							<Link  to='Пункт 1' className={s.dropDownLink}>Пункт 1</Link>
						</li>
						<li className={s.dropDownItem}>
							<Link  to='SEO продвижение сайтов в Яндекс' className={s.dropDownLink}>SEO продвижение сайтов в Яндекс</Link>
						</li>
						<li className={s.dropDownItem}>
							<Link  to='Проведение бизнеса в социальных сетях' className={s.dropDownLink}>Проведение бизнеса в социальных сетях</Link>
						</li>
						<li className={s.dropDownItem}>
							<Link  to={'Пункт 4'} className={s.dropDownLink}>Пункт 4</Link>
						</li>
					</ul>
				</div>
					
					</li>
			</ul>
		
						<ul className={s.map}>
								{menu.map((value, index) => {
									return <li key={index}><NavLink to={'/' + value}>
										{value}  </NavLink> </li>;
								})}
						</ul> 

						<Link to="logo" className={s.logo}>
						<Search className={s.search} title="my-img"  />
				 </Link>
			 </div>
	 
	);
}

export default MenuDown;