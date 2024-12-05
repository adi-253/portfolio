import React from "react";

const Navigation = () => {
  // Function to handle scrolling
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <a className="nav-link" onClick={() => scrollToSection("home")}>Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" onClick={() => scrollToSection("about")}>About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" onClick={() => scrollToSection("projects")}>Projects</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" onClick={() => scrollToSection("contact")}>Contact</a>
      </li>
    </ul>
  );
};

export default Navigation;
