import { FooterBottom } from './FooterBottom'
import './styles/Footer.scss'
import logoFoot from './styles/img/logo-big.png'

export const Footer = () => {

  return (
    <>
    
      <div className="footer-container">

        <div className="wrapper">

          <div className="footer-content">

            <div className="logo-content">
              <div className="logo-image">
                <img src={logoFoot} alt="logo-foot" />
              </div>
              <div className="logo-info">
                <p>
                  Информация © 1993–2020  Университет ИТМО <br />
                Разработка © 2020 Управление по развитию и поддержке портала
              </p>
              </div>
            </div>

            <div className="pages-content">

              <div className="href-content">
                <a href="/">Страница ректора</a>
                <a href="/">Институты и факультеты</a>
                <a href="/">Библиотека</a>
                <a href="/">Издания Университета</a>
                <a href="/">Приёмная комиссия</a>
                <a href="/">Расписание занятий</a>
              </div>

              <div className="href-content">
                <a href="/">Страница ректора</a>
                <a href="/">Институты и факультеты</a>
                <a href="/">Библиотека</a>
                <a href="/">Издания Университета</a>
                <a href="/">Приёмная комиссия</a>
                <a href="/">Расписание занятий</a>
              </div>

            </div>

            <div className="adress-content">

              <div className="adress-text">
                <p>
                  г. Санкт-Петербург, Кронверкский пр., 49, ауд. 333 <br />
                Тел: +7 (931) 538-01-70 <br />
                E-mail: job@corp.ifmo.ru
              </p>
              </div>
              <div className="socials">

                <div className="socials-head">
                  <p>
                    Мы в соцсетях:
                </p>
                </div>
                <div className="socials-icons">
                  <a href="/"><i className="fab fa-vk"></i></a>
                  <a href="/"><i className="fab fa-facebook-f"></i></a>
                  <a href="/"><i className="fab fa-twitter"></i></a>
                  <a href="/"><i className="fab fa-instagram"></i></a>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      <FooterBottom />
      
    </>
  )
}