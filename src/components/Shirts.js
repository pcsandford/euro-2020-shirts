import React from 'react'

const Shirts = (props) => {

    let teamCollection;

    if(props.selectedTeam === "All") {

        teamCollection = props.teams.map((team) => {

            return <article className="shirt-collection" key={team.name}>
                <div className="section-shirt">
                    <img className="shirt" src={team.shirt} alt="home shirt of {team.name}" />
                </div>
                <div className="section-details">
                    <p className="name">{team.name}</p>
                    <p className="detail group">Group: <span className="bold">{team.group}</span></p>
                    <p 
                        className="detail appearances">
                        Total appearances: <span className="bold">{team.appearances}
                            {team.appearancesExtra ? <span className="asterisk">&#42;</span> : null}
                        </span>
                    </p>
                    {team.appearancesExtra ? <p className="extra extra-appearances">&#42; {team.appearancesExtra}</p> : null}
                    {team.winners ? <p className="detail winners">Winners: <span className="bold">{team.winners}{team.winnersExtra ? <span className="asterisk">&#42;</span> : null}</span></p> : null}
                    {team.winnersExtra ? <p className="extra extra-winners">&#42; {team.winnersExtra}</p> : null}
                </div>
            </article>
    })
    } else {
        teamCollection = <article className="shirt-collection">
        <div className="section-shirt">
            <img className="shirt" src={props.teams[props.selectedTeam].shirt} alt="home shirt of {team.name}" />
        </div>
        <div className="section-details">
            <p className="name">{props.teams[props.selectedTeam].name}</p>
            <p className="detail group">Group: <span className="bold">{props.teams[props.selectedTeam].group}</span></p>
            <p 
                className="detail appearances">
                Total appearances: <span className="bold">{props.teams[props.selectedTeam].appearances}
                    {props.teams[props.selectedTeam].appearancesExtra ? <span className="asterisk">&#42;</span> : null}
                </span>
            </p>
            {props.teams[props.selectedTeam].appearancesExtra ? <p className="extra extra-appearances">&#42; {props.teams[props.selectedTeam].appearancesExtra}</p> : null}
            {props.teams[props.selectedTeam].winners ? <p className="detail winners">Winners: <span className="bold">{props.teams[props.selectedTeam].winners}{props.teams[props.selectedTeam].winnersExtra ? <span className="asterisk">&#42;</span> : null}</span></p> : null}
            {props.teams[props.selectedTeam].winnersExtra ? <p className="extra extra-winners">&#42; {props.teams[props.selectedTeam].winnersExtra}</p> : null}
        </div>
    </article>

    }
    

    return (
        <section className="shirt-container">
            {teamCollection}
        </section>
    )
}

export default Shirts
