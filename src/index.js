import React from "react";
import ReactDOM from "react-dom";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: [
        { todo: "done", checked: false },
        { todo: "finito", checked: false },
      ],
      newTodo: "",
    };
  }

  toggleChecked = (todo) =>
    this.setState({
      todoItems: this.state.todoItems.map((item) =>
        item.checked === todo.checked
          ? { ...item, checked: !item.checked }
          : item
      ),
    });

  display() {
    return this.state.todoItems.map((item, key) => {
      return (
        <div>
          <h3 key={key}>{item.todo}</h3>
          <input
            type='checkbox'
            checked={item.checked}
            onChange={this.toggleChecked(item)}
          />
        </div>
      );
    });
  }

  newTodo = () => {
    this.setState({
      todoItems: [
        ...this.state.todoItems,
        { todo: this.state.newTodo, checked: false },
      ],
    });
  };

  updateValue = (e) => {
    this.setState({ newTodo: e.target.value });
  };
  addTodoForm() {
    return (
      <div>
        <input
          placeholder='add todo'
          value={this.state.newTodo}
          onChange={this.updateValue}
        />
        <button onClick={this.newTodo}>ADD</button>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.addTodoForm()}
        {this.display()}
      </div>
    );
  }
}

ReactDOM.render(<Todo />, document.getElementById("root"));
