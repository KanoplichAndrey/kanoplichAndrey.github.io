import React from 'react';
import s from'./Header.module.css';
import MenuDown from './MenuDown';
// import logo from '../../img/SubtractLogo.svg';
// import Button from '../Button/Button';
// import { useEffect, useState } from 'react';
import MenuUp from './MenuUp';


const  Headerr = () => {
  
  return (
    <div className={s.wrapHeader} >
       <MenuUp />
       <hr></hr>
       <MenuDown />
    </div>
  );
}

export default Headerr;