import React from "react";
import "./SoftwareSkill.css";
import { skillsSection } from "../../portfolio";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills,i) => {            
            return (
              
              <li key={i} className="software-skill-inline" name={skills.skillName}>
                <FontAwesomeIcon title={skills.skillName} className="fa-hover-color" icon={skills.fontAwesomeClassname}/>              
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
