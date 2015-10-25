/** @jsx React.DOM */
var React = require('react');
var classNames = require('classnames');

var BuddyItem = React.createClass({

	render: function(){

		var statusColoring = classNames({
			'btn': true,
			'btn-success': (this.props.status == "Available"),
			'btn-danger': (this.props.status == "Offline"),
			'btn-warning': (this.props.status == "Away" || this.props.status == "Idle"),
			'btn-xs': true
		});

		return(
			<li className="list-group-item">
				<div className="items col-md-3"><p>Username: {this.props.username}</p></div>
				<div className="items col-md-3"><p>First Name: {this.props.firstName}</p></div>
				<div className="items col-md-3"><p>Last Name: {this.props.lastName}</p></div>
				<div className="items">
					<button className={statusColoring}>{this.props.status}</button>
				</div>  
				<div className="items">
					<span className="glyphicon glyphicon-plus-sign"></span>
				</div>
				<div className="items">
					<span className="glyphicon glyphicon-remove-circle"></span>
				</div>
				<div className="items">
					<span className="glyphicon glyphicon-arrow-up"></span>
				</div>

			</li>
		);
	}
});

module.exports = BuddyItem;