/** @jsx React.DOM */
var React = require('react'),
	BuddyItem = require('./BuddyItem');

var BuddyList = React.createClass({

	render: function(){
		var buddyDetails = this.props.details.map(function(details){

			return <BuddyItem username={details.username} firstName={details.firstname} lastName={details.lastname} status={details.status} />
		});

		return(
			<div className="container">
				<ul className="list-group">
					{buddyDetails}
				</ul>
			</div>
		);
	}

});

module.exports = BuddyList;