import React from "react";

const DisabledComponent = props => {
	let value_name = null;
	if (props.currentValue !== undefined)
		value_name = props.currentValue.option.name;
	return (
		<ul className="select-container">
			<li className="single">{value_name}</li>
		</ul>
	);
};

export default DisabledComponent;
