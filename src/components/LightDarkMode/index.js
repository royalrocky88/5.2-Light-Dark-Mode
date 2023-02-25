// Write your code here

import './index.css'

import {Component} from 'react'

class LightDarkMode extends Component {
  state = {isClick: true}

  clickBtn = () => {
    this.setState(oldState => ({isClick: !oldState.isClick}))
  }

  render() {
    const {isClick} = this.state
    const cardMode = isClick ? 'dark-card' : 'light-card'
    const word = isClick ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="bg-container">
        <div className={`card-container ${cardMode}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" className="btn" onClick={this.clickBtn}>
            {word}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
