import React from 'react';


class Student extends React.Component{
	render() {
		let price = 600;
		if(this.props.name === "eminem"){
			price = 0; 
		}
		return(
			<div className="box">
      			<p>name: {this.props.name}</p>
				<p>price: {price}</p>
			</div>
		);
	}
}
    export default Student;