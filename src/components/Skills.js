import React, { useContext } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { ThemeContext } from "../context/ThemeContext";
import "react-circular-progressbar/dist/styles.css";

const skillData = [
  { name: "JavaScript", level: 90, color: "#f0db4f" },
  { name: "React", level: 85, color: "#61dafb" },
  { name: "Node.js", level: 80, color: "#68a063" },
  { name: "SQL", level: 75, color: "#00758f" },
  { name: "Java", level: 95, color: "#800080" },
];

const Skills = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section className="skills-section section">
      <h3 className="section-title">🛠 Skills</h3>
      <div className="skills-grid">
        {skillData.map((skill, i) => (
          <div key={i} className="skill-circle">
            <CircularProgressbar
              value={skill.level}
              text={skill.name}
              styles={buildStyles({
                textSize: "14px",
                pathColor: skill.color,
                textColor: darkMode ? "#f5f5f5" : "#222",
                trailColor: darkMode ? "#333" : "#eee",
              })}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

