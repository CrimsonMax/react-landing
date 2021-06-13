import { useState } from 'react'
import './styles/Slider.scss'

export const Slider = () => {

  /* --V----Контент слайдера----V-- */
  const [sliderItem, setSliderItem] = useState([
    {
      id: 1,
      header: 'Началась подача документов',
      content: 'Программа предполагает углубленное изучение вопросов, связанных с проектированием, исследованием, производством и эксплуатацией мехатронных и робототехнических систем и комплексов.',
      active: false,
    },
    {
      id: 2,
      header: 'Закончилась подача документов',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus voluptates quia culpa assumenda totam!',
      active: false,
    },
    {
      id: 3,
      header: 'Вот и всё',
      content: 'Программа не предполагает углубленное изучение вопросов.',
      active: true,
    },
  ])

  /* --V----Обработчики смены слайдов----V-- */

  let index = 0

  const prevHandler = () => {
    const newState = sliderItem
      .map((elem, i) => { // Убираем активацию элемента в стейте
        if (elem.active) {
          index += i
          return { ...elem, active: false }
        } else {
          return elem
        }
      })
      .map((elem, i, arr) => { // Выбираем какой элемент активировать
        if (i - index === -1) {
          return { ...elem, active: true }
        } else if (i - index - arr.length === -1) {
          return { ...elem, active: true }
        } else {
          return elem
        }
      })

    setSliderItem(newState) // Заносим новое значение в стейт
  }

  const nextHandler = () => {
    const newState = sliderItem
      .map((elem, i) => { // Убираем активацию элемента в стейте
        if (elem.active) {
          index += i
          return { ...elem, active: false }
        } else {
          return elem
        }
      })
      .map((elem, i, arr) => { // Выбираем какой элемент активировать
        if (i - index === 1) {
          return { ...elem, active: true }
        } else if (i - index === 1 - arr.length) {
          return { ...elem, active: true }
        } else {
          return elem
        }
      })
      
    setSliderItem(newState) // Заносим новое значение в стейт
  }

  return (
    <div className="slider">
      <div className="slider-prev" onClick={() => prevHandler()}>
        <i className="far fa-arrow-alt-circle-left"></i>
      </div>
      <div className="slider-card-container">
        {sliderItem.map(elem => (
          // В инлайн-стилях определяем показ только активированного элемента
          <div key={elem.id} style={elem.active ? { opacity: '1' } : { opacity: '0' }} className="slider-card">
            <div className="slider-card-header">
              <h1>
                {elem.header}
              </h1>
            </div>
            <div className="slider-card-content">
              <p>
                {elem.content}
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
        ))}
      </div>
      {/* <div className="slider-card">
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
      </div> */}
      <div className="slider-next" onClick={() => nextHandler()}>
        <i className="far fa-arrow-alt-circle-right"></i>
      </div>
    </div>
  )
}