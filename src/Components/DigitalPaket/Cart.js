import React from 'react';
import Button from '../Button/Button';
import s from './Cart.module.css';
// import { getCartBase1 } from '../../Servis/Servis';
const Cart = ({ title, seo, content, sale, text }) => {
  
  return (
    <div className={s.cartWrap1}>
        <div className={s.f} >
         <div className={s.wrapContent} >
         <div className={s.title} >
            <p> {title} </p>
         </div>
         <hr className={s.hr} ></hr>
         <div className={s.seo}>
            <p> {seo} </p>
         </div>
         <hr className={s.hr} ></hr>
         <div className={s.content}>
            <p> {content} </p>
         </div>
         <div className={s.sale}>
            <p> {sale} </p>
         </div>
         <div className={s.btnCartWrap}>
           <Button customClass={s.btnCart} text={text}/>
         </div>
    </div>
    </div>
    </div>
  );
 
};

export default Cart;
