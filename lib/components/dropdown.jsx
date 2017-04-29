import React from "react";
import Label from "./helpers/label.jsx";
import OneElement from "./helpers/one-element.jsx";
import WarningMessage from "./helpers/warning-message.jsx";

class Dropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			listVisible: false,
			currentValue: undefined,
		};
	}

	showList() {
		return () => {
			this.setState({ listVisible: !this.state.listVisible });
		};
	}

	selectValue(option) {
		this.setState({
			listVisible: !this.state.listVisible,
			currentValue: option,
		});
	}

	render() {
		return (
			<div className="dropdown-list">
				<Label
					name={this.props.label}
					listVisible={this.state.listVisible}
					currentValue={this.state.currentValue}
				/>

				{this.state.listVisible
					? <ul className="container">
							{this.props.options.map((option, i) => {
								return (
									<li
										className={
											this.state.currentValue !==
												undefined &&
												this.state.currentValue.key === i
												? "option selected"
												: "option"
										}
										key={i}
										onClick={this.selectValue.bind(this, {
											option,
											key: i,
										})}
									>
										{option.name}
									</li>
								);
							})}
						</ul>
					: <ul className="container" onClick={this.showList()}>
							<OneElement currentValue={this.state.currentValue} />
						</ul>}
				<WarningMessage text={this.props.warningText} />
			</div>
		);
	}
}

export default Dropdown;
