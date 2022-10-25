import React from 'react';
import s from "./CaruselCard.module.css";
import Cart from './Cart';
const CaruselCard = () => {
  return (
    <div className={s.Wrap}>
      <div className={s.wrapContent}>
          <div className={s.Title}>
            {/* <h2 ourСases={ourСases}>{ourСases}</h2> */}
            <h2>Наши кейсы и портфолио</h2>
          </div>
          <div className={s.Content} >
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />

          </div>
        {/* <div className={s.scrollBar}>

        </div> */}
      </div>
    </div>
  );
}

export default CaruselCard;
