import { useState } from './react'
import logo from './logo.svg';
import './App.css';
import TheForm from './components/TheForm';
import UserList from './components/UserList';

function App() {

  return (
    <div className="App">
      <TheForm />
      <UserList />
    </div>
  );
}

export default App;
