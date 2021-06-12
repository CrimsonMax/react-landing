import { useState } from 'react'
import { Modal } from './Modal'
import { Form } from './Form'
import cross from './styles/img/Cross.png'
import './styles/Contacts.scss'

export const Contacts = () => {

  const [modalActive, setModalActive] = useState(false)

  return (
    <>
      <div className="contacts-container">
        <div className="wrapper">
          <div className="carde-container">
            <div className="contact-carde">
              <div className="carde-content">
                <h3 className="content-header">Контакты</h3>
                <p className="content-adress">
                  г. Санкт-Петербург, Кронверкский пр-т, д.49, ауд. 155 (вход со стороны ул. Сытнинской)
                </p>
                <p className="content-phone">Тел: <a href="/">+7 (931) 538-01-70</a></p>
                <button className="btn" onClick={() => setModalActive(true)} >
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
      <Modal active={modalActive} setActive={setModalActive}>
        <img className="cross" src={cross} alt="close" onClick={() => setModalActive(false)} />
        <Form exist={modalActive} />
      </Modal>
    </>
  )
}