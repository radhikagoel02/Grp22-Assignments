import React from "react";

class TodoItem extends React.Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      color: this.props.todo.completed ? "#7a7a7a" : "#000",
    };
  };

  componentDidMount() {
    let todos = Array.from(document.querySelectorAll(".item-wrapper"));
    todos.forEach((todo, i) => {
      todo.style.transitionDelay = i * 0.1 + 0.25 + "s";
    });
  }

  render() {
    const { id, title, completed } = this.props.todo;

    return (
      <div className="item-wrapper">
        <div className="inner-wrapper">
          <div className="to-do-item">
            <div
              className="toggle-check"
              onClick={this.props.markComplete.bind(this, id)}
            >
              <div
                className={"line1 line" + (completed ? " trans-line1" : "")}
              />
              <div
                className={"line2 line" + (completed ? " trans-line2" : "")}
              />
            </div>
            <textarea
              rows="1"
              className="item-content"
              value={title}
              style={this.getStyle()}
              spellCheck="false"
              onChange={this.props.editText.bind(this, id)}
              onBlur={this.props.saveText.bind(this, id)}
            />
          </div>

          <button
            className="del-btn"
            onClick={this.props.delTodo.bind(this, id)}
          >
            Del
          </button>
        </div>
      </div>
    );
  }
}

export default TodoItem;
