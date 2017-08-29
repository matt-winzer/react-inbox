import React, { Component } from 'react';
import './App.css';

import MessageList from './components/MessageList'
import Toolbar from './components/Toolbar'
import messages from './data/messages.json'

class App extends Component {

  state = {messages, allSelected: false, someSelected: false};

  componentDidMount() {
    this.setStateWithSelection(this.state.messages)
  }

  star(id) {
    const newMessages = messages.map(message => {
      if (message.id === id) {
        message.starred = !message.starred
      }
      return message;
    })
    this.setState({
      ...this.state,
      messages: newMessages
    });
  }

  check(id) {
    const newMessages = messages.map(message => {
      if (message.id === id) {
        message.selected = !message.selected
      }
      return message;
    })
    this.setStateWithSelection(newMessages)
  }

  isSelected(messages) {
    const all = messages.every(message => message.selected);
    const some = messages.some(message => message.selected);
    return {all, some}
  }

  selectAllToggle() {
    let selected = !this.state.allSelected;
    const newMessages = this.state.messages.map(message => {
      message.selected = selected;
      return message
    })
    this.setStateWithSelection(newMessages)
  }

  setStateWithSelection(messages) {
    const selected = this.isSelected(messages)
    this.setState({
      ...this.state,
      messages,
      allSelected: selected.all,
      someSelected: selected.some
    });
  }

  render() {
    return (
      <main className="container">
        <h1> Inbox </h1>
        <Toolbar messages={messages}
                 allSelected={this.state.allSelected}
                 someSelected={this.state.someSelected}
                 selectAllToggle={this.selectAllToggle.bind(this)}/>
        <MessageList messages={messages}
                     star={this.star.bind(this)}
                     check={this.check.bind(this)}/>
      </main>
    );
  }
}

export default App;
