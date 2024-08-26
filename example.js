class AppComponent extends React.Component {
  //always pass the parameter throught the super constructor
  constructor(props) {
    super(props);
    //state is always putin the constructor
    this.state = { count: 5, title: "Hello world" };
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
    //shows button event from console
    console.log("Inc");
  }

  decrement() {
    console.log("Dec");
  }
}
//ReactDOM is always mandatory inorder to render
ReactDOM.render(<AppComponent />, document.getElementById("application"));
