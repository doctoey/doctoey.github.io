import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		document.title = `Projects | ${INFO.main.title}`;
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							My Portfolio Projects
						</div>

						<div className="subtitle projects-subtitle">
						Welcome to my portfolio! Here, you can explore some of projects I have worked on. 
						Take a look below to discover a collection of my featured projects, showcasing my skills and expertise in web development. 
						Each project represents a unique challenge and demonstrates my commitment to delivering high-quality solutions. 
						Feel free to explore the live demos and delve into the source code behind these projects.
						</div>

						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
