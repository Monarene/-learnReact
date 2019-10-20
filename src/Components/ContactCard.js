import React from "react";

function ContactCard(props){
    console.log(props);

    return (
        <div className = "contact">
            <img src = {props.contact.imgUrl}></img>
            <h3 style = {{display: props.contact.name ? "block":" none"}}>Name: {props.contact.name}</h3>
            <p>Phone: {props.contact.phone}</p>
            <p>Email: {props.contact.email}</p>
        </div>
    )

}

export default ContactCard;