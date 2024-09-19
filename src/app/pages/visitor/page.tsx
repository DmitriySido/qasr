import Calendar from './calendar/Calendar';
import Information from './information/Information';
import './visitor.scss'

import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({ subsets: ["latin"] })

const Visitor = () => {

  const items1 = [
    { title: 'Palace updates:', content: "Palace in Motion show timing: During August, at 8:00pm. Last entry at 7:30pm.   During September, at 7:30pm. Last entry at 7:00pm." },
  ]

  const items2 = [
    { title: 'Dress Code', content: "As a courtesy to other guests in the Palace and in accordance with local laws and customs, we ask all guests to please wear respectful clothing when in the palace. We kindly recommend that knees and shoulders be covered. Starting from March 1, 2024, the Visitor Center will stop providing scarves to guests who are not dressed according to the dress code standards. However, guests wearing outfits not fully covering their arms will still be allowed to drape scarves over their shoulders." },
    { title: 'Photography Services', content: "We have a photography service where guests are able to dress up in traditional Emirati clothing (For women: Abayah , jalabiya , burqa, arabic jewellery ) , and (Kandoora and bischt for men ). The guests can then take pictures in their outfits around the palace (AED 250) and outside the palace (AED 350) with different photo options." },
    { title: 'Shuttle Bus Facilities', content: "Shuttle buses will be continuous" },
    { title: 'Parking and Additional Rest Serveces', content: "Arriving to the Visitor Centre by car, you will see the Visitor Centre car park. There are ample parking spaces available and there is no charge to park here. Valet parking is available at the Visitor Centre car park at a price of AED 35." },
    { title: 'Cloackrooms & Lockers', content: "There are no cloakroom or locker facilities available on the Palace grounds. Visitors are encouraged to leave their excess belongings at home or in their vehicles." },
    { title: 'Wi-Fi', content: "There is no Wi-Fi available throughout the Palace grounds." },
    { title: 'Mobile Phone', content: "In consideration for other visitors, mobile phones must be switched to silent." },
    { title: 'Restrooms', content: "There are a number of restrooms available throughout the Visitor Centre, Ceremonial Gate and the Palace." },
    { title: 'First Aid', content: "A First Aid room is located inside the Palace." },
  ]

  const items3 = [
    { title: 'Complementary shuttle buses from Dubai Al Watan', content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, ducimus? Porro quod quidem alias maiores deserunt modi quaerat ab? Temporibus sit autem, distinctio veritatis laudantium expedita consectetur hic. Tenetur, perspiciatis!" },
  ]

  const Titles = ['PALACE UPDATES', 'VISITORS INFORMATION', 'GETTING HERE']

  
  return(
    <div className="visitor container">
      <p className="visitor-suptitle">CALENDAR</p>
      <h2 className={`${playfair.className} visitor-title`}>OPENING HOURS</h2>

      <Calendar/>

      <p className='visitor-paragraph' >Kindly note that the closing time above is the last entry time to the Palace.</p>
      <p className='visitor-paragraph' >Opening hours are subject to change, please keep an eye for updates.</p>
      
      <Information items1={items1} items2={items2} items3={items3} titles={Titles}/>
    </div>
  )
}

export default Visitor