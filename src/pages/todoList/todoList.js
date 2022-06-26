import React from "react";

class TodoList extends React.Component {
  state = {
    stateName: "",
    stateTitle: "",
    valueFirstBtn: "Add",
    listTodo: [
      {
        todoName: "TODO-1",
        todoTitle: "Action-1",
      },
      {
        todoName: "TODO-1",
        todoTitle: "Action-1",
      },
      {
        todoName: "TODO-1",
        todoTitle: "Action-1",
      },
      {
        todoName: "TODO-1",
        todoTitle: "Action-1",
      },
    ],
  };

  deleteAll() {
    this.setState({
      listTodo: { todoName: "nothing", todoTitle: "fl" },
    });
  }
  delete(item, index) {
    let newTodo = this.state.listTodo;
    newTodo.splice(index, 1);
    this.setState({ listTodo: newTodo });
  }
  edit(item, index) {
    this.setState({ valueFirstBtn: "Edit" + " " + (index + 1) });
  }

  add(index) {
    if (!this.state.stateName || !this.state.stateTitle) {
      alert("Please fill input");
    } else {
      if (this.state.valueFirstBtn === "Add") {
        let newObj = {
          todoName: this.state.stateName,
          todoTitle: this.state.stateTitle,
        };
        let todoList = this.state.listTodo;
        todoList.push(newObj);
        this.setState({
          listTodo: todoList,
          stateName: "",
          stateTitle: "",
        });
      } else {
          let index = this.state.valueFirstBtn[5] - 1;
        let newObj = {
          todoName: this.state.stateName,
          todoTitle: this.state.stateTitle,
        };
        let newTodo = this.state.listTodo;
        newTodo.splice(index, 1, newObj);
        this.setState({
          listTodo: newTodo,
          stateName: "",
          stateTitle: "",
          valueFirstBtn: "Add",
        });
      }
    }
  }
  render() {
    return (
      <>
        <input
          type="text"
          placeholder="name of todo"
          value={this.state.stateName}
          onChange={(e) => {
            this.setState({
              stateName: e.target.value,
            });
          }}
        />
        <br />
        <input
          type="text"
          placeholder="title todo"
          value={this.state.stateTitle}
          onChange={(e) => {
            this.setState({
              stateTitle: e.target.value,
            });
          }}
        />
        <button className="btn-change" onClick={() => this.add()}>
          {this.state.valueFirstBtn}
        </button>
        <div className="todo-list-box">
          {this.state.listTodo.map((item, index) => (
            <div>
              {item.todoName} : {item.todoTitle}
              <button onClick={() => this.edit(item, index)}>edit</button>
              <button onClick={() => this.delete(item, index)}>delete</button>
              <button onClick={() => this.deleteAll()}>delete all</button>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default TodoList;
