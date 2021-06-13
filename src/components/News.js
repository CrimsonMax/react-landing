import './styles/News.scss'
import cardPic1 from './styles/img/card-img1.jpg'
import cardPic2 from './styles/img/card-img2.jpg'
import cardPic3 from './styles/img/card-img3.jpg'

export const News = () => {

  /* --V----Типа наш бэкенд----V-- */
  const newsArr = [
    {
      id: 1,
      img: cardPic1,
      date: '2 декабря 2019',
      text: 'Физарум//Перформер, 2019, Bioroboty019 это мультимедийный перформанс о связи человеческого и нечеловеческого, представленный на Кураторском форуме в Молодёжный...'
    },
    {
      id: 2,
      img: cardPic2,
      date: '2 декабря 2019',
      text: 'Среди теоретических дисциплин особое место отводится «Теории вероятностей», «Дискретной математике», «Теории автоматического управления» и др.'
    },
    {
      id: 3,
      img: cardPic3,
      date: '2 декабря 2019',
      text: 'В специализации «Мехатроника» упор сделан на изучение дисциплин, посвященных проектированию и конструированию различных мехатронных и робототехнических...'
    },
    {
      id: 4,
      img: cardPic1,
      date: '2 декабря 2019',
      text: 'Третья специализация специально создана для тех, кто уже в школах получил достаточно хорошую подготовку, позволяющую воспринимать знания на более...'
    },
    {
      id: 5,
      img: cardPic2,
      date: '2 декабря 2019',
      text: 'Небольшие группы и интересные дополнительные дисциплины позволяют получить максимальный эффект от учебного процесса по направлению «Мехатроника и...'
    },
    {
      id: 6,
      img: cardPic3,
      date: '2 декабря 2019',
      text: 'Развить навыки эффективного использования современных информационных технологий при создании робототехнических и мехатронных комплексов и систем.'
    },
  ]

  return (
    <div className="news-container">
      <div className="wrapper">

        <div className="news-header">
          <h3>Новости и события</h3>
        </div>
        <div className="news-carde-container">

          {newsArr.map(elem => (

            <div key={elem.id} className="news-carde">

              <div className="carde-img">
                <img src={elem.img} alt="img" />
              </div>
              <div className="carde-info">

                <div className="carde-header">
                  <p className="carde-header__data">{elem.date}</p>
                  <a href="/" className="carde-header__source">
                    <i className="fab fa-vk"></i>
                    <span>Вконтакте</span>
                  </a>
                </div>
                <div className="carde-text">
                  <a href="/" className="carde-text__preview">{elem.text}</a>
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </div>
  )
}