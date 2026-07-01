import React from "react";

export default function IdCard(props){
    return(
        <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
            <h2>Name: {props.name}</h2>
            <p>Role: {props.role}</p>
        </div>
    )
}
