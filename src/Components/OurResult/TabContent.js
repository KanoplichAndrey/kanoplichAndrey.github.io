import React from 'react';
import s from './TabContent.module.css';

const TabContent = ({ content }) => {
  return (
    <div className={s.tabcontent}>
      <div>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default TabContent;
