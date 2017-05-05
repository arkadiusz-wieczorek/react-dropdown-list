import React from "react";

const SingleOption = props => {
	let classNameValue = "single";
	if (props.currentValue !== undefined) classNameValue = "single chosen";
	if (props.incorrectValue) classNameValue = "single incorrect";
	return (
		<ul className={props.className} onClick={props.showList}>
			<li className={classNameValue}>
				<div>
					{props.currentValue !== undefined
						? props.currentValue.option.name
						: null}
				</div>
				<div className="arrow" />
			</li>
		</ul>
	);
};

export default SingleOption;
