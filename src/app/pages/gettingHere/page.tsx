import './gettingHere.scss';

import ShareBlock from '@/app/components/UI/shareBlock/ShareBlock';
import Slider from '@/app/components/mainPage/slider/Slider';

import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({ subsets: ["latin"] });

import Logo1 from '../../../../public/images/logo/logo-1.jpg';
import Logo2 from '../../../../public/images/logo/logo-2.jpg';
import Logo3 from '../../../../public/images/logo/logo-3.jpg';
import Logo4 from '../../../../public/images/logo/logo-4.jpg';
import Logo5 from '../../../../public/images/logo/logo-5.jpg';

const GettingHere = () => {

  const AwardsSlideList = [
    {
      slideImage: Logo1,
      imageWidth: 400,
      imageheight: 200,
      slideTite: 'Trip Advisor',
      slideSubtitle: "Travelers' Choice Award"
    },
    {
      slideImage: Logo2,
      imageWidth: 400,
      imageheight: 200,
      slideTite: 'World Travel Awards',
      slideSubtitle: "Middle East's Leading Cultural Tourist Attraction"
    },
    {
      slideImage: Logo3,
      imageWidth: 400,
      imageheight: 200,
      slideTite: 'International Travel Awards',
      slideSubtitle: "Best Tourism Development Project in United Arab Emirates"
    },
    {
      slideImage: Logo4,
      imageWidth: 400,
      imageheight: 200,
      slideTite: 'MENALAC',
      slideSubtitle: "Best Unique Visitor Attraction"
    },
    {
      slideImage: Logo5,
      imageWidth: 400,
      imageheight: 200,
      slideTite: 'Pride of Abu Dhabi',
      slideSubtitle: "Best Favorite Attraction"
    },
  ];

  const SliderTitle = {
    sliderSubject: 'Our Awards',
    sliderSubtitle: 'Since its opening, Qasr Al Watan has been recognised by a number of leading industry awards.'
  }

  return (
    <section className='getting-here'>
      <div className='getting-here-main container'>
        <h1 className={`${playfair.className} getting-here-title`}>QASR AL WATAN OVERVIEW</h1>

        <div className='getting-here-block'>
          <ShareBlock
            side='left'
            shareSubject='Download the Qasr Al Watan Map'
            shareSubtitle='Enjoy a contactless experience at the Palace. Navigate your way through all exhibitions, shopping and dining options available at Qasr Al Watan.'
          />
        </div>

        <div className='getting-here-block'>
          <ShareBlock
            side='right'
            shareSubject='Qasr Al Watan Opening Hours'
            shareSubtitle='Opening hours are subject to change, please keep an eye for updates.'
          />
        </div>
        
      </div>
      <Slider identifier='GettingHere' sliderList={AwardsSlideList} sliderTitle={SliderTitle}/>
    </section>
  );
};

export default GettingHere;