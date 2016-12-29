/************************************************************
	This function opens up a small window that contains
	an image in it.
************************************************************/
$('.imgLink').on('click', function(e) {
	e.preventDefault();
	var $popUp = $(this).parent().find('.imgPop'),
		$clone = $popUp.clone();

	$clone.removeClass('jsHide');

	$clone.dialog({
		width: '380px',
		height: '380px',
		resizable: false,
		modal: true
	});
});

/************************************************************
	A set of Arrays tat contain pages to link to
************************************************************/
var chap = ['story.php', 'ch1.php', 'ch2.php', 'ch3.php', 'ch4.php', 'ch5.php'],
	selection1 = ['ch1.php', 'ch1-1.php', 'ch1-2.php', 'ch1-3.php', 'ch1-4.php', 'ch1-5.php'],
	selection2 = ['ch2.php', 'ch2-1.php', 'ch2-2.php', 'ch2-3.php', 'ch2-4.php'],
	selection3 = ['ch3.php', 'ch3-1.php', 'ch3-2.php', 'ch3-3.php', 'ch3-4.php'],
	selection4 = ['ch4.php', 'ch4-1.php', 'ch4-2.php', 'ch4-3.php', 'ch4-4.php'],
	hero = ['hero.php', 'villain.php'],
	villain = ['villain.php', 'villain2.php'];

/************************************************************
	Each function grabs the selected option and directs
	the user to the correct page based from the Arrays
	above.
************************************************************/
$('.firstMenu').on('change', function() {
	var $this = $(this),
		index = $('option:selected', this).index(),
		arrName = $this.attr('name');

	window.location.href = matchFirstMenu(arrName)[index];
});

$('.secondMenu').on('change', function() {
	var $this = $(this),
		index = $('option:selected', this).index(),
		arrName = $this.attr('name');

	window.location.href = matchSecondMenu(arrName)[index];
});

function matchSecondMenu(input) {
	if (input === 'selection2') {
		return selection2;
	} else if (input === 'selection3') {
		return selection3;
	} else if (input === 'selection4') {
		return selection4;
	} else if (input === 'hero') {
		return hero;
	} else {
		return villain;
	}
}

function matchFirstMenu(input) {
	if (input === 'chapter') {
		return chap;
	} else {
		return hero;
	}
}