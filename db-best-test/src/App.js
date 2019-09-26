import React, { Component } from 'react';
import UsersList from './components/UsersList';
import { users } from './users';
import './App.css';

class App extends Component {
  render() {
    const usersList = users.map(user => ({...user}));
    return (
      <div>
        <h2>Crazy cats</h2>
        <UsersList usersList={usersList} />
      </div>
    );
  }
}

export default App;
