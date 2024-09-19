import './shareBlock.scss'

import Image from 'next/image'

import ShareFoto1 from '../../../../../public/images/watan-foto-2.jpg'
import ShareFoto2 from '../../../../../public/images/share-block-foto-1.jpg'


import Link from 'next/link'
import { Playfair_Display } from "next/font/google";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] })
const playfair = Playfair_Display({ subsets: ["latin"] })


interface IShare {
  side: string,
  shareSubject: string,
  shareSubtitle: string
}

const ShareBlock = ({ side, shareSubject, shareSubtitle }: IShare) => {

  return(
    <div className={`share-content ${side ? side : ''}`}>
        <Image
          className='share-image'
          src={side === 'right' ? ShareFoto2 : ShareFoto1}
          width={820}
          height={460}
          alt='SHARE OUR NATION’S JOURNEY FOTO'
        />

        <div className='share-text-content'>
          <h2 className={`${playfair.className} share-subject`}>{shareSubject}</h2>
          <p className={`${montserrat.className} share-subtitle`}>{shareSubtitle}</p>
          
          <Link className={`${montserrat.className} download-link`} href={'/'}>Download now</Link>
        </div>
    </div>
  )
}

export default ShareBlock