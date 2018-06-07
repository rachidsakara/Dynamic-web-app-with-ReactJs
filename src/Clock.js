import React, { Component } from 'react';


class Clock extends Component{
	constructor(props){
		super(props);
		this.state = {
			time:new Date().toLocaleString(),
		};
		this.tick = this.tick.bind(this);
	}
	componentDidMount(){
		this.intervalID = setInterval(()=>this.tick(),1000);	
	}
	componentWillUnmount(){
		clearInterval(this.intervalID);
	}
	tick(){
		console.log(this);
		this.setState({time:new Date().toLocaleString()});
	}
	render(){
		return(
			<p>
			This time is {this.state.time}
			</p>
	 );
	}
}

export default Clock;