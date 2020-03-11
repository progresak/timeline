import React from 'react';
import bali from '../images/bali.jpg';
function Timeline() {
    return (
        <section id="cd-timeline" className="cd-container">

            <div className="cd-timeline-block">
                <div className="cd-timeline-img cd-picture">
                </div>


                <div className="cd-timeline-content">
                    <h2>Bali indonesia</h2>
                    <br/>
                    <img alt="" className={"background"} src={bali} />
                    <span className="cd-date">January 2024</span>
                </div>

            </div>

            <div className="cd-timeline-block">
                <div className="cd-timeline-img cd-picture">
                </div>


                <div className="cd-timeline-content">
                    <h2>Bali čevabčiči</h2>
                    <br/>
                    <img alt="" className={"background"} src={bali} />
                    <span className="cd-date">Jan 24</span>
                </div>

            </div>

            <div className="cd-timeline-block">
                <div className="cd-timeline-img cd-picture">
                </div>


                <div className="cd-timeline-content">
                    <h2>Bali indonesia</h2>
                    <br/>
                    <img alt="" className={"background"} src={bali} />
                    <span className="cd-date">Jan 24</span>
                </div>

            </div>

            <div className="cd-timeline-block">
                <div className="cd-timeline-img cd-picture">
                </div>


                <div className="cd-timeline-content">
                    <h2>Bali indonesia</h2>
                    <br/>
                    <img alt="" className={"background"} src={bali} />
                    <span className="cd-date">Jan 24</span>
                </div>

            </div>


        </section>
    );
}

export default Timeline;
