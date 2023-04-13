// Write your code here.
import './index.css'

const WinOrLossCard = props => {
  const {scoreValue, startGameAgain} = props

  const playAgain = () => {
    startGameAgain()
  }

  const result = scoreValue === 12 ? 'You Won' : 'You Lose'
  const scoreTitle = scoreValue === 12 ? 'Best Score' : 'Score'
  return (
    <div className="win-or-loss-card-div">
      <div className="result-sub-container">
        <h1 className="result">{result}</h1>
        <p className="score">{scoreTitle}</p>
        <p className="score2">{scoreValue}/12</p>
        <button type="button" className="play-again-btn" onClick={playAgain}>
          Play Again
        </button>
      </div>
      {result === 'You Won' ? (
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win or lose"
          className="won-img"
        />
      ) : (
        <img
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          alt="win or lose"
          className="won-img"
        />
      )}
    </div>
  )
}

export default WinOrLossCard
