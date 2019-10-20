import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactCard from "./Components/ContactCard"

function App(){

  let styles  = {display:"flex", flexDirection:"row", flexWrap:"wrap"} 
  return (
    <div className = "contacts" style = {styles}>
      <ContactCard contact = {{name:"Mr. Whiskerton", imgUrl:"https://placekitten.com/300/200",phone :"+234 810 272 3247", email : "mr,whiskers@gmail.com"}} />
      <ContactCard contact = {{name:"Fluttterton", imgUrl:"https://placekitten.com/400/200",phone :"+234 810 272 3247", email : "mr,whiskers@gmail.com"}}/>
      <ContactCard style = {{display:"flex", justifyContent: "flex-start"}} contact = {{name:"James", imgUrl:"https://placekitten.com/400/100",phone :"+234 810 272 3247", email : "mr,whiskers@gmail.com"}}/>
      <ContactCard contact = {{name:"Disketter", imgUrl:"https://placekitten.com/200/100",phone :"+234 810 272 3247", email : "mr,whiskers@gmail.com"}}/>
    </div>
  )
}

export default App