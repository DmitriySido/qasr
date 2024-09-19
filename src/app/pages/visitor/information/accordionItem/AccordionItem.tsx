import './accordionItem.scss'

import React, { useState } from 'react';

interface AccordionItemProps {
  title: string;
  content: string;
  isActive: boolean;
  onClick: () => void;
}

interface AccordionItem {
  title: string;
  content: string;
}

interface IAccordion {
  items: AccordionItem[];
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isActive, onClick }) => {
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={onClick}>
        {title}
        <p className='plus'>+</p>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

const Accordion = ({ items }:IAccordion) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isActive={index === activeIndex}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;