import React, { Component } from 'react';
import './App.css';

import MessageList from './components/MessageList'
import messages from './data/messages.json'

class App extends Component {
  state = {messages};

  star(id) {
    const newMessages = messages.map(message => {
      if (message.id === id) {
        message.starred = !message.starred
      }
      return message;
    })
    this.setState({messages: newMessages})
  }

  check(id) {
    const newMessages = messages.map(message => {
      if (message.id === id) {
        message.selected = !message.selected
      }
      return message;
    })
    this.setState({messages: newMessages})
  }

  render() {
    return (
      <MessageList messages={messages}
                   star={this.star.bind(this)}
                   check={this.check.bind(this)}/>
    );
  }
}

export default App;
