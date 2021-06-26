import React from "react";
import Awards from "./Components/Awards";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Interest from "./Components/Interest";
import NavBar from "./Components/Navbar";
import Pagecont from "./Components/PageContent";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="container-fluid p-0">
            <Pagecont/>
            <hr className="m-0" />
            <Skills/>
            <hr className="m-0" />
            <Awards/>
            <hr className="m-0" />
            <Projects/>
            <hr className="m-0" />
            <Experience />
            <hr className="m-0" />
            <Education/>
            <hr className="m-0" />
            <Interest/>
            

      </div>
      
    </div>
  );
}

export default App;
