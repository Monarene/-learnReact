import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import MyInfo from './Components/MyInfo'
import Footer from './Components/Footer'
import MainContent from './Components/MainContent';
import ToDoItem from "./Components/ToDoItem"

function App(){
  return (
    <div className  = "todo-box">
      <div><h2>My To Do</h2></div>
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
  </div>
  )
}

export default App