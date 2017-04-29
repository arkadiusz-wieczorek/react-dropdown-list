import React from "react";

const Label = props => (
	<span
		className={
			props.currentValue !== undefined || props.listVisible
				? "label active"
				: "label"
		}
	>
		{props.name}
	</span>
);

export default Label;
