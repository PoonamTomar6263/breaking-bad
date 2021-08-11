import React from 'react'

import './Header.css'
function Header({ getText }) {
    return (
        <div className="header">

            <div className="head">
                <input className="input" placeholder="Search By Name" onChange={(e) => { getText(e.target.value.toLowerCase()) }} />
            </div>
           <img className="header_logo" src="https://i.pinimg.com/236x/3e/cd/a4/3ecda4d21a28bed9e96a92a111f9e2f0.jpg" />
            
        </div>
    )
}

export default Header
