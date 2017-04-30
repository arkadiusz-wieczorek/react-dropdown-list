import React, { Component } from "react";
import ReactDOM from "react-dom";
import Dropdown from "./components/dropdown.jsx";

class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			disabled: false,
			filledOff: false,
			active: true,
		};
	}
	render() {
		return (
			<div>
				{/* <label>
					<input
						type="radio"
						value="disabled"
						checked={this.state.disabled}
						onChange={this.handleOptionChange}
					/>
					Wyłączone
				</label>
				<label>
					<input
						type="radio"
						value="filledOff"
						checked={this.state.filledOff}
						onChange={this.handleOptionChange}
					/>
					Wyłączone wypełnione
				</label>
				<label>
					<input
						type="radio"
						value="active"
						checked={this.state.active}
						onChange={this.handleOptionChange}
					/>
					Aktywne
				</label> */}
				<div className="element-container">
					{React.createElement(Dropdown, {
						label: "Miesiąc",
						warningText: "Wybierz miesiąc",
						disabled: this.state.disabled,
						filledOff: this.state.filledOff,
						active: this.state.active,
						options: [
							{ name: "Styczeń", value: "january" },
							{ name: "Luty", value: "february" },
							{ name: "Marzec", value: "march" },
							{ name: "Kwiecień", value: "april" },
							{ name: "Maj", value: "may" },
							{ name: "Czerwiec", value: "june" },
							{ name: "Lipiec", value: "july" },
							{ name: "Sierpień", value: "august" },
							{ name: "Wrzesień", value: "september" },
							{ name: "Październik", value: "october" },
							{ name: "Listopad", value: "november" },
							{ name: "Grudzień", value: "december" },
						],
					})}
				</div>

			</div>
		);
	}
}

ReactDOM.render(<Index />, document.querySelector("#container"));
