import Link from 'next/link'

interface Link {
  path: string;
  linkText: string;
}

interface Section {
  title: string;
  link1: Link;
  link2: Link;
  link3: Link;
  link4?: Link;
  link5?: Link;
  link6?: Link;
}

interface NavigationProps {
  links: Section[];
  setBurgerMenu: (state: boolean) => void
}

const Navigation = ({ links, setBurgerMenu }: NavigationProps) => {

  return(
    <>
      {links.map((nav) => {
        return(
          <div className="navigation-container" key={nav.title}>
            <span className="text">{nav.title}</span>
            <span className="tooltip">
      
              <Link href={nav.link1.path} className='navigation-link' onClick={() => setBurgerMenu(false)}>{nav.link1.linkText}</Link>
              <Link href={nav.link2.path} className='navigation-link' onClick={() => setBurgerMenu(false)}>{nav.link2.linkText}</Link>
              <Link href={nav.link3.path} className='navigation-link' onClick={() => setBurgerMenu(false)}>{nav.link3.linkText}</Link>
              
              {nav.link4 && <Link href={nav.link4.path} className='navigation-link' onClick={() => setBurgerMenu(false)}>{nav.link4.linkText}</Link>}
              {nav.link5 && <Link href={nav.link5.path} className='navigation-link' onClick={() => setBurgerMenu(false)}>{nav.link5.linkText}</Link>}
              {nav.link6 && <Link href={nav.link6.path} className='navigation-link' onClick={() => setBurgerMenu(false)}>{nav.link6.linkText}</Link>}
            </span>
      
            <span className='arrow'></span>
          </div>
        )
      })}
    </>
  )
}

export default Navigation