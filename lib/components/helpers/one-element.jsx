import React from "react";

const OneElement = props => (
	<li
		className={
			props.currentValue !== undefined ? "single chosen" : "single"
		}
	>
		{props.currentValue !== undefined
			? props.currentValue.option.name
			: null}

	</li>
);

export default OneElement;
