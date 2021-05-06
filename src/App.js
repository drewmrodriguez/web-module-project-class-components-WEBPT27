import React from 'react';
import './components/Todo.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const list = [
  {
    task: "Homework",
    id: 1,
    completed: false,
  },
  {
    task: "Buy Groceries",
    id: 2,
    completed: false,
  },
  {
    task: "Feed Animals",
    id: 3,
    completed: false,
  },
  {
    task: "Take Out Trash",
    id: 4,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      list: list
    };
  }

  toggleListItem = (itemId) => {
    this.setState({
      list: this.state.list.map((item) => {
        if (item.id === itemId) {
          return {...item, completed: !item.completed}
        };
        return item
      })
    })
  }

  clearCompleted = () => {
    this.setState({
      list: this.state.list.filter((item) => !item.completed),
    });
  };

  addListItem = (itemId) => {
    this.setState({
      list: [
        ...this.state.list,
        { id: Date.now(), task: itemId, completed: false},
      ],
    });
  };
  
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Drew's Todo List:</h1>
          <TodoForm addListItem={this.addListItem} />
        </div>
        <div>
          <TodoList
            list={this.state.list}
            toggleListItem={this.toggleListItem}
            clearCompleted={this.clearCompleted}
          />
        </div>
      </div>
    );
  }
}

export default App;
