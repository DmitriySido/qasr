import Image from 'next/image'
import './tickets.scss'
import ServiceCards from '@/app/components/serviceCards/serviceCards'

import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({ subsets: ["latin"] })


import ToursFoto from '../../../../public/images/serviceCards/tours-foto.jpg'
import GeneralAdmissionFoto from '../../../../public/images/serviceCards/Generall-admission-foto.jpg'
import PalaceInMotionFoto from '../../../../public/images/serviceCards/palace-in-motion-foto.jpg'
import TicketsFoto from '../../../../public/images/ticketsFoto.jpg'
import TicketsFotoAdaptive from '../../../../public/images/ticketsFotoAdaptive.jpg'

const Tickets = () => {

  const cardsTitle = ['GENERAL ADMISSION', 'PALACE IN MOTION', 'TOURS']

  const serviceCard = [
    {
      cardsFoto: GeneralAdmissionFoto,
      cardSubject: 'Qasr Al Watan Ticket',
      cardSuptitle: "Qasr Al Watan is more than a palace, it is a unique testament to the spirit of the United Arab Emirates' people and its leaders. With your Qasr Al Watan ticket, you can explore the fascinating history and culture of the United Arab Emirates, and experience true Emirati and Arabian excellence.",
      cardSubtitle: 'To know about the Palace in Motion timings, please check the Plan Your Visit section.',
      linkPath: '',
      id: 'palaceInMotion'
    },
    {
      cardsFoto: PalaceInMotionFoto,
      cardSubject: 'Palace in Motion',
      cardSuptitle: 'Join us as we light up the night with a spectacular light and sound show at Qasr Al Watan. This immersive event tells the story of the past, present, and the future vision of the nation in three acts.',
      cardSubtitle: '',
      linkPath: '',
      id: 'generalAdmission'
    },
    {
      cardsFoto: ToursFoto,
      cardSubject: 'Guided Tour',
      cardSuptitle: 'Experience a complete and comprehensive tour that explores the majestic hallways of Qasr al Watan as you delve into fascinating exhibitions and artifacts.',
      cardSubtitle: '',
      linkPath: '',
      id: 'tours'
    },
  ]

  return(
    <div className='tickets'>
      <div className='tickets-wrapper'>
        <div className='tickets-inner'>
          <h1 className={`${playfair.className} tickets-title`}>Qasr Al Watan Tickets</h1>

          <Image
            className='tickets-foto-adaptive'
            src={TicketsFotoAdaptive}
            width={780}
            alt='Tickets Foto'
          />

          <Image
            className='tickets-foto'
            src={TicketsFoto}
            width={600}
            alt='Tickets Foto'
          />
        </div>
      </div>
      
      <ServiceCards
        cardTitle={cardsTitle}
        serviceCard={serviceCard}
      />
    </div>
  )
}

export default Tickets