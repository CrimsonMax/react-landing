import './styles/Modal.scss'

export const Modal = ({ active, setActive, children }) => {

  return (
    <div className={active ? 'modal-window active' : 'modal-window'} onClick={() => setActive(false)}>
      <div className={active ? 'modal__content active' : 'modal__content'} onClick={(e) => e.stopPropagation()} >
        {children}
      </div>
    </div>
  )
}