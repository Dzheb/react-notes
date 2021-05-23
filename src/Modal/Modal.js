import React from 'react'
import './Modal.css'

export default class Modal extends React.Component {
  state = {
    isOpen: false,
  }
  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.setState({ isOpen: true })}>Открыть</button>
        {this.state.isOpen && (
          <div className="modal">
            <div className="modal-body">
              <h1>Заголовок</h1>
              <p>Black lives matter</p>
              <button onClick={() => this.setState({ isOpen: false })}>
                Закрыть
              </button>
            </div>
          </div>
        )}
      </React.Fragment>
    )
  }
}
