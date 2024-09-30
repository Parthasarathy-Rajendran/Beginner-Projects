// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import './App.css'

const Home = () => {
  const projects = [
    { title: "React Bin2Dec", description: "A basic to-do list app built with React.", path: "/Bin2Dec" },
    { title: "Calculator", description: "A simple calculator built using React.", path: "/calculator" },
    { title: "Weather App", description: "Displays weather information using an external API.", path: "/weather-app" }
  ];

  return (
    <div className="home-page">
      <h1>Beginner Projects</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="panel">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {/* Link to the project's path */}
            <Link to={project.path}>Go to {project.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
