/** @jsx React.DOM */
var React = require('react');
var ShowForm = require('./ShowForm');
var AddBuddy = require('./AddBuddy');
var BuddyList = require('./BuddyList');

var List = React.createClass({
	getInitialState: function(){
		return{
			formDisplayed: false
		}
	},

	onToggle: function(){
		this.setState({
			formDisplayed: !this.state.formDisplayed
		});
	},

	render: function(){
		return(
			<div>
				<div className="container">
					<ShowForm display={this.state.formDisplayed} onToggleForm={this.onToggle} />
				</div>

				<AddBuddy display={this.state.formDisplayed} />	
				<br />
				<BuddyList />
			</div>	
		);
	}
});

module.exports = List;