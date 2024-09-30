// src/components/ProjectPanel.js
import React from "react";

const ProjectPanel = ({ title, description }) => {
  return (
    <div className="panel">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProjectPanel;
