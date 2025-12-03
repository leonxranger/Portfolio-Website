import { motion } from "motion/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./styles/indicard.css";

// Project data structure
const projects = [
  {
    title: "Rainwater Harvesting System",
    description: "Developed a comprehensive frontend solution to address water conservation challenges in urban areas.",
    githubUrl: "https://github.com/yourusername/rainwater-harvesting",
    liveUrl: "https://rainwater-harvesting-demo.com",
    technologies: ["React", "Tailwind CSS", "Chart.js"]
  },
  {
    title: "To-Do App with Firebase",
    description: "Built a full-featured task management application with real-time authentication and data synchronization.",
    githubUrl: "https://github.com/yourusername/todo-app",
    liveUrl: "https://todo-app-demo.com",
    technologies: ["React", "Firebase", "Tailwind CSS"]
  },
  {
    title: "Full-Stack E-commerce Platform",
    description: "Created a complete online marketplace with product listings, user authentication, and payment integration.",
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.com",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"]
  }
];

// Reusable project card component
const ProjectCard = ({ project, index }) => (
  <motion.li 
    className="flex flex-col gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
  >
    <div className="flex flex-col gap-2">
      <h3 className="font-GeneralSans-Medium text-lg text-white">
        {project.title}
      </h3>
      <p className="font-GeneralSans-Regular text-sm text-gray-300 leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mt-2">
        {project.technologies.map((tech, techIndex) => (
          <span 
            key={techIndex}
            className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-md font-GeneralSans-Regular"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
    
    <div className="flex gap-3 mt-3">
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors duration-200 font-GeneralSans-Regular text-sm"
        aria-label={`View ${project.title} source code on GitHub`}
      >
        <FaGithub className="w-4 h-4" />
        Code
      </a>
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-3 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-md transition-colors duration-200 font-GeneralSans-Regular text-sm"
        aria-label={`View live demo of ${project.title}`}
      >
        <FaExternalLinkAlt className="w-4 h-4" />
        Live Demo
      </a>
    </div>
  </motion.li>
);

// Main ReactJS component
export const ReactJS = () => {
  return (
    <motion.div
      id="indicard"
      className="flex flex-col h-full w-full shadow-xl bg-[#303030] backdrop-blur-sm rounded-lg text-white overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Header Section */}
      <header className="flex h-[20%] items-center w-full bg-white p-4">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-blue-50 rounded-lg">
            <svg 
              className="h-8 w-8 text-blue-600" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              aria-label="React logo"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              <path d="M12 6c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"/>
            </svg>
          </div>
          <h1 className="text-black font-GeneralSans-Medium text-xl">
            My React Projects
          </h1>
        </div>
      </header>

      {/* Content Section */}
      <main className="flex-1 p-5 overflow-y-auto">
        <div className="mb-4">
          <p className="font-GeneralSans-Regular text-sm text-gray-300 leading-relaxed">
            Here are some of my notable React projects that showcase my skills in modern web development, 
            state management, and user experience design.
          </p>
        </div>
        
        <ul className="flex flex-col gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </ul>
      </main>

      {/* Footer */}
      <footer className="p-4 border-t border-gray-700/50 bg-gray-800/30">
        <p className="font-GeneralSans-Regular text-xs text-gray-400 text-center">
          Built with React, Tailwind CSS, and modern web technologies
        </p>
      </footer>
    </motion.div>
  );
};