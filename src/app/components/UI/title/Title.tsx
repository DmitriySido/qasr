import './title.scss'

import { Playfair_Display } from "next/font/google";
import { Montserrat } from "next/font/google";
import Link from 'next/link';

const montserrat = Montserrat({ subsets: ["latin"] })
const playfair = Playfair_Display({ subsets: ["latin"] })

interface ITitle {
  titleText: string,
  subtitle: string,
  moreClass?: string
}

const Title = ({ titleText, subtitle, moreClass }: ITitle) => {
  return(
    <div className={`title-wrapper ${moreClass ? moreClass : ''}`}>
      <h2 className={`${playfair.className} title-text`}>{titleText}</h2>
      <p className={`${montserrat.className} subtitle`}>{subtitle}</p>
    </div>
  )
}

export default Title