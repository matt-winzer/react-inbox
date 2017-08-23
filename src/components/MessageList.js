import React from 'react';
import Message from './Message'

const MessageList = (props) => {
  const messages = props.messages.map(message => {
    return (<Message key={message.id}
                    message={message}
                    star={props.star}/>)
  })
  return (
    <main>
      {messages}
    </main>
  )
}

export default MessageList;
