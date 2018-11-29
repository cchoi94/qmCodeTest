import React, { Component } from 'react';
import classes from './App.css'

import TodoList from './containers/TodoList/TodoList'

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
          <TodoList />
      </div>
    );
  }
}

export default App;