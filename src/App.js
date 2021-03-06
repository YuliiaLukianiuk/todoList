import React from 'react';
import TodoItem from "./TodoItem";
import todosData from "./todosData";


class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: todosData
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(id) {
		this.setState(prevState => {
			return {
				...prevState,

				todos: prevState.todos.map(item => {
					return item.id === id ? {...item, completed: !item.completed} : item
				})}

		})
	}

	render() {
		const getItem = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
		return (
			<div className={"check-list"}>
				{getItem}
			</div>
		);

	}
}

export default App;
