import s from "./EmojiResults.module.css"
import EmojiRow from "./EmojiRow"


function EmojiResults(props) {
  const { options } = props
  return (
    <ul className={s.emojiResults}>
      {options.slice(0, 20).map((option, index) => (
        <EmojiRow 
        title={option.title}
        icon={option.symbol}
        key={index}/>
      ))}
    </ul>
  )
}

export default EmojiResults;