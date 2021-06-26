import React from "react";
import Experience from "./Experience";

function Education(){
    return(
        <div>
            <section className="resume-section" id="education">
                <div className="resume-section-content">
                    <h2 className="mb-5">Resume</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Find my Resume <i><a href="https://drive.google.com/file/d/1woDv51_83oa05O-j8yFkAwmimaCzOtXJ/view?usp=sharing">here</a></i></h3>

                            
                        </div>
                        
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Find my Video Resume <i><a href="https://drive.google.com/file/d/1EGm5qsljVftQ6EGkQGUPrJKDeZaK_NR_/view?usp=sharing">here</a></i></h3>

                            
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Education;