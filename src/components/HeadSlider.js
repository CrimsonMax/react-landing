import './styles/HeadSlider.scss'
import logo from './styles/img/logo-small.png'

export const HeadSlider = () => {
  return (
    <div className="head-container">

      <div className="top-header">
        <div className="organisation-logo">
          <img src={logo} alt="logo" />
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

          <div className="slider">
            <div className="slider-prev">
              <i className="far fa-arrow-alt-circle-left"></i>
            </div>
            <div className="slider-card">
              <div className="slider-card-header">
                <h1>
                  Началась подача документов
                </h1>
              </div>
              <div className="slider-card-content">
                <p>
                  Программа предполагает углубленное изучение вопросов, связанных с проектированием, исследованием, производством и эксплуатацией мехатронных и робототехнических систем и комплексов.
                </p>
              </div>
              <div className="slider-button">
                <button className="btn">
                  <p className="btn-content">
                    Подробнее
                  </p>
                </button>
              </div>
            </div>
            <div className="slider-next">
              <i className="far fa-arrow-alt-circle-right"></i>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}