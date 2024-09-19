import './watan.scss'

import Image from 'next/image'
import ButtonBuy from '../../UI/buttonBuy/ButtonBuy'
import MainFoto from '../../../../../public/images/main-foto.jpg'
import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({ subsets: ["latin"] })

const Watan = () => {

  return(
    <section className="watan">
      <div className="watan-content">
        <h2 className={playfair.className + " watan-title"}>QASR AL WATAN</h2>
        <ButtonBuy text="BUY TICKETS" path='/pages/selectDataTicket' moreClass='watan-button'/>
      </div>
      <Image className="main-foto" src={MainFoto} alt="QASR AL WATAN"/>
    </section>
  )
}

export default Watan