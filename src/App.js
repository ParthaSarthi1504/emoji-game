import EmojiGame from './components/EmojiGame'

import './App.css'

const emojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://em-content.zobj.net/source/microsoft-teams/337/face-with-tongue_1f61b.png',
    // 'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://em-content.zobj.net/source/microsoft-teams/337/face-with-head-bandage_1f915.png',
    // 'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl:
      'https://em-content.zobj.net/source/microsoft-teams/337/hugging-face_1f917.png',
    // 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://em-content.zobj.net/source/microsoft-teams/337/face-with-tears-of-joy_1f602.png',
    // 'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://em-content.zobj.net/source/microsoft-teams/337/face-with-hand-over-mouth_1f92d.png',
    // 'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl:
      'https://em-content.zobj.net/source/microsoft-teams/337/face-with-medical-mask_1f637.png',
    // 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://em-content.zobj.net/source/microsoft-teams/337/shushing-face_1f92b.png',
    // 'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://em-content.zobj.net/source/microsoft-teams/337/winking-face-with-tongue_1f61c.png',
    // 'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://em-content.zobj.net/source/microsoft-teams/337/grinning-face-with-sweat_1f605.png',
    // 'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://em-content.zobj.net/source/microsoft-teams/337/smiling-face-with-heart-eyes_1f60d.png',
    // 'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl:
      'https://em-content.zobj.net/source/microsoft-teams/337/grinning-face_1f600.png', // 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://em-content.zobj.net/source/microsoft-teams/337/star-struck_1f929.png',
    // 'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
]

const App = () => <EmojiGame emojisList={emojisList} />

export default App
