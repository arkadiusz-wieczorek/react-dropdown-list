import React, { Component } from "react";
import ReactDOM from "react-dom";
import Dropdown from "./components/dropdown.jsx";

class SomeTestComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			disabledDropdown: false,
			valueFromDropdown: undefined,
		};
	}
	turnOffDropdown() {
		return () => {
			this.setState({ disabledDropdown: !this.state.disabledDropdown });
		};
	}
	handleChange(option) {
		this.setState({ valueFromDropdown: option });
	}

	render() {
		return (
			<div>
				<div className="nav">
					<button onClick={this.turnOffDropdown()}>
						{this.state.disabledDropdown
							? "Włącz komponent"
							: "Wyłącz komponent"}
					</button>
				</div>
				<div className="element-container">
					{React.createElement(Dropdown, {
						label: "Miesiąc",
						warningText: "Wybierz miesiąc",
						disabled: this.state.disabledDropdown,
						value: this.state.valueFromDropdown,
						selectValue: this.handleChange.bind(this),
						options: [
							{ name: "Styczeń", value: "january" },
							{ name: "Luty", value: "february" },
							{ name: "Marzec", value: "march" },
							{ name: "Kwiecień", value: "april" },
							// { name: "Maj", value: "may" },
							// { name: "Czerwiec", value: "june" },
							// { name: "Lipiec", value: "july" },
							// { name: "Sierpień", value: "august" },
							// { name: "Wrzesień", value: "september" },
							// { name: "Październik", value: "october" },
							// { name: "Listopad", value: "november" },
							// { name: "Grudzień", value: "december" },
						],
					})}
				</div>
			</div>
		);
	}
}

ReactDOM.render(<SomeTestComponent />, document.querySelector("#container"));
