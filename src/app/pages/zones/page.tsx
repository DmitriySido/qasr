import './zones.scss'

import Image from 'next/image'
import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display( { subsets: ["latin"] })

import ZonesMainFoto from '../../../../public/images/zones-main-foto.jpg'
import Title from '@/app/components/UI/title/Title';

import DiscoverFoto1 from '../../../../public/images/discover/discover-foto-1.jpg'
import DiscoverFoto2 from '../../../../public/images/discover/discover-foto-2.jpg'
import DiscoverFoto3 from '../../../../public/images/discover/discover-foto-3.jpg'
import DiscoverFoto4 from '../../../../public/images/discover/discover-foto-4.jpg'
import DiscoverFoto5 from '../../../../public/images/discover/discover-foto-5.jpg'
import DiscoverFoto6 from '../../../../public/images/discover/discover-foto-6.jpg'
import DiscoverFoto7 from '../../../../public/images/discover/discover-foto-7.jpg'

import ServiceCardFoto1 from '../../../../public/images/serviceCards/palace-in-motion-foto.jpg'
import ServiceCardFoto2 from '../../../../public/images/serviceCards/shopping-foto.jpg'
import ServiceCardFoto3 from '../../../../public/images/serviceCards/dinning-foto.jpg'


import Link from 'next/link';
import ServiceCards from '@/app/components/serviceCards/serviceCards';

const Zones = () => {

  const cardsTitle = ['PALACE IN MOTION', 'SHOPPING', 'DINING']

    const serviceCard = [
      {
        cardsFoto: ServiceCardFoto1,
        cardSubject: 'Palace in Motion',
        cardSuptitle: 'Witness the Palace come to life in a spectacular light and sound show that celebrates the UAE’s journey in three breathtaking acts that unfold in front of the main Palace.',
        cardSubtitle: 'To know about the Palace in Motion timings, please check the Plan Your Visit section.',
        linkPath: '',
        id: 'palaceInMotion'
      },
      {
        cardsFoto: ServiceCardFoto2,
        cardSubject: 'Shopping',
        cardSuptitle: 'Complete your experience with a variety of exclusive, high-quality souvenirs and mementos inspired by the Palace’s intricate designs and the UAE’s rich heritage.',
        cardSubtitle: '',
        linkPath: '',
        id: 'shopping'
      },
      {
        cardsFoto: ServiceCardFoto3,
        cardSubject: 'Dinning',
        cardSuptitle: 'Enjoy a selection of snacks and beverages from “Diyafa” which is located at the Palace exit and at the Visitors center’s exit.',
        cardSubtitle: '',
        linkPath: '',
        id: 'dinning'
      },
    ]

  const discoverlist = [
    {
      discoverFoto: DiscoverFoto1,
      discoverTitle: "A Memory from the Palace",
      discoverSubtitle: "Take back a moment from your journey at one of the United Arab Emirates most iconic landmarks.",
      discoverPath: '/pages/a-memory-from-the-palace'
    },
    {
      discoverFoto: DiscoverFoto2,
      discoverTitle: "The Great Hall",
      discoverSubtitle: "Step into a true testament of Arabian artistry and gain a deeper appreciation of the region’s architectural legacy.",
      discoverPath: '/pages/the-great-hall'
    },
    {
      discoverFoto: DiscoverFoto3,
      discoverTitle: "Presidential Gifts",
      discoverSubtitle: "Explore a collection of gifts signifying a legacy of good will between the United Arab Emirates and the world.",
      discoverPath: '/pages/presidential-gifts'
    },
    {
      discoverFoto: DiscoverFoto4,
      discoverTitle: "Spirit of Collaboration",
      discoverSubtitle: "This is the official meeting place for the UAE Cabinet and the Federal Supreme Council.",
      discoverPath: '/pages/spirit-of-collaboration'
    },
    {
      discoverFoto: DiscoverFoto5,
      discoverTitle: "The Presidential Banquet",
      discoverSubtitle: "Discover how our nation’s leaders host the world’s leading dignitaries with a unique taste of Emirati hospitality.",
      discoverPath: '/pages/the-presidential-banquet'
    },
    {
      discoverFoto: DiscoverFoto6,
      discoverTitle: "House Of Knowledge",
      discoverSubtitle: "Uncover the monumental influence of Arabian scholarship on human civilization and progress.",
      discoverPath: '/pages/house-of-nowledge'
    },
    {
      discoverFoto: DiscoverFoto7,
      discoverTitle: "Qasr Al Watan Library",
      discoverSubtitle: "Unlock a legacy of knowledge told through a vast collection of timeless literature at Qasr Al Watan Library.",
      discoverPath: '/pages/qasr-al-watan-library'
    }
  ]

  return(
    <div className='zones'>
      <div className='zones-welcome-wrapper'>
        <div className='zones-welcome-inner container'>
          <h1 className={`${playfair.className} zones-titlte`}>Explore <br /> Qasr Al Watan</h1>

          <Image
            className='zones-main-foto'
            width={500}
            alt='Zones foto'
            src={ZonesMainFoto}
          />
        </div>
      </div>

      <section className='discover container'>
        <p className='discover-paragraph'>The visitor experience at Qasr Al Watan is an inspiring and educational tour of Emirati and Arabian excellence. Here, visitors will learn about the principles that have propelled traditional Arabian design to remarkable status. Visitors will also gain a rare insight into Emirati governance and culture through the Palace’s exhibits. Most notably, visitors will enjoy exploring the expansive selection of timeless books and manuscripts at House of Knowledge and Qasr Al Watan Library.</p>

        <Title titleText='Discover the Zones' subtitle='Gain a brief understanding of each zone in Qasr Al Watan’s unforgettable tour experience.'/>

        <ul className='discover-list'>
          {discoverlist.map((item, index) => {
            return(
              <li className='discover-item' key={index + 'discover-item'}>
                <Image
                  className='discover-item-foto'
                  width={400}
                  height={250}
                  alt={item.discoverTitle + ' Foto'}
                  src={item.discoverFoto}
                />

                <h3 className='discover-item-title'>{item.discoverTitle}</h3>
                <p className='discover-item-subtitle'>{item.discoverSubtitle}</p>

                <div className='link-wrapper'>
                  <Link className='discover-item-link' href={item.discoverPath}>Read More</Link>
                  <span className='arrow'></span>
                </div>
              </li>
            )
          })}
        </ul>
      </section>

      <ServiceCards
        cardTitle={cardsTitle}
        serviceCard={serviceCard}
      />
    </div>
  )
}

export default Zones