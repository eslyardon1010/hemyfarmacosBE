import React from 'react'
import './Card.css'
export default class Card extends React.Component{
    render(){
        return (
            <div className="card">
                <div className="card-logo">
                    <img src='./img/logo_1.png' width='100' />
                </div>
                <div className="card-content">
                  <h1>Titulo</h1>  
                  <p>Descripcion</p>
                </div>
            </div>
        )
    }
}