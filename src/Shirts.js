import React from 'react'

const Shirts = ({teams}) => {

    return (
        <section className="shirt-container">
            {teams.map((team) => {
                return <article className="shirt-collection" key={team.name}>
                        <div className="section-shirt">
                            <img className="shirt" src={team.shirt} alt="home shirt of {team.name}" />
                        </div>
                        <div className="section-details">
                            <p className="name">{team.name}</p>
                            <p className="detail group">Group: <span className="bold">{team.group}</span></p>
                            <p 
                                className="detail appearances">
                                Total appearances: 
                                <span className="bold">
                                    {team.appearances}
                                    {team.appearancesExtra ? <span className="asterisk">&#42;</span> : null}
                                </span>
                            </p>
                            {team.appearancesExtra ? <p className="extra extra-appearances">&#42; {team.appearancesExtra}</p> : null}
                            {team.winners ? <p className="detail winners">Winners: <span className="bold">{team.winners}{team.winnersExtra ? <span className="asterisk">&#42;</span> : null}</span></p> : null}
                            {team.winnersExtra ? <p className="extra extra-winners">&#42; {team.winnersExtra}</p> : null}
                        </div>
                    </article>
            })}
        </section>
    )
}

export default Shirts
