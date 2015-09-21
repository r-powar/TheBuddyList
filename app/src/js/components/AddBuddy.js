/** @jsx React.DOM */
var React = require('react');

var AddBuddy = React.createClass({
	formSubmission: function(event){
		event.preventDefault();
	},

	render: function(){
		var display = this.props.display ? 'block' : 'none';
		var styles = {
			display: display
		};

		return(
			<form ref="addBuddyForm" id="addBuddyForm" className="container" style={styles} onSubmit={this.formSubmission}>
				<div className="form-group">
					<input type="text" ref="username" className="form-control" placeholder="Username" />
					<input type="text" ref="firstName" className="form-control" placeholder="First Name" />
					<input type="text" ref="lastName" className="form-control" placeholder="Last Name" />
					<input type="email" ref="email" className="form-control" placeholder="Email" />
					<input type="date" ref="birthdate" className="form-control" placeholder="Birth Date"/>
					<input type="text" ref="bio" className="form-control" placeholder="Bio"/>
					<button type="submit" className="btn btn-primary btn-block">Submit</button>

				</div>
			</form>
		); 
	}
});

module.exports = AddBuddy;