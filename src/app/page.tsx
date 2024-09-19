import Share from "./components/mainPage/share/Share";
import Slider from "./components/mainPage/slider/Slider";
import Watan from "./components/mainPage/watan/Watan";

import Foto1 from '../../public/images/scroll-foto-1.jpg';
import Foto2 from '../../public/images/scroll-foto-2.jpg';
import Foto3 from '../../public/images/scroll-foto-3.jpg';
import Foto4 from '../../public/images/scroll-foto-4.jpg';

export default function Home() {

  const InsideQasrSlideList = [{
    slideImage: Foto1,
    imageWidth: 400,
    imageheight: 280,
    slideTite: 'Qasr Al Watan Library',
    slideSubtitle: 'Explore centuries of human knowledge in a vast collection of books focusing on the culture, development and achievements of the United Arab Emirates.',
    linkPaht: '/pages/selectDataTicket'
  },
  {
    slideImage: Foto2,
    imageWidth: 400,
    imageheight: 280,
    slideTite: 'Palace in Motion (Light Show)',
    slideSubtitle: 'Join us as we light up the night with a spectacular light and sound show. A story told in three acts about the past, present, and the future vision of the nation.',
    linkPaht: '/pages/selectDataTicket'
  },
  {
    slideImage: Foto3,
    imageWidth: 400,
    imageheight: 280,
    slideTite: 'Dining',
    slideSubtitle: 'Enjoy a selection of culinary choices ranging from high-end dining to light snacks.',
    linkPaht: ''
  },
  {
    slideImage: Foto4,
    imageWidth: 400,
    imageheight: 280,
    slideTite: 'Shopping',
    slideSubtitle: 'Complete your experience with a host of exclusive, high-quality mementos from the Palace.',
    linkPaht: ''
  }]

  const SliderTitle = {
    sliderSubject: 'Inside Qasr Al Watan',
    sliderSubtitle: ''
  }

  return (
    <main>
      <Watan />
      <Share />
      <Slider identifier='HomePage' sliderList={InsideQasrSlideList} sliderTitle={SliderTitle}/>
    </main>
  );
}