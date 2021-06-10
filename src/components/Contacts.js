import './styles/Contacts.scss'

export const Contacts = () => {

  return (
    <div className="contacts-container">
      <div className="wrapper">
        <div className="card-container">
          <div className="contact-card">
            <div className="card-content">
              <h3 className="content-header">Контакты</h3>
              <p className="content-adress">
                г. Санкт-Петербург, Кронверкский пр-т, д.49, ауд. 155 (вход со стороны ул. Сытнинской)
              </p>
              <p className="content-phone">Тел: <a href="/">+7 (931) 538-01-70</a></p>
              <button className="btn">
                <div className="btn-content">
                  <i className="far fa-envelope"></i>
                  <p>Написать нам</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}