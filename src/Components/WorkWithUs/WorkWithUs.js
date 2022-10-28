import React from 'react';
// import { Link } from 'react-router-dom';
import s from './WorkWithUs.module.css';
// import s from './TabContent.module.css';
import Screen from '../../img/Screen.png'

const items = [
  {
    title: 'Заявка',
    content: '    Предложим только результативные каналы продвижения Вашего бизнеса.',
    // active: "active",
  },
  {
    title: 'Комерческое предложение',
    content:
      'Даём юридические финансовые гарантии выполнения своих обязательств. Более 60 высококвалифицированных специалистов в штате - мы обладаем ресурсами и технологиями для решения любой задачи точно в срок.',
  },
  {
    title: 'Начало работ',
    content: 'Опыт и репутация',
  },
  {
    title: 'Контроль качества',
    content: 'Комплексный подход',
  },
  {
    title: 'Гарантированный результат',
    content: '100% контроль',
  },

];

const WorkWithUs = ( {actives}) => {
  const [active, setActive] = React.useState(null);
  const openTab = (e) => setActive(+e.target.dataset.index);

  const TabContent = ({ content  }) => {
    return (
       <div className={s.tabcontent}>
          <div>
          {/* <p>{content}</p> */}
          <ul>
                <li>
                Если Вы точно знаете, какие услуги необходимы для Вашего бизнеса, то:
                </li>
                <li>
                Заполните форму заявки на Коммерческое предложение - это займёт менее минуты;    
                </li>

                <li>
                Мы подберём для Вас выгодное предложение и обсудим детали реализации;
                </li>

                <li>
                Либо просто позвоните нашему специалисту: +7 (4872) 79-29-10                  
                </li>

                <li>
                Мы предлогаем комплекстный подход и разрабатываем уникальные стратегии для достижения целей Вашего бизнеса;                   
                </li>

                <li>
                Используем все интструменты digital-маркетинга для того, что добиться максимальных результатов;
                    
                </li>
                <li>
                Предложим только результативные каналы продвижения Вашего бизнеса.
                    
                </li>
              </ul>
              
          </div>
          <div className={s.img}>
                <img title="my-img" src={Screen} alt="my-img" /> 
              </div>
       </div>
    );
 };
  return (
    <div className={s.wrapOurResult}>
      <h1 className={s.h1}> Как начать с нами работать </h1>
      {/* <p className={s.p}>И вот почему:</p> */}
      <div>
        <div className={s.tab}>
          {items.map((n, i) => (
            <button
            className={ ` ${s.tablinks} ${i === active ? s.active : '' } `}  
              // className={` tablinks ${i === active ? s.active : '' }`}
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

export default WorkWithUs;