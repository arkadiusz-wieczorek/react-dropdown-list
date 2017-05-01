import React from "react";

const Label = props => {
	let class_name = "label";
	if (props.currentValue !== undefined || props.listVisible)
		class_name = "label active";
	if (props.disabled) class_name = "label disabled";
	if (props.disabled && props.currentValue !== undefined)
		class_name = "label active disabled";

	return (
		<div onClick={props.showList} className={class_name}>{props.name}</div>
	);
};

export default Label;
