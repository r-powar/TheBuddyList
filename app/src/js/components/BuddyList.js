/** @jsx React.DOM */
var React = require('react'),
	BuddyItem = require('./BuddyItem');

var BuddyList = React.createClass({

	render: function(){
		var buddyDetails = this.props.buddyList.map(function(items){

			return <BuddyItem username={items.username} firstName={items.firstName} lastName={items.lastName} status={items.status} />
		});

		return(
			<div className="container">
				<ul className="list-group">
				</ul>
			</div>
		);
	}

});

module.exports = BuddyList;