/** @jsx React.DOM */
var React = require('react');
var ShowForm = require('./ShowForm');
var AddBuddy = require('./AddBuddy');
var BuddyList = require('./BuddyList');

var List = React.createClass({
	getInitialState: function(){
		var Items = [
			{ username:'rpowar', firstName:'Raj', lastName: 'Powar', email:'abc@cue.edu', date:'11102015', bio:'Testing it out', status:"Available"},
			{ username:'jdoe', firstName:'John', lastName: 'Doe', email:'jdoe@xcs.edu', date:'12042014', bio:'John Doe test data', status:"Offline"},
			{ username:'jane', firstName:'Jane', lastName: 'Matthews', email:'janem@xu.edu', date:'12082014', bio:'Jane Matthews test data', status:"Idle"}
		];	
		return{
			items: Items,
			formDisplayed: false
		}
	},

	onToggle: function(){
		this.setState({
			formDisplayed: !this.state.formDisplayed
		});
	},

	onNewBuddy: function(newBuddy){
		var newBuddy = this.state.items.concat([newBuddy]);
		this.setState({
			items: newBuddy,
			formDisplayed: false,
		});
	},

	render: function(){
		return(
			<div>
				<div className="container">
					<ShowForm display={this.state.formDisplayed} onToggleForm={this.onToggle} />
				</div>

				<AddBuddy display={this.state.formDisplayed} onNewBuddy={this.onNewBuddy} />	
				<br />
				<BuddyList buddyList={this.state.items} />
			</div>	
		);
	}
});

module.exports = List;