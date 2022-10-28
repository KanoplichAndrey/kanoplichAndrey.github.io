import React from 'react';
// import { Link } from 'react-router-dom';
import './OurResult.css';
import TabContent from './TabContent';

const items = [
  {
    title: 'Высокая эффективность работы',
    content: 'Высокая эффективность работы',
  },
  {
    title: 'Надежность',
    content:
      'Даём юридические финансовые гарантии выполнения своих обязательств. Более 60 высококвалифицированных специалистов в штате - мы обладаем ресурсами и технологиями для решения любой задачи точно в срок.',
  },
  {
    title: 'Опыт и репутация',
    content: 'Опыт и репутация',
  },
  {
    title: 'Комплексный подход',
    content: 'Комплексный подход',
  },
  {
    title: '100% контроль',
    content: '100% контроль',
  },
  {
    title: 'Выгода',
    content: 'Выгода',
  },
];

const OurResult = () => {
  const [active, setActive] = React.useState(null);
  const openTab = (e) => setActive(+e.target.dataset.index);
  return (
    <div className="wrapOurResult">
      <h1 className="h1">Мы всегда достигаем обещанного результата</h1>
      <p className="p">И вот почему:</p>
      <div>
        <div className="tab">
          {items.map((n, i) => (
            <button
              className={` tablinks ${i === active ? 'active' : ''}`}
              onClick={openTab}
              data-index={i}
              key={i}>
              {n.title}
            </button>
          ))}
        </div>
        {items[active] && <TabContent {...items[active]} />}
      </div>
    </div>
  );
};

export default OurResult;
