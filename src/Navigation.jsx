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
    <ul className="navbar nav justify-content-end">  {/* navbar is the class name i gave others are the bootstrap one */}
      <li className="nav-item">
      <div className="nav-link" onClick={() => scrollToSection("home")}>Home</div>  {/* just showing that we can use div instead of a tag */}

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
