import './faq.scss'

import Image from 'next/image'
import FaqFoto from '../../../../public/images/faq-foto.jpg'
import FaqAdaptiveFoto from '../../../../public/images/faq-foto-adaptive.jpg'

import { Playfair_Display } from "next/font/google";
import Information from '../visitor/information/Information';
const playfair = Playfair_Display({ subsets: ["latin"] })

const Faq = () => {

  const items1 = [
    { title: 'Its there a dress code at Qasr al Watan', content: "As a courtesy to other guests in the Palace and in accordance with local laws and customs, we ask all guests to please wear respectful clothing when in the palace. We kindly recommend that knees and shoulders be covered. Starting from March 1, 2024, the Visitor Center will stop providing scarves to guests who are not dressed according to the dress code standards. However, guests wearing outfits not fully covering their arms will still be allowed to drape scarves over their shoulders." },
    { title: 'Where can i park my car>', content: "There are ample parking spaces available and there is no charge to park here." },
    { title: 'Its there valet parking?', content: "Yes, valet parking is available at the Visitor Centre car park at a price of AED 35." },
    { title: 'Does Qasr Al Watan provide transportation services?', content: "No, visitors must find their own transport to/from Qasr Al Watan." },
    { title: 'How can I purchase a ticket?', content: "Tickets can be purchased online. Please see the Tickets section of the website for more information." },
    { title: 'How do I receive my tickets when I buy online?', content: "You will receive your ticket(s) via email. You can print these out and bring them with you or you can download the ticket(s) onto your phone. You will need to show this to gain entry into the Palace or its grounds." },
    { title: 'Is there an entry fee?', content: "No, there are no refunds on any and all entry tickets." },
    { title: 'Are refunds possible for the entry fee?', content: "Yes, there is an entry fee. Please see the Tickets section of the website for more information." },
    { title: 'If I leave the grounds, can I return without paying again?', content: "No, once you exit the premises you will not be able to enter again." },
    { title: 'Does Qasr Al Watan have guided tours?', content: "In line with Abu Dhabi Government guidelines, guided tours are now available for purchase at-gate." },
    { title: 'Do I have to take a guided tour?', content: "No, but to enhance your experience of Qasr Al Watan, a guided tour is recommended." },
    { title: 'Are there any facilities for people of determination & the elderly?', content: "Qasr Al Watan provides wheelchairs for people of determination and elderly visitors. People of determination guests who are registered in the UAE receive complimentary access plus one companion. People of determination guests who are registered in the UAE without companion receive complimentary access. International people of determination guests with obvious signs of disability (to be determined by the colleague’s judgment) receive complimentary access but companion don’t receive complimentary access." },
    { title: 'Are there prayer facilities at the site?', content: "Prayer Rooms in both Visitor Center and Zayed gate are open for guests during the operational hours." },
    { title: 'Is internet access available for visitors?', content: "There is no Wi-Fi available throughout the Palace grounds." },
  ]

  const items2 = [
    { title: 'Ticket Information', content: "Tickets can be purchased online, or on site directly at the ticketing booth. Book online to avoid queues. Tickets are dated and can only be used on the date printed on the ticket." },
    { title: 'Qasr Al Watan Ticket', content: "This general admission ticket gives you access to the Qasr Al Watan Tour, the Gardens, Visitor Centre and all zones, exhibitions and public spaces within the Palace and Gardens." },
    { title: 'Photography Services', content: "We have a photography service where guests are able to dress up in traditional Emirati clothing (For women: Abayah , jalabiya , burqa, arabic jewellery ) , and (Kandoora and bischt for men ). The guests can then take pictures in their outfits around the palace (AED 250) and outside the palace (AED 350) with different photo options." },
  ]

  const Titles = ['GENERALS', 'TICKETS & TOURS']

  return(
    <div className='faq'>
      <section className='faq-welcome'>
        <div className='faq-welcome-inner'>
          <h1 className={`${playfair.className} faq-title`}>FAQ</h1>

          <Image
            className='faq-image'
            width={900}
            src={FaqFoto}
            alt='FAQ Illustration'
          />

          <Image
            className='faq-adaptive-image'
            width={570}
            src={FaqAdaptiveFoto}
            alt='FAQ Illustration'
          />
        </div>
      </section>
      <div className='faq-inner container'>
        <Information items1={items1} items2={items2} titles={Titles}/>
      </div>
    </div>
  )
}

export default Faq
