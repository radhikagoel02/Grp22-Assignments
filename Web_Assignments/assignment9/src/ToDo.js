import React from "react";

import TodoItem from "./TodoItem";

class Todos extends React.Component {
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
        editText={this.props.editText}
        saveText={this.props.saveText}
      />
    ));
  }
}

export default Todos;
