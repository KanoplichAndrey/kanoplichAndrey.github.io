import { React, useEffect, useState } from "react";
import Cart from "./Cart";
import s from "./DigitalPaket.module.css";
import { getCartBase1 } from "../../Servis/Servis";

const DigitalPaket = () => {
   const [array, setArray] = useState([]);

   useEffect(() => {
      const servisArray = getCartBase1();
      setArray(servisArray);
   }, []);
   return (
      <>
         <div className={s.digitalWrap}>
            <div className={s.title} >
               <h2>
                  Антикризисные <span>DIGITAL-пакеты</span>
               </h2>
            </div>

            <div className={s.classWrapCart}>
               {array.map((item, i) => (
                  <Cart {...item} key={i} />
               ))}
            </div>
         </div>
      </>
   );
};

export default DigitalPaket;
