import React, {useState} from 'react'
import '../assets/style.css'
import Header from './Header.js'
import Selector from './Selector.js'
import Shirts from './Shirts.js'
import Footer from './Footer.js'
import data from '../assets/data'


const App = () => {

    const [selectedTeam, setSelectedTeam] = useState("All");

    const setSelected = (e) => {

        console.log(e.target.value);

        setSelectedTeam(e.target.value);
    
        }

    return (
        <main>
            <section className="wrapper">
                <div className="header-collection">
                    <Header title="euro 2020" subtitle="Team shirts of all 20 competing nations."/>
                    <Selector teams={data} setSelectedTeam={setSelected}/>
                </div>
                <Shirts teams={data} selectedTeam={selectedTeam}/>
            </section>
                <Footer footerText="Built with ⚽️ ❤️ by"/>
        </main>
    )
}

export default App
