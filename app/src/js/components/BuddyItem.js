/** @jsx React.DOM */
var React = require('react');
var classNames = require('classnames');

var BuddyItem = React.createClass({

	render: function(){

		var statusColoring = classNames({
			'btn': true,
			'btn-success': (this.props.status == "Available"),
			'btn-danger': (this.props.status == "Offline"),
			'btn-warning': (this.props.status == "Away" || this.props.status == "Idle")
		});

		return(
			<li className="list-group-item">
				<span>Username:{this.props.username}</span>
				<span>First Name:{this.props.firstName}</span>
				<span>Last Name:{this.props.lastName}</span>
				<span>
					<button className={statusColoring} >{this.props.status}</button>
				</span>
			</li>
		);
	}
});

module.exports = BuddyItem;