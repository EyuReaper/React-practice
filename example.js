class AppComponent extends React.Component {
  //always pass the parameter throught the super constructor
  constructor(props) {
    super(props);
    //state is always putin the constructor
    this.state = { count: 5, title: "Hello world" };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  render() {
    //object deconstructing syntax: used to extract the state
    const { count, title } = this.state;

    return (
      <section classname="sitewrap">
        <h1>Header:{title}!</h1>
        <p>the count is:{count}!</p>
        <div>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
        </div>
      </section>
    );
  }

  increment() {
    const { count } = this.state;
    //setState changes the state
    this.setState({ count: count + 1, title: "Inc" });
  }

  decrement() {
    const { count } = this.state;
    this.setState({ count: count - 1, title: "Dec" });
  }
}
//ReactDOM is always mandatory inorder to render
ReactDOM.render(<AppComponent />, document.getElementById("application"));
