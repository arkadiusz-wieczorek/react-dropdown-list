import React, { Component } from "react";
import ReactDOM from "react-dom";
import Dropdown from "./components/dropdown.jsx";

class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="element-container">
				{React.createElement(Dropdown, {
					label: "Miesiąc",
					warningText: "Wybierz miesiąc",
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
		);
	}
}

ReactDOM.render(<Index />, document.querySelector("#container"));
