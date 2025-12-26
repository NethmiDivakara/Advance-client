import React from 'react';
import './Footer.css';

export default function Footer(){
    return (
        <nav className='footer'>
            <div className='footer-title'>
                <h3>Estate Agent</h3>
                <a href="#about">About</a>
                <a href="#privacy">Privacy</a>
                <hr/>
                <p>&copy; 2025 All rights reserved.</p>

            </div>
        </nav>
    )
}