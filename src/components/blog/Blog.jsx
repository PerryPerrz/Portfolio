import React from 'react';

import './Blog.css';

import Image1 from "../../assets/blog-1.svg"
import Image2 from "../../assets/blog-2.svg"
import Image3 from "../../assets/blog-3.svg"

function Blog() {
    return (
        <section className="blog container section" id="blog">
            <h2 className="section-title">Latest Posts</h2>

            <div className="blog-container grid">
                <div className="blog-card">
                    <div className="blog-thumb">
                        <a href="#"> <span className="blog-category">Reviews</span></a>
                        <a href="#"> <img src={Image1} alt="" className="blog-img" /></a>
                    </div>

                    <div className="blog-details">
                        <h3 className="blog-title">5 Best App Development Tools</h3>
                        <div className="blog-meta">
                            <span>09 February, 2023</span>
                            <span className="blog-dot">.</span>
                            <span>Perry</span>
                        </div>
                    </div>
                </div>

                <div className="blog-card">
                    <div className="blog-thumb">
                        <a href="#"> <span className="blog-category">Tutorial</span></a>
                        <a href="#"> <img src={Image2} alt="" className="blog-img" /></a>
                    </div>

                    <div className="blog-details">
                        <h3 className="blog-title">Common React issues inside the new projects</h3>
                        <div className="blog-meta">
                            <span>09 February, 2023</span>
                            <span className="blog-dot">.</span>
                            <span>Perry</span>
                        </div>
                    </div>
                </div>

                <div className="blog-card">
                    <div className="blog-thumb">
                        <a href="#"> <span className="blog-category">Business</span></a>
                        <a href="#"> <img src={Image3} alt="" className="blog-img" /></a>
                    </div>

                    <div className="blog-details">
                        <h3 className="blog-title">3 things to know about the start-up business</h3>
                        <div className="blog-meta">
                            <span>09 February, 2023</span>
                            <span className="blog-dot">.</span>
                            <span>Perry</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog