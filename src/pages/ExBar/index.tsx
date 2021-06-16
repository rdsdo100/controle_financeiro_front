import React from "react";
import "./style.css";

const ExBar: React.FC = () => {
  return (
    <>
      <header className="experience-bar">
        <span>0 xp </span>
        <div>
          <div style={{ width: "60%" }}></div>
          <span className="current-exprerience" style={{ left: "60%" }}>
            300px
          </span>
        </div>
        <span> 600 xp</span>
      </header>
    </>
  );
};
export default ExBar;

//https://mariosouto.com/inputs-materializados-com-css/
