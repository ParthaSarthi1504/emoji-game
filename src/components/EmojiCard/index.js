// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, emojiClicking} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmoji = () => {
    emojiClicking(id)
  }

  return (
    <li className="li-list">
      <button type="button" className="emoji-btn" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-size" />
      </button>
    </li>
  )
}

export default EmojiCard
