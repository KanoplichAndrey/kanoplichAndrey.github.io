import React from 'react';
import s from './OurComand.module.css';
import Card from './Card';
import { Comand } from '../../Base/Base';

const OurComand = () => {
  return (
    <div className={s.wrapComand}>
        <h2>Наша команда</h2>
        <ul className={s.Card}>
        { Comand.map((item, i) => {
          return <li key={i}><Card {...item}  /></li>	  
       })}
    </ul>
    </div>
  );
}

export default OurComand;
