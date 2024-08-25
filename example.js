class AppComponent extends React.Component {
  render() {
    return React.createElement("h1", { className: "header" }, "hello world");
  }
}
ReactDOM.render(
  React.createElement(AppComponent, null),
  document.getElementById("application")
);
