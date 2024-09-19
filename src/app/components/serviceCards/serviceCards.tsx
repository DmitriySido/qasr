'use client'

import './serviceCards.scss';
import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface IServiceCard {
  cardsFoto: StaticImageData,
  cardSubject: string,
  cardSuptitle: string,
  cardSubtitle: string,
  linkPath: string,
}

interface IServiceCards {
  cardTitle: string[],
  serviceCard: IServiceCard[],
}

const ServiceCards = ({ cardTitle, serviceCard }: IServiceCards) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleLinkClick = (index: number) => { setActiveIndex(index) };

  return (
    <div className='service-cards container'>
      <ul className='service-card-links'>
        {cardTitle.map((link, index) => (
          <li
            key={index}
            className={`service-card-link ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleLinkClick(index)}
          >
            {link}
          </li>
        ))}
      </ul>

        <div className='service-card'>
          <Image
            className='service-card-foto'
            src={serviceCard[activeIndex].cardsFoto}
            width={500}
            alt={serviceCard[activeIndex].cardSubject}
          />

          <div className='service-cart-text'>
            <h3 className='service-card-subject'>{serviceCard[activeIndex].cardSubject}</h3>
            <p className='service-card-paragraph'>{serviceCard[activeIndex].cardSuptitle}</p>
            <p className='service-card-paragraph'>{serviceCard[activeIndex].cardSubtitle}</p>

            {serviceCard[activeIndex].linkPath && <Link className='service-card-read-more' href={serviceCard[activeIndex].linkPath}>Read More</Link>}
          </div>
        </div>
    </div>
  );
};

export default ServiceCards;