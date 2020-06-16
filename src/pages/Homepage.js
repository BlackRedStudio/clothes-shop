import React from 'react'
import '../styles/Homepage.scss'
import '../components/Directory'
import Directory from '../components/Directory'

const Homepage = () => {
    return (
        <div className="homepage">
            <div className="directory-menu">
                <Directory />
            </div>
        </div>
    )
}

export default Homepage
