import React from 'react'

const Selector = (props) => {

    console.log(props.teams);
    return (
        <select name="selector" id="selector" onChange={props.setSelectedTeam}>
            <option value="All">All Teams</option>
            {props.teams.map((team, index) => {
                return <option key={team.name} value={index}>{team.name}</option>
            })}
        </select>
    )
}

export default Selector
