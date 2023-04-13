import {Component} from 'react'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'

import WinOrLossCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  constructor(props) {
    super(props)
    const {emojisList} = this.props
    this.state = {
      score: 0,
      topScore: 0,
      listOfEmojis: emojisList,
      previouslyClickedEmojiIdList: [],
      displayResult: false,
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  getTopScore = () => {
    this.setState(prevState => ({
      topScore:
        prevState.topScore < prevState.score
          ? prevState.score
          : prevState.topScore,
      displayResult: true,
    }))
  }

  emojiClicking = uniqueId => {
    const {previouslyClickedEmojiIdList} = this.state
    if (previouslyClickedEmojiIdList.includes(uniqueId)) {
      this.getTopScore()
    } else {
      const sortedEmojiList = this.shuffledEmojisList()
      this.setState(prevState => ({
        listOfEmojis: sortedEmojiList,
        previouslyClickedEmojiIdList: [
          ...prevState.previouslyClickedEmojiIdList,
          uniqueId,
        ],
        score: prevState.score + 1,
      }))
    }
  }

  startGameAgain = () => {
    this.setState({
      score: 0,
      displayResult: false,
      previouslyClickedEmojiIdList: [],
    })
  }

  render() {
    const {listOfEmojis, score, topScore, displayResult} = this.state

    if (score === 12 && displayResult === false) {
      this.getTopScore()
    }

    return (
      <div className="bg-div">
        <NavBar
          scoreValue={score}
          topScore={topScore}
          displayResult={displayResult}
        />
        <div className="emoji-container">
          {!displayResult ? (
            <ul className="emoji-ul-div">
              {listOfEmojis.map(each => (
                <EmojiCard
                  key={each.id}
                  emojiDetails={each}
                  emojiClicking={this.emojiClicking}
                />
              ))}
            </ul>
          ) : (
            <WinOrLossCard
              scoreValue={score}
              startGameAgain={this.startGameAgain}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
