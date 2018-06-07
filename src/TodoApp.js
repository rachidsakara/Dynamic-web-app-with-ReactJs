
import React from 'react';

window.id = 0;

class TodoApp extends React.Compoenet{
	constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: []
    }
  }
  render(){
  	// Render JSX
    return (
      <div>
        <Title />
        <TodoForm addTodo={this.addTodo.bind(this)}/>
        <TodoList 
          todos={this.state.data} 
          remove={this.handleRemove.bind(this)}
        />
      </div>
    );
  }
} 
export default TodoApp;
