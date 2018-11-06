import * as React from "react";

interface TodoState {
  todos: ITodo[];
  value: string;
}

interface ITodo {
  // ここをTodoにするとcオンポーネントと名前が衝突する。
  id: number;
  content: string;
}

class Todo extends React.Component<{}, TodoState> {
  constructor(props: any) {
    super(props);
    this.state = { todos: [], value: "" };
  }

  private handleChnage(e: React.FormEvent<HTMLInputElement>) {
    this.setState({ value: e.currentTarget.value });
  }

  private addTodo() {
    const todo: ITodo = {
      id: this.state.todos.length,
      content: this.state.value
    };
    this.setState({ todos: this.state.todos.concat(todo), value: "" });
  }

  private todoList(): JSX.Element[] {
    return this.state.todos.map(t => <li key={t.id}>{t.content}</li>);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          name="value"
          value={this.state.value}
          onChange={e => this.handleChnage(e)}
        />
        <button onClick={() => this.addTodo()}>add</button>
        <ul>{this.todoList()}</ul>
      </div>
    );
  }
}

export default Todo;
