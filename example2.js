//statless components
function TodoList(todos) {
 console.log(todos);
  return(
    <ul>
      <li>TODO LIST</li>
    </ul>
  );
  
}
class AppComponent extends React.Component {
  //constructor is where state is initiated and parameters are passed
  constructor(props) {
    super(props);
    this._nextTodoId = 1;
    this.state = {
      filter: { ShowCompleted: true },
      todos: [
      { id: this._nextTodoId++, text: "first", isCompleted: true},
       { id: this._nextTodoId++, text: "second", isCompleted: false},
       { id: this._nextTodoId++, text: "third", isCompleted: false},
       { id: this._nextTodoId++, text: "fourth" ,isCompleted: false},
      ]
      
    };
    this._onShowCompletedChange = this._onShowCompletedChange.bind(this);
  }

  render() {
    const {filter, todos} = this.state;
    const filteredTodos = filter.ShowCompleted
    ? todos
    : todos.filter(todo => !todo.isCompleted);
    
    return(
        <div>
            <h2>Todo List(again...)</h2>
            <label>
                ShowCompleted
                <input type="checkbox" checked={filter.ShowCompleted} onchange={this._onShowCompletedChange}/>
            </label>
            <TodoList blegh ="woah"/>
        </div>
    );

  
  }
}

_onShowCompletedChange(e){
    this.setState({
        filter: {ShowCompleted: e.target.checked}
    });
}

ReactDOM.render(<AppComponent />, document.getElementById("application"));


