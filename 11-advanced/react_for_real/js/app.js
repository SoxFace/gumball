var HelloMessage = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>; 
  }
});


React.render(<HelloMessage name="DT" />, document.getElementById('app'));
