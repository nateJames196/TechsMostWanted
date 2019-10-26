$(document).ready(function(){
	
	var usersBase = [{
			id:"0",
			name:"Clint Techwood",
			category:"Software Issue",
			bounty: "20.00",
			rating:"4",
			specialinfo: "",
			requested: "2019-09-25",
			longitude:"4.123",
			latitude:"5.678",
		},
		{
			id:"23",
			name:"Conway Conwayerson",
			category:"Consultation",
			bounty: "10.00",
			rating:"2",
			specialinfo: "",
			requested: "2019-10-03",
			longitude:"4.123",
			latitude:"5.678",
		},
		{
			id:"55",
			name:"Easty West",
			category:"Education",
			bounty: "60.00",
			rating:"5",
			specialinfo: "",
			requested: "2019-09-25",
			longitude:"5.000",
			latitude:"4.999",
		},
		{
			id:"2",
			name:"Old Jim Bob",
			category:"Hardware Repair",
			bounty: "1.00",
			rating:"1",
			specialinfo: "",
			requested: "2019-01-02",
			longitude:"4.123",
			latitude:"5.678",
	}];
	//First, sort the users by date.
	let userSet = [];
	for (let currUser = 0;currUser < usersBase.length;currUser++) {
		let currentUser = usersBase[currUser];
		if (currUser == 0) {
			userSet.push(currentUser);
			continue;
		}
		
		let currentDate = new Date(currentUser.requested);		
		let currentTime = currentDate.getTime();
		
		let minDate = new Date(userSet[0].requested);
		let minTime = minDate.getTime();
		if (currentTime < minTime) {
			userSet.unshift(currentUser);
		} else if (currentTime == minTime) {
			if (userSet[0].bounty <= currentUser.bounty) {
				//If the top bounty is lower, put the new one on top
				userSet.unshift(currentUser);
			} else {
				userSet.push(currentUser)
			} 
		} else {
			userSet.push(currentUser);
		}
		console.log(userSet[0]);
	}
	//First, sort the users by the date. Older dates first
	
	//After that, lets add li elements to the ul with the following:
	// bounty DONE
	// category DONE
	// link to bountyinfo.html with info in array attached.
	
	for (let currUser = 0;currUser < userSet.length;currUser++) {
		let currentUser = userSet[currUser];
		let timeSince = currentUser.requested;//TODO
		$('ul.bounties').append('<li><a id="' + currentUser.id + '" href="#">' + currentUser.category + ' - $' + currentUser.bounty +' (' + timeSince + ')</a></li>');
		$('#' + currentUser.id).click(function () {
			bountyLoad(currentUser);
		});
	}
	
});


function bountyLoad(user) {
	console.log(user.name);
}