import './styles/Form.scss'
import { useEffect, useRef, useState } from 'react';
import { checkName, checkEmail, checkText } from '../util/FormControl'

export const Form = () => {

  /* --V----Стейт формы----V-- */
  const [form, setForm] = useState({
    name: '',
    email: '',
    text: ''
  })

  const firstRender = useRef(true)

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
    } else {
      ok()
    } // eslint-disable-next-line
  }, [form])

  /* --V----Валидация----V-- */
  function ok() {
    let btn = document.querySelector('#btn')

    const errors = []
    const error = document.querySelectorAll('small')
    error.forEach(elem => {
      if (elem.innerText) {
        errors.push(elem.innerText)
      }
    })

    if (form.name && form.email && form.text && errors.length === 0) {
      btn.removeAttribute('disabled')
    } else {
      btn.setAttribute('disabled', 'disabled')
    }
  }

  /* --V----Обработчики----V-- */

  const handlerName = () => {
    let field = document.querySelector('#username')
    setForm(form => form = { ...form, name: field.value })
  }

  const handlerText = () => {
    let field = document.querySelector('#text')
    setForm(form => form = { ...form, text: field.value })
  }

  const handlerEmail = () => {
    let field = document.querySelector('#email')
    setForm(form => form = { ...form, email: field.value })
  }

  return (
    <div className="form-container">
      <form autoComplete="off" action="" id="form" className="form">
        <div className="form-control">
          <div className="header">
            <h1>Напишите нам!</h1>
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="username">Ваши фамилия и имя<sup className="star">*</sup></label>
          <input type="text" id="username" onInput={checkName} defaultValue={form.name} onChange={handlerName} placeholder="Введите Ваше Имя" />
          <small></small>
        </div>
        <div className="form-control">
          <label htmlFor="email">Электронная почта<sup className="star">*</sup></label>
          <input type="email" id="email" onInput={checkEmail} defaultValue={form.email} onChange={handlerEmail} placeholder="Введите Ваш Email" />
          <small></small>
        </div>
        <div className="form-control">
          <label htmlFor="text">Что непонятно или нужно уточнить<sup className="star">*</sup></label>
          <textarea maxLength="300" id="text" onInput={checkText} defaultValue={form.text} onChange={handlerText} placeholder="Введите Text" />
          <small></small>
        </div>
        <div className="form-control">
          <div className="approving">
            <span>
              Отправляя данную форму, вы даете согласие на обработку своих <a href="https://www.bing.com/">Персональных данных</a>
            </span>
          </div>
        </div>
        <div className="btn-container">
          <button className="btn" id="btn" type='submit' disabled>
            <div className="btn-content">
              <i className="far fa-envelope"></i>
              <p>Отправить</p>
            </div>
          </button>
        </div>
      </form>
    </div>
  )
}