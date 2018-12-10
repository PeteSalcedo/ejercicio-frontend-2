import React, { Component } from 'react';
import employees from '../employees/index';
import '../main.css'

class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			empleados: employees,
			id: '',
			name: '',
			company: '',
			salary: '',
			USD$: '',
			age: '',
			phone: '',
			email: '',
		};
	}
	hover_state = false
	hoveroff = () => {
		this.hover_state = false
		return 1;
	}
	hoveron = () => {
		this.hover_state = true;
		return 1;
	}
	stylize = (ID) => {
		console.log(ID);
		return {};
	}
	//this deletes the user by using id of them
	deleteUser = (obj, index) => {
		console.log('this is the id', obj.id);
		let { empleados } = this.state;
		empleados.splice(obj.id, 1);
		this.setState({
			empleados: empleados,
		});
	};
	render() {
		return (
			<div>
				<table>
					<thead>
						<tr>
							<th>
								<li key={employees.obj}>{employees.obj}</li>
							</th>
							<th>ID</th>
							<th>Name</th>
							<th>Company</th>
							<th>Salary </th>
							<th>USD$</th>
							<th>Age </th>
							<th>Phone </th>
							<th>E-Mail </th>
						</tr>
					</thead>
					{this.state.empleados.map((obj, index) => (
						<tbody>
							<tr onMouseEnter={() => {return this.setState({ buttonIsHovered:true })}} 
							onMouseLeave={() => {return this.setState({ buttonIsHovered:false })}} 
							style={(this.state.buttonIsHovered) ? {backgroundColor:"red"} : null}>
								<td>
									<li key={employees.obj}>{employees.obj}</li>
								</td>
								<td>{obj.id}</td>
								<td>{obj.name}</td>
								<td>{obj.company}</td>
								<td>
									{/*function to get format money of empĺoyees salary */}
									{new Intl.NumberFormat('MX', {
										style: 'currency',
										currency: 'MXN',
									}).format(obj.salary)}
								</td>
								<td>
									{/*function to get format money of empĺoyees salary */}
									{new Intl.NumberFormat('USA', {
										style: 'currency',
										currency: 'USD',
									}).format(obj.salary / 20.45)}
								</td>
								<td>{obj.age}</td>
								<td>{obj.phone}</td>
								<td>{obj.email}</td>

								<td>
									<button onClick={this.deleteUser.bind(this, obj, index)} href="#">
										delete
									</button>
								</td>
							</tr>
						</tbody>
					))}
				</table>
			</div>
		);
	}
}

export default Table;
