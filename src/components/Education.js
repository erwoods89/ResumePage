import React from "react";

const education = [
  {
    school: "Towson University",
    degree: "B.S. in Computer Science",
    year: "2021",
  },
  {
    school: "Anne Arundel Community College",
    degree: "A.S. in General Studies",
    year: "2019",
  },
];

const Education = () => (
  <section className="education-section section">
    <h3 className="section-title">📚 Education</h3>
    <div className="education-grid">
      {education.map((item, i) => (
        <div key={i} className="edu-card">
          <h4>{item.school}</h4>
          <p>{item.degree}</p>
          <span>{item.year}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Education;

