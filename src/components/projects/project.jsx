import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, linkTextone, linkTexttwo, linkone, linktwo, image } = props;

	return (
		<React.Fragment>
			<div className="project">
				{/* <Link to={link}> */}
					<div className="project-container">
						<div className="project-logo">
							<img src={logo} alt="logo" />
						</div>
						<div className="project-title">{title}</div>
						<div className="project-image">
						{/* eslint-disable-next-line  */}
							<img src={image} alt="image" />
						</div>
						<div className="project-description">{description}</div>
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>

							<Link to={linkone}>
							<div className="project-link-text">{linkTextone}</div>
							</Link>
							<Link to={linktwo}>
							<div className="project-link-text">{linkTexttwo}</div>
							</Link>
						</div>
					</div>
				{/* </Link> */}
			</div>
		</React.Fragment>
	);
};

export default Project;
