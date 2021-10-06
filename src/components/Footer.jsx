import React from 'react'
import './Footer.css'

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer className="bg-dark text-center text-light">
            <div className="p-3">
                Web site created by Cristian C. using React, Bootstrap & <a className="footer-link" target="_blank" rel='noreferrer' href="https://disneyapi.dev/">Disney API</a>.
            </div>
            <div className="p-2" style={{backgroundColor: "rgba(85, 85, 85, 0.45)"}}>
                <small>©{year} This website were created such as student project. Disney and Disney characters are trademarks of Disney Enterprises, Inc.</small>
            </div>

        </footer>
    )
}

export default Footer