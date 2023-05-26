import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = () => {
	return (
		<div className="all-projects-container">
			{INFO.projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={project.logo}
						title={project.title}
						image={project.image}
						description={project.description}
						linkTextone={project.linkTextone}
						linkTexttwo={project.linkTexttwo}
						linkone={project.linkone}
						linktwo={project.linktwo}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
