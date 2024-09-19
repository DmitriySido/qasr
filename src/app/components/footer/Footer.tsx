import './footer.scss'

import WatsappIcon from '../../../../public/icons/whatsapp-icon.png'
import FacebookIcon from '../../../../public/icons/facebook-icon.png'
import InstagramIcon from '../../../../public/icons/instagram-icon.png'
import TikTokIcon from '../../../../public/icons/tiktok-icon.png'
import Image from 'next/image'

const Footer = () => {

  const navigationLink = [
    {
      linkName: 'Watsapp Icon',
      linkIcon: WatsappIcon,
      width: 24,
      height: 24,
      linkPath: '/'
    },
    {
      linkName: 'Facebook Icon',
      linkIcon: FacebookIcon,
      width: 24,
      height: 24,
      linkPath: '/'
    },
    {
      linkName: 'Instagram Icon',
      linkIcon: InstagramIcon,
      width: 24,
      height: 24,
      linkPath: '/'
    },
    {
      linkName: 'TikTok Icon',
      linkIcon: TikTokIcon,
      width: 24,
      height: 24,
      linkPath: '/'
    },
  ]

  return(
    <footer className='footer'>
      <div className='footer-inner container'>
        <p className='footer-text'>Site Content and Ⓒ Qasr Al Watan, unless otherwise noted on our legal page. All rights reserved.</p>

        <ul className='navigation-list'>
          {navigationLink.map((link, index)=> {
            return <li className='navigation-item' key={index + 'nav-item'}>
              <div className='navigation-link'>
                <Image
                  className='link-icon'
                  src={link.linkIcon}
                  width={link.width}
                  height={link.height}
                  alt={link.linkName}
                />
              </div>
            </li>
          })}
        </ul>
      </div>
    </footer>
  )
}

export default Footer