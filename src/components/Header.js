import { Slider } from './Slider'
import './styles/Header.scss'
import logoHead from './styles/img/logo-small.png'

export const Header = () => {
  return (
    <div className="head-container">

      <div className="top-header">
        <div className="organisation-logo">
          <img src={logoHead} alt="logo" />
        </div>
        <div className="language-switch">
          <span className="language-name">En</span>
          <span className="flag-logo">
            <i className="fas fa-globe-americas"></i>
          </span>
        </div>
      </div>

      <div className="slider-header">

        <div className="wrapper">

          <Slider />

        </div>

      </div>
    </div>
  )
}