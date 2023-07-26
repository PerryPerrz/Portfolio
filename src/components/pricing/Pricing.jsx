import React from 'react';

import './Pricing.css';

import Image1 from '../../assets/price-1.svg';
import Image2 from '../../assets/price-2.svg';
import Image3 from '../../assets/price-3.svg';

function Pricing() {
    return (
        <section className="pricing container section" id="pricing">
            <h2 className="section-title">Pricing Plans</h2>

            <div className="pricing-container grid">
                <div className="pricing-item">
                    <img src={Image1} alt="" className="pricing-img" />
                    <h3 className="pricing-plan">Basic</h3>
                    <p className="pricing-title">A simple option but powerful</p>
                    <p className="pricing-support">Email support</p>
                    <h3 className="price">
                        <em>$</em> 9 <span>Month</span>
                    </h3>
                    <a href="" className="btn">Get Started</a>
                </div>

                <div className="pricing-item best">
                    <span className="badge">Recommended</span>
                    <img src={Image2} alt="" className="pricing-img" />
                    <h3 className="pricing-plan">Premium</h3>
                    <p className="pricing-title">Unlimited product</p>
                    <p className="pricing-support">Mon-Fri support</p>
                    <h3 className="price">
                        <em>$</em> 15 <span>Month</span>
                    </h3>
                    <a href="" className="btn">Get Started</a>
                </div>

                <div className="pricing-item">
                    <img src={Image3} alt="" className="pricing-img" />
                    <h3 className="pricing-plan">Ultimate</h3>
                    <p className="pricing-title">A wise option for large companies</p>
                    <p className="pricing-support">24/7 support</p>
                    <h3 className="price">
                        <em>$</em> 19 <span>Month</span>
                    </h3>
                    <a href="" className="btn">Get Started</a>
                </div>
            </div>
        </section>
    )
}

export default Pricing