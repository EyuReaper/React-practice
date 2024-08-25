class AppComponent extends React.Component {
  render() {
    //written using jsx *only returns the shadow DOM
    return (
      <section classname="sitewrap">
        <h1>header</h1>
        <p>lorem</p>
      </section>
    );

    return React.createElement(
      "section",
      { className: "site-wrap" },
      React.createElement("h1", null, "Header"),
      React.createElement("P", null, "lorim")
    );
  }
}
ReactDOM.render(
  React.createElement(AppComponent, null),
  document.getElementById("application")
);
