import React from "react";
import PropTypes from "prop-types";

export const Card = props => {
	return (
		<div className="col mb-3">
			<div className="card text-center h-100">
				<img
					className="img-fluid"
					src={props.imageUrl}
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.description}</p>
				</div>
				<div className="card-footer">
					<a href={props.buttonUrl} className="btn btn-primary">
						Find Out More!
					</a>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	imageUrl: PropTypes.string,
	description: PropTypes.string,
	buttonUrl: PropTypes.string
};
