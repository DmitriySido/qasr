import { notFound } from 'next/navigation';
import { FC } from 'react';

import './memoryPage.scss'

import MemoryPalaceFoto from '../../../../public/images/turist/MemoryPalaceFoto.jpg'
import MemoryPalaceFotoAdaptive from '../../../../public/images/turist/MemoryPalaceFotoAdaptive.jpg'

import PresidentialFoto from '../../../../public/images/turist/PresidentialFoto.jpg'
import PresidentialFotoAdaptive from '../../../../public/images/turist/PresidentialFotoAdaptive.jpg'

import QasrAllFoto from '../../../../public/images/turist/QasrAllFoto.jpg'
import QasrAllFotoAdaptive from '../../../../public/images/turist/QasrAllFotoAdaptive.jpg'

import SpiritFoto from '../../../../public/images/turist/SpiritFoto.jpg'
import SpiritFotoAdaptive from '../../../../public/images/turist/SpiritFotoAdaptive.jpg'

import TheGreatHallFoto from '../../../../public/images/turist/TheGreatHallFoto.jpg'
import TheGreatHallFotoAdaptive from '../../../../public/images/turist/TheGreatHallFotoAdaptive.jpg'

import TheHouseFoto from '../../../../public/images/turist/TheHouseFoto.jpg'
import TheHouseFotoAdaptive from '../../../../public/images/turist/TheHouseFotoAdaptive.jpg'

import ThePresidentialFoto from '../../../../public/images/turist/ThePresidentialFoto.jpg'
import ThePresidentialFotoAdaptive from '../../../../public/images/turist/ThePresidentialFotoAdaptive.jpg'

import Image, { StaticImageData } from 'next/image';

import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({ subsets: ["latin"] })

interface PageData {
  text: string,
  title: string,
  foto: StaticImageData,
  fotoAdaptive: StaticImageData
}

interface Data {
  [key: string]: PageData;
}

interface MemoryPageProps {
  params: {
    memoryId: string;
  };
}

const data: Data = {
  'a-memory-from-the-palace': {
    title: 'A Memory from the Palace',
    foto: MemoryPalaceFoto,
    fotoAdaptive: MemoryPalaceFotoAdaptive,
    text: 'Take back a moment from your journey with us. At the start of the tour experience, visitors can enjoy a special photo opportunity in the Palace’s dedicated Media Room. There is simply no better way to commemorate a visit to one of the world’s most unique cultural landmarks. Photos can be picked up at the gift shop once the tour has ended.',
  },
  'the-great-hall': {
    title: 'The Great Hall',
    foto: TheGreatHallFoto,
    fotoAdaptive: TheGreatHallFotoAdaptive,
    text: 'Step into a true testament of traditional Arabian craftsmanship, artistry and architecture at The Great Hall, Qasr Al Watan. Within this grand space, visitors will gain a deeper appreciation of the region’s architectural and artistic legacy. From the central dome and archways to the ornamentation and mosaic patterns, The Great Hall is truly a sight to behold. Every visitor can also reflect upon the mesmerizing details of The Great Hall by exploring the mirrored cubes positioned at every corner of this exquisitely crafted zone.',
  },
  'presidential-gifts': {
    title: 'Presidential Gifts',
    foto: PresidentialFoto,
    fotoAdaptive: PresidentialFotoAdaptive,
    text: 'Explore a collection of gifts signifying a legacy of goodwill between the UAE and the world. Designed as a vibrant showcase of cultural exchange and international diplomacy, this exhibition offers visitors the chance to get up close and personal with some of the most cherished diplomatic gifts received by the UAE. Visitors will also learn about the cultural considerations and protocols involved in selecting diplomatic gifts.',
  },
  'spirit-of-collaboration': {
    title: 'Spirit of Collaboration',
    foto: SpiritFoto,
    fotoAdaptive: SpiritFotoAdaptive,
    text: 'Walk into the space where the region’s future is being decided. This vast, circular room, aptly named Spirit of Collaboration, is where entities such as the Federal Supreme Council, the Arab League and the Gulf Cooperation Council come together to express ambitions, set agendas, and map the way forward. Visitors can learn about diplomacy and protocol as they admire the iconic chandelier and unique layout of the room, which symbolizes the UAE’s commitment to illumination and equality.',
  },
  'the-presidential-banquet': {
    title: 'The Presidential Banquet',
    foto: ThePresidentialFoto,
    fotoAdaptive: ThePresidentialFotoAdaptive,
    text: 'Discover how our nation hosts the world. Behind these doors lies an immaculately set banqueting hall wherein officials from around the globe are treated to a unique taste of Emirati hospitality. Visitors to The Presidential Banquet can enjoy an in-depth introduction to the customs, protocols, cuisine and even the unique collections of silver, crystal and china that make this experience a truly remarkable, world-class affair.',
  },
  'house-of-knowledge': {
    title: 'House Of Knowledge',
    foto: TheHouseFoto,
    fotoAdaptive: TheHouseFotoAdaptive,
    text: 'Uncover the monumental influence of Arabian scholarship on human civilization and progress. In this enlightening exhibition, visitors will encounter a vast selection of valuable artifacts and manuscripts that shed light on the Arab region’s most notable contributions to astronomy, science, art, literature and much more. Amidst House Of Knowledge’s curated pathways, visitors will also gain an understanding of the origins of Arabian libraries.',
  },
  'qasr-al-watan-library': {
    title: 'Qasr Al Watan Library',
    foto: QasrAllFoto,
    fotoAdaptive: QasrAllFotoAdaptive,
    text: 'Unlock a legacy of knowledge told through an incredible collection of timeless literature. Envisioned by HH the late Sheikh Zayed bin Sultan Al Nahyan, the Qasr Al Watan Library aims to preserve and share centuries of Arabian knowledge and culture with the world. Featuring a collection of 50,000 books from various ages of Arabian scholarship, the Palace library is an expansive space where history and knowledge help inspire and mold the future.',
  },
};

const MemoryPage: FC<MemoryPageProps> = async ({ params }) => {
  const { memoryId } = params;
  
  const pageData = data[memoryId];

  if (!pageData) {
    notFound();
  }

  return (
    <div className="memory">
      <div className='memory-wrapper'>
        <div className='memory-inner'>
          <h1 className={`${playfair.className} memory-title`}>{pageData.title}</h1>
          
          <Image
            className='memory-foto'
            src={pageData.foto}
            width={806}
            alt={pageData.title}
          />

          <Image
            className='memory-foto-adaptive'
            src={pageData.fotoAdaptive}
            width={806}
            alt={pageData.title}
          />
        </div>
      </div>
      <p className='memory-paragraph container'>{pageData.text}</p>
    </div>
  );
};

export default MemoryPage;