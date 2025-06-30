import React, { useState } from "react";
//import "./Experience.css";

const experienceData = [
  {
    role: "Application Engineer",
    company: "Tyler Technologies",
    dates: "2022 – Present",
    details: [
      "As an Application Engineer at Tyler Technologies, I develop and support custom web-based applications for public sector clients. I work across the full stack using technologies like Java, JavaScript, and SQL to build scalable, secure solutions that streamline government operations. My responsibilities include troubleshooting complex issues, collaborating with cross-functional teams, and delivering high-quality software that meets mission-critical needs.",
    ],
  },
];

const Experience = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCard = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="experience-section">
      <h2 className="section-title">💼 Experience</h2>
      {experienceData.map((job, i) => (
        <div
          key={i}
          className={`exp-card ${openIndex === i ? "open" : ""}`}
          onClick={() => toggleCard(i)}
        >
          <div className="exp-header">
            <h4>{job.role} @ {job.company}</h4>
            <span>{job.dates}</span>
          </div>
          {openIndex === i && (
            <ul className="exp-details">
              {job.details.map((line, j) => (
                <li key={j}>{line}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Experience;
