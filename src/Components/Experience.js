import React from "react";

function Experience(){
    return(
        <div>
            <section className="resume-section" id="experience">
                <div className="resume-section-content">
                    <h2 className="mb-5">Internship</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Online Machine Learning Internship</h3>
                            <div className="subheading mb-3">Organized by Verzeo in collaboration with IIT Roorkee</div>
                            <p><strong>Tools and Techniques:</strong> Python<br/>
                            <strong>Outcome:</strong> Understanding the statistical approaches and models for data analysis and machine learning</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">01/12/19 to 31/01/20</span></div>
                    </div>
                    
                </div>
            </section>
        </div>
    )
}

export default Experience;