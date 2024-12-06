import React from "react";
import { motion } from "framer-motion";

const Navigation = () => {
  // Function to handle scrolling
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation variants for the list items
  const listVariants = {
    hidden: { opacity: 0, y: -20 },  // Initial position (coming from above from -20px)
    visible: { opacity: 1, y: 0, transition: { duration: 0.5} }, // When it enters
  };

  // Animation variants for the entire navigation (staggered children)
  const navVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <motion.ul
      className=" nav  navbar   justify-content-end"  // nav is my given
      initial="hidden"
      animate="visible"
      variants={navVariants} // Apply staggered animations for the list items
    >
      <motion.li
        className="nav-item"
        variants={listVariants} // Apply animation variants to each list item
        whileHover={{ scale: 1.1 }} // Hover effect
        whileTap={{ scale: 0.9 }} // Tap effect
        transition={{ type: "spring", stiffness: 400, damping: 10 }} // Apply transition for hover/tap
      >
        <div className="nav-link" onClick={() => scrollToSection("home")}>
          Home
        </div>
      </motion.li>

      <motion.li
        className="nav-item"
        variants={listVariants} 
        whileHover={{ scale: 1.1 }} 
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <a className="nav-link" onClick={() => scrollToSection("about")}>
          About
        </a>
      </motion.li>

      <motion.li
        className="nav-item"
        variants={listVariants} 
        whileHover={{ scale: 1.1 }} 
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <a className="nav-link" onClick={() => scrollToSection("projects")}>
          Projects
        </a>
      </motion.li>

      <motion.li
        className="nav-item"
        variants={listVariants} 
        whileHover={{ scale: 1.1 }} 
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <a className="nav-link" onClick={() => scrollToSection("contact")}>
          Contact
        </a>
      </motion.li>
    </motion.ul>
  );
};

export default Navigation;
