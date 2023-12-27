// Write your code here
import {Component} from 'react'
import './index.css'

const PAUSE_ICON = 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
const PLAY_ICON = 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'

class DigitalTimer extends Component {
  constructor(props) {
    super(props)
    this.state = {isStart: false, limit: 25}
  }

  clickOnMinus = () => {
    this.setState(prevState => ({limit: prevState.limit - 1}))
  }

  clickOnPlus = () => {
    this.setState(prevState => ({limit: prevState.limit + 1}))
  }

  render() {
    const {isStart, limit} = this.state
    const iconText = isStart ? 'Pause' : 'Start'
    const iconImage = isStart ? PAUSE_ICON : PLAY_ICON
    const iconAlt = isStart ? 'pause icon' : 'play icon'
    const timerText = isStart ? 'Running' : 'Paused'
    const jsxElement = (
      <div className="app-bg-container">
        <div className="sub-app-container">
          <h1 className="heading">Digital Timer</h1>
          <div className="timer-bg-container">
            <h1>{limit}:00</h1>
            <p>{timerText}</p>
          </div>
          <div className="reset-play-container">
            <div className="icons-container">
              <img src={iconImage} alt={iconAlt} className="icons" />
              <button type="button">{iconText}</button>
            </div>
            <div className="icons-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png "
                alt="reset icon"
                className="icons"
              />
              <button type="button">Reset</button>
            </div>
          </div>
          <p className="timer-description">Set Timer limit</p>
          <div className="buttons-container">
            <button type="button" onClick={this.clickOnMinus}>
              -
            </button>
            <p className="time-limit">{limit}</p>
            <button type="button" onClick={this.clickOnPlus}>
              +
            </button>
          </div>
        </div>
      </div>
    )
    return jsxElement
  }
}
export default DigitalTimer
