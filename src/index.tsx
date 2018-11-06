import * as React from "react";
import * as ReactDOM from "react-dom";
import Todo from "./components/Todo";

const App: React.SFC = () => <Todo />;

ReactDOM.render(<App />, document.getElementById("root"));
