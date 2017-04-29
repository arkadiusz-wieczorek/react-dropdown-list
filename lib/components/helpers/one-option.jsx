import React, { Component } from "react";

const OneOption = props => {
	let classNameValue = "single";
	if (props.currentValue !== undefined) classNameValue = "single chosen";
	if (props.incorrectValue) classNameValue = "single incorrect";
	return (
		<li className={classNameValue}>
			{props.currentValue !== undefined
				? props.currentValue.option.name
				: null}
		</li>
	);
};

export default OneOption;
