import React from 'react';
import s from './Reviews.module.css';
import { MultipleItems } from './MultipleItems';
import Button from '../Button/Button';
import k from '../../img/';
const Reviews = () => {
  return (
      <div className={s.Testimonials}>
         <div className={s.title}>
            <h2>Отзывы наших клиентов</h2>
         </div>
         <MultipleItems />
         <div className={s.button} >
         <Button customClass = {s.btn} text='Смотреть все отзывы'/>
         </div>
         <img title="my-img" src={k} alt="my-img" /> 
      </div>
  );
};

export default Reviews;