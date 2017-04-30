import React, { Component } from "react";

const Label = props => (
	<div
		onClick={props.showList}
		className={
			props.currentValue !== undefined || props.listVisible
				? "label active"
				: "label"
		}
	>
		{props.name}
	</div>
);

export default Label;
