// Write your code here.
import './index.css'

const NavBar = props => {
  const {scoreValue, topScore, displayResult} = props
  return (
    <nav className="nav-bg">
      <div className="emoji-game-logo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-logo"
        />
        <h1 className="score">Emoji Game</h1>
      </div>
      {!displayResult && (
        <div className="score-div">
          <p className="score">Score: {scoreValue}</p>
          <p className="top-score">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
