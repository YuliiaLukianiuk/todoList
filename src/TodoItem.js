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


// import React, {Component} from "react"
//
// class App extends Component {
// 	constructor() {
// 		super()
// 		this.state = {
// 			firstName: "",
// 			lastName: "",
// 			age:"",
// 			gender:"",
// 			destination:"",
// 			dieta: "",
// 			isVegan: false,
// 			isKosher: false,
// 			isLactoseFree: false
//
// 		}
// 		this.handleChange = this.handleChange.bind(this)
//
// 	}
// 	handleChange(event){
// 		const  {name, value,type, checked} = event.target
// 		type === "checkbox" ?
// 			this.setState({
//
// 				[name]: checked
//
// 			})
// 			: this.setState({
// 				[name]: value
// 			})
// 	}
//
// 	render() {
// 		return (
// 			<main>
// 				<form>
// 					<input placeholder="First Name" type="text" value={this.state.firstName} name="firstName" onChange={this.handleChange}/><br />
// 					<input placeholder="Last Name" type="text" value={this.state.lastName} name="lastName" onChange={this.handleChange}/><br />
// 					<input placeholder="Age" type="text" value={this.state.age} name="age" onChange={this.handleChange}/><br />
//
// 					<label>
// 						<input type="radio" name="gender" value="male" checked={this.state.gender === "male"}  onChange={this.handleChange}/>
// 						Male
// 					</label>
//
// 					<br />
//
// 					<label>
// 						<input type="radio" name="gender" value="female" checked={this.state.gender === "female"}  onChange={this.handleChange}/>
// 						Female
// 					</label>
//
// 					<br />
// 					<select value={this.state.destination}
// 					        name="destination"
// 					        onChange={this.handleChange}>
// 						<option value="">-- Please Choose a destination --</option>
// 						<option value = "italy">italy</option>
// 						<option value = "germany">germany</option>
// 						<option value = "ukraine">ukraine</option>
// 						<option value = "usa">usa</option>
// 						<option value = "cyprus">cyprus</option>
// 					</select>
//
// 					{/* // То значение value, которое назначают элементу option, указывает на то, каким должно быть соответствующее свойство состояния при выборе данного элемента. Сюда попадают те строки, которые должны находиться в выпадающем списке. В нашем случае — это некие пункты назначения, например — страны. Запишем их названия с маленькой буквы для того, чтобы их внешний вид соответствовал бы значениям свойств value других имеющихся в коде элементов.  */}
// 					<br />
// 					<label>
// 						<input  type="checkbox" name="isVegan" onChange={this.handleChange} checked={this.state.isVegan}/>
// 						isVegan
// 					</label>
// 					<br />
//
// 					<label>
// 						<input  type="checkbox" name="isKosher" onChange={this.handleChange} checked={this.state.isKosher}/>
// 						isKosher
// 					</label>
// 					<br />
//
// 					<label>
// 						<input  type="checkbox" name="isLactoseFree" onChange={this.handleChange} checked={this.state.isLactoseFree}/>
// 						isLactoseFree
// 					</label>
// 					<br />
// 					<button>Submit</button>
// 				</form>
// 				<hr />
// 				<h2><font color="#3AC1EF">Entered information:</font></h2>
// 				<p>Your name: {this.state.firstName} {this.state.lastName}</p>
// 				<p>Your age: {this.state.age}</p>
// 				<p>Your gender: {this.state.gender}</p>
// 				<p>Your destination: {this.state.destination}</p>
//
// 				<p>Your dietary restrictions:</p>
//
// 				<p>Vegan: {this.state.isVegan ? "Yes" : "No"}</p>
// 				<p>Kosher: {this.state.isKosher ? "Yes" : "No"}</p>
// 				<p>Lactose Free: {this.state.isLactoseFree ? "Yes" : "No"}</p>
// 			</main>
// 		)
// 	}
// }
//
// export default App