import {Component} from "react"
import React from "react"

class Messages extends Component {
  render() {
    const renderedMessages = this.props.messages.map(this.renderMessage)
    return (
      <ul>
        {renderedMessages}
      </ul>
    )
  }

  renderMessage = (message) => {
    const isCurrentMember = message.member.id === this.props.memberID
    const className = isCurrentMember ?
      "messages-message currentMember" : "messages-message"
    return (
      <li className={className}>
      <span
        style={{backgroundColor: message.member.color}}
      />
        <div>
        <span className={"username"}>
          {message.member.username}
        </span>
          <p>
            {message.text}
          </p>
        </div>
      </li>
    )
  }
}

export default Messages