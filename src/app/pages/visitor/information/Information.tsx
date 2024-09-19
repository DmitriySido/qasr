'use client'

import { useState } from 'react';
import './information.scss';
import Accordion from './accordionItem/AccordionItem';

interface AccordionItem {
  title: string;
  content: string;
}

interface IInformation {
  items1?: AccordionItem[] | undefined;
  items2?: AccordionItem[] | undefined;
  items3?: AccordionItem[] | undefined;
  titles: string[]
}


const Information = ({ items1, items2, items3, titles }: IInformation) => {

  const [activeItem, setActiveItem] = useState<number | null>(1);

  const handleClick = (index: number) => {
    setActiveItem(index);
  };

  return (
    <div className='information-wrapper'>
      <ul className='information-link-list'>
        {titles.map((item, index) => {
          return(
            <li 
              className={`information-link-item ${activeItem === index ? 'active' : ''}`} 
              onClick={() => handleClick(index)}
              key={index + 'link'}>
              {item}
            </li>
          )
        })}
      </ul>

      {activeItem === 0 && items1 && <Accordion items={items1} />}
      {activeItem === 1 && items2 && <Accordion items={items2} />}
      {activeItem === 2 && items3 && <Accordion items={items3} />}
    </div>
  );
}

export default Information;