import React from "react";
import './TabContent.css';


const TabContent = ({ content  }) => {
   return (
      <div className='tabcontent'>
         <div>
         <p>{content}</p>
         </div>
      </div>
   );
};

export default TabContent;
