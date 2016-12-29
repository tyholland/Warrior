var app = angular.module('war', []);

app.controller('warrior', function($scope) {
	$scope.view = 'home.html';

	$scope.pgUpdate = function(page) {
		$scope.view = page;
		$scope.option = $scope.view;
	};

	/************************************************************
		A set of Arrays tat contain pages to link to
	************************************************************/
	$scope.chap = [
		{name : 'Story', value : 'story.html'},
		{name : 'Chapter 1', value : 'ch1.html'},
		{name : 'Chapter 2', value : 'ch2.html'},
		{name : 'Chapter 3', value : 'ch3.html'},
		{name : 'Chapter 4', value : 'ch4.html'}
	];
	$scope.chap1 = [
		{name : 'Title', value : 'ch1.html'},
		{name : 'Interlude', value : 'ch1-1.html'},
		{name : 'First Encounter', value : 'ch1-2.html'},
		{name : 'Elemental Warriors', value : 'ch1-3.html'},
		{name : 'Plan of Action', value : 'ch1-4.html'},
		{name : 'One Down', value : 'ch1-5.html'}
	];
	$scope.chap2 = [
		{name : 'Title', value : 'ch2.html'},
		{name : 'World Famous', value : 'ch2-1.html'},
		{name : 'Rescue Mission', value : 'ch2-2.html'},
		{name : 'Surprise', value : 'ch2-3.html'},
		{name : 'Good Bye', value : 'ch2-4.html'}
	];
	$scope.chap3 = [
		{name : 'Title', value : 'ch3.html'},
		{name : 'The Unleashing', value : 'ch3-1.html'},
		{name : 'Mourning', value : 'ch3-2.html'},
		{name : 'Training Time', value : 'ch3-3.html'},
		{name : 'It Begins', value : 'ch3-4.html'}
	];
	$scope.chap4 = [
		{name : 'Title', value : 'ch4.html'},
		{name : 'Guess Who\'s Back', value : 'ch4-1.html'},
		{name : 'Power Up', value : 'ch4-2.html'},
		{name : 'Final Battle Part. 1', value : 'ch4-3.html'},
		{name : 'Final Battle Part. 2', value : 'ch4-4.html'}
	];
	$scope.hero = [
		{name : 'Heroes', value : 'hero.html'},
		{name : 'Villains', value : 'villain.html'}
	];
	$scope.villain = [
		{name : 'Page 1', value : 'villain.html'},
		{name : 'Page 2', value : 'villain2.html'}
	];

	/************************************************************
		Each function grabs the selected option and directs
		the user to the correct page based from the Arrays
		above.
	************************************************************/
	$scope.changePg = function(page) {
		$scope.view = page;
		$scope.option = page;
		$scope.optionSub = page;
	};
	$scope.changeSubPg = function(page) {
		$scope.view = page;
		$scope.optionSub = page;
		$scope.option = $scope.optionSub.value[0];
	};

	/************************************************************
		This function opens up a small window that contains
		an image in it.
	************************************************************/
	$scope.showPopup = function(url) {
		newwindow = window.open(url,'name','height=380px,width=380px,left=300px,resizable,scrollbars=yes');
		
		if (window.focus) {
			newwindow.focus()
		}
	};
});





