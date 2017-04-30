import React, { Component } from "react";
import PropTypes from "prop-types";
import Label from "./helpers/label.jsx";
import SingleOption from "./helpers/single-option.jsx";
import List from "./helpers/list.jsx";
import WarningMessage from "./helpers/warning-message.jsx";
import DisabledComponent from "./helpers/disabled-component.jsx";
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
			this.setState({ incorrectValue: true });
		}
		this.setState({ listVisible: false });
	}

	render() {
		return (
			<div>
				<Label
					name={this.props.label}
					showList={this.showList()}
					listVisible={this.state.listVisible}
					currentValue={this.state.currentValue}
				/>
				{!this.props.disabled
					? <div className="dropdown-list">

							{this.state.listVisible
								? <List
										options={this.props.options}
										currentValue={this.state.currentValue}
										selectValue={this.selectValue.bind(this)}
									/>
								: <ul
										className="select-container"
										onClick={this.showList()}
									>
										<SingleOption
											currentValue={this.state.currentValue}
											incorrectValue={
												this.state.incorrectValue
											}
										/>
									</ul>}
							{this.state.incorrectValue && !this.state.listVisible
								? <WarningMessage text={this.props.warningText} />
								: null}
						</div>
					: <DisabledComponent
							currentValue={this.state.currentValue}
						/>}
			</div>
		);
	}
}

export default onClickOutside(Dropdown);

Dropdown.propTypes = {
	label: PropTypes.string,
	warningText: PropTypes.string,
	options: PropTypes.array,
};
