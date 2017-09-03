var React = require('react');
var ReactDOM = require('react-dom');

var Main = React.createClass({
    
    getInitialState: function() {
      return {list: []};
    },
    add: function () {
      this.setState(
        { list: [...this.state.list, 'Whatever'] }
      )
    },
    remove: function () {
      this.setState(
        { list: this.state.list.slice(0,this.state.list.length-1) }
      )
    },
    render: function() {
      const divs = this.state.list.map(item => {
        return <div>{item}</div>
      }); 
      return (
        <div>
            <button onClick={this.add}>Insert</button>
            <button onClick={this.remove}>Remove</button>
            <br/>
            <span id='text'>Hello World</span>
            {divs}
        </div>
      )
    }
});

ReactDOM.render(<Main />, document.getElementById('app'));
