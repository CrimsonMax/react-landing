import { useState } from 'react'
import './styles/MyNavbar.scss'
import img from './styles/img/logo-mark2.png'

export const MyNavbar = () => {

  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <nav className="navbar">
      <a href="/" className="navbar-logo" onClick={closeMobileMenu}>
        <img src={img} alt="main" width="300" height="30" className="logo-img" />
      </a>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className="nav-item">
          <a href="/" className="nav-links" onClick={closeMobileMenu}>
            О лаборатории
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-links" onClick={closeMobileMenu}>
            Учебная деятельность
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-links" onClick={closeMobileMenu}>
            Научная деятельность
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-links" onClick={closeMobileMenu}>
            Новости
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-links" onClick={closeMobileMenu}>
            Контакты
          </a>
        </li>
      </ul>
    </nav>
  )
}