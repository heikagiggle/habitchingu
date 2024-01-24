import React from 'react'
import './GetStarted.css'

const GetStarted = () => {
  return (
    <section className="g-wrapper">
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className="primaryText">Get Started with habitchingu</span>
                <span className="secondaryText">Susbcribe for new habit updates 
                <br/>
                Pick a good new habit soon
                </span>
                <button className="button">
                    <a href="mailto:okaforemmanuellaoluchi@gmail.com">Get Started</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default GetStarted
