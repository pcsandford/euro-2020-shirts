import React from 'react'
import './assets/style.css'
import Header from './Header.js'
import Shirts from './Shirts.js'
import Footer from './Footer.js'
import data from './assets/data'


const App = () => {

    // const [selectedTeam, setSelectedTeam] = useState(16);

    // const setSelected = (e) => {

    //     setSelectedTeam(e.target.value);
    
    //     }

    return (
        <main>
            <section className="wrapper">
                <Header title="euro 2020" subtitle="Team shirts of all 20 competing nations."/>
                <Shirts teams={data}/>
            </section>
                <Footer footerText="Built with ⚽️ ❤️ by"/>
        </main>
    )
}

export default App
