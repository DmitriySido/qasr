import Link from 'next/link'
import './buttonBuy.scss'

interface IButton {
  text: string,
  moreClass?: string,
  path?: string,
}

const ButtonBuy = ({ text = 'Buy Now', moreClass, path }: IButton) => <Link href={path ? path: '/'} className={`buy-ticket-button ${moreClass ? moreClass : ''}`}>{text}</Link>


export default ButtonBuy