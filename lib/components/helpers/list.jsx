import React, { Component } from "react";

class List extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ul className="select-container">
				{this.props.options.map((option, i) => {
					return (
						<li
							className={
								this.props.currentValue !== undefined &&
									this.props.currentValue.key === i
									? "option selected"
									: "option"
							}
							key={i}
							onClick={this.props.selectValue.bind(this, {
								option,
								key: i,
							})}
						>
							{option.name}
						</li>
					);
				})}
			</ul>
		);
	}
}
export default List;
