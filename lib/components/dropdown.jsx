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
			incorrectValue: this.props.incorrectValue,
		};
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.incorrectValue !== this.state.incorrectValue) {
			this.setState({ incorrectValue: nextProps.incorrectValue });
		}
	}

	showList() {
		return () => {
			if (!this.props.disabled)
				this.setState({ listVisible: !this.state.listVisible });
		};
	}

	selectValue(option) {
		this.setState({
			listVisible: !this.state.listVisible,
			incorrectValue: false,
		});
		this.props.selectValue(option);
	}

	handleClickOutside() {
		if (this.state.listVisible && this.props.value === undefined) {
			this.setState({ incorrectValue: true });
		}
		this.setState({ listVisible: false });
	}

	render() {
		return (
			<div className="container">
				<Label
					name={this.props.label}
					showList={this.showList()}
					listVisible={this.state.listVisible}
					currentValue={this.props.value}
					disabled={this.props.disabled}
				/>
				{!this.props.disabled
					? <div className="dropdown-list">

							{this.state.listVisible
								? <List
										options={this.props.options}
										currentValue={this.props.value}
										selectValue={this.selectValue.bind(this)}
									/>
								: <ul
										className="select-container"
										onClick={this.showList()}
									>
										<SingleOption
											currentValue={this.props.value}
											incorrectValue={
												this.state.incorrectValue
											}
										/>
									</ul>}
							{this.state.incorrectValue && !this.state.listVisible
								? <WarningMessage text={this.props.warningText} />
								: null}
						</div>
					: <DisabledComponent currentValue={this.props.value} />}
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
