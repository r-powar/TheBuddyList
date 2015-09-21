/** @jsx React.DOM */
var React = require('react');

var ShowForm = React.createClass({

	render: function(){
		return(
			<button className="btn btn-default btn-block btn-primary" onClick={this.props.onToggleForm}>Add Buddy</button>
		);
	}
});

module.exports = ShowForm;