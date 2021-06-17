import React from 'react'

const Header = (props) => {

    // <label htmlFor="teams" className="label">Select a Team</label>
            // <select id="teams" name="teams">
            //     <option value="16">Scotland</option>
            //     <option value="5">England</option>
            //     <option value="23">Wales</option>
            // </select>
    

    return (
        <header>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </header>
    )
}

export default Header
