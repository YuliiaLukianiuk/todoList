import React from 'react';
import "./TodoItem.css";
import App from "./App"

function TodoItem(props) {
	const {item} = props;
	const completedStyle = {
		fontStyle: "italic",
		color: "#cdcdcd",
		textDecoration: "line-through"
	}
	return (
		<div className={"check-item"}>
			<input type="checkbox"
			       checked={props.item.completed}
			       onChange={() => props.handleChange(item.id)}/>
			<p style={props.item.completed ? completedStyle : null}>{item.text}</p>
		</div>
	)
}

export default TodoItem;
