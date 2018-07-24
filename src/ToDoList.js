import React, {Component} from 'react';
import './ToDoList.css';
import AddItem from './AddItem.js';
import ListItem from './ListItem.js';

class ToDoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: ['practice React', 'do laundry', 'make lunch'],
		};
		this.renderList = this.renderList.bind(this);
		this.addItem = this.addItem.bind(this);
		this.removeItem = this.removeItem.bind(this);
	}

	renderList() {
		return this.state.todos.map(item => {
			return (
				<ListItem 
					key={item} 
					item={item}
					removeItem={this.removeItem}
				/>
			);
		});
	}

	addItem(item) {
		if (this.state.todos.includes(item)) return;
		this.setState({todos: [...this.state.todos, item]});
	}

	removeItem(item) {
		const filtered = this.state.todos.filter(toDo => toDo !== item);
		this.setState({todos: filtered});
	}

	render() {
		return (
			<div className="ToDoList">
				<h1>My To Do List</h1>
				<AddItem addItem={this.addItem}/>
				{this.renderList()}
			</div>
		);
	}
}

export default ToDoList;