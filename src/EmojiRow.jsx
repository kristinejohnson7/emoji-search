import { useState } from "react";
import s from "./EmojiRow.module.css"

function EmojiRow(props) {
  const [copySuccess, setCopySuccess] = useState(false);
  const { title, icon } = props

  function copyToClipboard(icon) {
    navigator.clipboard.writeText(icon)
    setCopySuccess(true)
    setTimeout(() => setCopySuccess(false), 1000)
  }

  return (
    <li>
      <button
      type="button"
      className={s.emojiRow}
      onClick={() => copyToClipboard(icon)}>
        <span>{title.toUpperCase()} {icon}</span>
        <span>{copySuccess ? ` 👍 Copied 😉 ` : `  Copy ✨`}</span>
      </button>
    </li>
    
  )
}

export default EmojiRow;