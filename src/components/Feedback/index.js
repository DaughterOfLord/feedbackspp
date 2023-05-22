// Write your React code here.
import {Component} from 'react'
import './index.css'

class feedbackApp extends Component {
  state = {changeFeedBack: true}

  showResult = () => {
    this.setState({
      changeFeedBack: false,
    })
  }

  render() {
    const {changeFeedBack} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="bg-container">
        {changeFeedBack ? (
          <div className="card-container">
            <h1 className="head-card">
              How satisfied are you with our customer support performance
            </h1>
            <ul className="list-container">
              {emojis.map(eachItem => (
                <li key={eachItem.id} className="list-card">
                  <button
                    type="button"
                    className="btn"
                    onClick={this.showResult}
                  >
                    <img
                      src={eachItem.imageUrl}
                      alt={eachItem.name}
                      className="img-card"
                    />
                    <span className="name">{eachItem.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="card-container">
            <img src={loveEmojiUrl} className="img-card" alt="love emoji" />
            <h1 className="heading">Thank You</h1>
          </div>
        )}
      </div>
    )
  }
}

export default feedbackApp
