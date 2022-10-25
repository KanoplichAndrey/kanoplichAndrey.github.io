import React from 'react';
import s from './CTA.module.css';
// import  ctaPhoto  from '../../img/photo1.png';
import Button from '../Button/Button'
const CTA = () => {
  return ( 
	<div className={s.ctaWrap}>
    <div className={s.wrapContent}>
     <div className={s.content}>
    <div className={s.contentTitle}>
      <h1>Хотите увеличить продажи?</h1>
    </div>
    <div className={s.contentText}>
      <h3>
      Мы точно знаем, как привести на Ваш сайт клиентов! Оставьте заявку и получите
      индивидуальное предложение с привлекательной ценой.
      </h3>
    </div>
  <Button text='Получить комерческое предложение' customClass={s.btn} />
    {/* <img
               className={s.wrapPhoto1}
               title="my-img"
               src={ctaPhoto}
               alt="my-img"
            /> */}
      </div> 
	 </div>
	</div>
  );
}

export default CTA;
