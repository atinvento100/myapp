import React from "react";

function Projects (){
    return(
        <div>
            <section className="resume-section" id="projects">
                <div className="resume-section-content">
                    <h2 className="mb-5">Projects</h2>
                    <ul className="fa-ul mb-0">
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            <h4>Smart Grace Mark Calculator</h4>
                            <p>An interactive and user firenldy website which helps class adivsers add grace mark and allocate maximum grade possible for thier students.</p>
                        </li>
                        <br/>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            <h4>Painting Hire Business Management System</h4>
                            <p>Provides an interactive plateform for artists to display their paintings and for customers to hire paintings with ease.</p>
                        </li>
                        <br/>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            <h4>Unbeatable Tic-Tac-Toe powered</h4>
                            <p>A fun AI powered unbeatable Tic-Tac-Toe game consisting of various difficulty levels and two types of boards(3x3 and 4x4)</p>
                            <b><a href="http://marscolepcdecry.s3-website.ap-south-1.amazonaws.com/">Click here to give it a try..</a></b>
                        </li>
                        <br/>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            <h4>AI for COVID-19 outbreak</h4>
                            <p>To analyze, visualize, predict and forecast COVID-19 cases.</p>
                        </li>
                        <br/>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            <h4>Prediction of 2nd hand car prices</h4>
                            <p>A Machine learning model for efficient prediction of 2nd hand car prices.</p>
                        </li>
                        
                        
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Projects;