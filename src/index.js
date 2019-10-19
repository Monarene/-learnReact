import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ToDoItem from "./Components/ToDoItem";
import * as serviceWorker from './serviceWorker';



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/* 
    // const date = new Date(2019, 6, 6, 16);
    const hours = date.getHours();
    let timeOfDay
    const styles = {
        fontSize: "30px"
    }

    if (hours < 12){
        timeOfDay = "morning";
        styles.color = "dodgerblue";
    }else if (hours >= 12 && hours <= 17){
        timeOfDay = "afternoon";
        styles.color = "green";
    }else{
        timeOfDay = "night";
        styles.color = "skyblue"
    }

    return (
        <h1 style = {styles}>Good {`${timeOfDay}`}</h1>
    ) */