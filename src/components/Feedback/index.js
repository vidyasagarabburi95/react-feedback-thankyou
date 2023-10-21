import './index.css'
import {Component} from 'react'

class Feedback extends Component {
  state = {
    isEmojiClicked: false,
  }

  onclickEmoji = () => {
    this.setState({isEmojiClicked: true})
  }

  emojiSection = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="white-con">
        <div>
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>
        </div>
        <ul>
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button type="button" onClick={this.onclickEmoji}>
                <img className="emoji" src={emoji.imageUrl} alt={emoji.name} />
                <br />
                <span>{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  feedbackSection = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="white-con">
        <div>
          <div className="loveSection">
            <img className="love" src={loveEmojiUrl} alt="love emoji" />
            <h1 className="thankyou">Thank you!</h1>
          </div>
        </div>

        <h1 className="feedbackQuote">
          We will use your feedback to improve our customer support performance
        </h1>
      </div>
    )
  }

  render() {
    const {isEmojiClicked} = this.state
    return (
      <div className="bg-con">
        {isEmojiClicked ? this.feedbackSection() : this.emojiSection()}
      </div>
    )
  }
}
export default Feedback
