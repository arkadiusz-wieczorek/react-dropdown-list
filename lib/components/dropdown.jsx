import React, { Component } from "react";
import Label from "./helpers/label.jsx";
import OneOption from "./helpers/one-option.jsx";
import WarningMessage from "./helpers/warning-message.jsx";
import onClickOutside from "react-onclickoutside";

class Dropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			listVisible: false,
			currentValue: undefined,
			incorrectValue: false,
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
			incorrectValue: false,
		});
	}

	handleClickOutside() {
		if (this.state.listVisible && this.state.currentValue === undefined) {
			this.setState({
				listVisible: false,
				incorrectValue: true,
			});
		} else {
			this.setState({
				listVisible: false,
			});
		}
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
							<OneOption
								currentValue={this.state.currentValue}
								incorrectValue={this.state.incorrectValue}
							/>
						</ul>}
				{this.state.incorrectValue && !this.state.listVisible
					? <WarningMessage text={this.props.warningText} />
					: null}
			</div>
		);
	}
}

export default onClickOutside(Dropdown);
