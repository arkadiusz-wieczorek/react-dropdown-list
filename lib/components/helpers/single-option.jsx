import React from "react";

const SingleOption = props => {
	let classNameValue = "single";
	if (props.currentValue !== undefined) classNameValue = "single chosen";
	if (props.incorrectValue) classNameValue = "single incorrect";
	return (
		<li className={classNameValue}>
			{props.currentValue !== undefined
				? props.currentValue.option.name
				: <div> </div>}
			<div className="arrow" />
		</li>
	);
};

export default SingleOption;
