import React from 'react'

const Footer = ({footerText}) => {
    return (
        <footer>
            <p>{footerText} 
                <a href="https://www.twitter.com/cammeroncodes"> Peter Cameron </a>
                &copy; {new Date().getFullYear()}
            </p>
        </footer>
    )
}

export default Footer
