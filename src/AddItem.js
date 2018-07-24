import React, { Component } from 'react';
import './AddItem.css';

class AddItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
		}
		this.addItem = this.addItem.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	addItem() {
		this.props.addItem(this.state.value);
		this.setState({value: ''});
	}

	handleChange(e) {
		this.setState({value: e.target.value});
	}

	render() {
		return (
			<div className="AddItem">
				<input
					type="text"
					onChange={this.handleChange}
					value={this.state.value}
				/>
				&nbsp;&nbsp;
				<button onClick={this.addItem}>Add Item</button>
			</div>
		);
	}
}

export default AddItem;