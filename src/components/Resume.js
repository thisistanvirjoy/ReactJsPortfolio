import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume">
      <div className="resume__header">
        <h1>John Doe</h1>
        <h2>Full Stack Developer</h2>
      </div>
      <div className="resume__section">
        <h3>Summary</h3>
        <p>
          A highly skilled full stack developer with 5 years of experience in building web applications using React, Node.js, and other modern technologies. Able to design and develop scalable and maintainable software solutions that meet business requirements.
        </p>
      </div>
      <div className="resume__section">
        <h3>Skills</h3>
        <ul className="resume__skills">
          <li>React</li>
          <li>Node.js</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>SQL</li>
          <li>MongoDB</li>
          <li>AWS</li>
        </ul>
      </div>
      <div className="resume__section">
        <h3>Experience</h3>
        <div className="resume__subsection">
          <h4>Full Stack Developer at Acme Corp</h4>
          <p className="resume__subsection__date">Jan 2020 - Present</p>
          <ul>
            <li>Developed and maintained web applications using React, Node.js, and MongoDB</li>
            <li>Implemented RESTful APIs to communicate with back-end systems</li>
            <li>Integrated third-party services such as payment gateways and social media platforms</li>
            <li>Deployed and managed applications on AWS</li>
          </ul>
        </div>
        <div className="resume__subsection">
          <h4>Front-End Developer at XYZ Inc</h4>
          <p className="resume__subsection__date">Mar 2018 - Dec 2019</p>
          <ul>
            <li>Designed and developed user interfaces using React, HTML, and CSS</li>
            <li>Collaborated with designers and back-end developers to deliver high-quality products</li>
            <li>Implemented responsive design to ensure compatibility with various devices</li>
            <li>Optimized website performance by reducing page load time and improving code efficiency</li>
          </ul>
        </div>
      </div>
      <div className="resume__section">
        <h3>Education</h3>
        <div className="resume__subsection">
          <h4>Bachelor's degree in Computer Science</h4>
          <p className="resume__subsection__date">Sep 2014 - Jun 2018</p>
          <p>University of California, Los Angeles</p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
