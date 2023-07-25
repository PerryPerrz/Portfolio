import React from 'react'

function AboutBox() {
  return (
    <div className="about-boxes grid">
        <div className="about-box">
            <i className="about-icon icon-fire"></i>

            <div>
                <h3 className="about-title">54</h3>
                <span className="about-subtitle">Projects completed</span>
            </div>
        </div>

        <div className="about-box">
            <i className="about-icon icon-cup"></i>

            <div>
                <h3 className="about-title">6942</h3>
                <span className="about-subtitle">Cup of coffee</span>
            </div>
        </div>

        <div className="about-box">
            <i className="about-icon icon-people"></i>

            <div>
                <h3 className="about-title">1</h3>
                <span className="about-subtitle">Satisfied client(s)</span>
            </div>
        </div>

        <div className="about-box">
            <i className="about-icon icon-badge"></i>

            <div>
                <h3 className="about-title">5</h3>
                <span className="about-subtitle">University years</span>
            </div>
        </div>

    </div>
  )
}

export default AboutBox