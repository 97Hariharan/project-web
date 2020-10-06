import React from 'react';
import './Categories.css';

const categories = () =>{
return(
    <div className = 'wrapper'>
        <div className = "sidebar">
        <h2>CATEGORIES</h2>
            <ul className = "categories-item">
                <li className = "categories-list">
                    <a href="#"> Books</a>
                </li>
                <li className = "categories-list">
                    <a href="#">T-shirts</a>
                </li>
                <li className = "categories-list">
                    <a href="#"> Bags</a>
                </li>
                <li className = "categories-list">
                    <a href="#"> misc</a>
                </li>
            </ul>
        </div>
    </div>
    );
}

export default categories;
