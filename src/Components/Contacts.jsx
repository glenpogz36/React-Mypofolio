import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import bg from '../Assests/img/bg.jpg'

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <img src={bg} alt="background" />
                <h1>glen_sale@yahoo.com</h1>
                <h2>Call : 206-910-6531</h2>
                <h2>Why Epicodus: Epicodus allows 24/7 access computer lab providing</h2>
                <ul>
                    <li>HTML</li>
                    <li>C#</li>
                    <li>Javasript</li>
                    <li>CSS STYLYING</li>
                    <li>React</li>
                    <li>Intership</li>
                </ul>
            </div>
        )
    }
}

export default Contact;
