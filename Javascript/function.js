/************************************************************
	This function opens up a small window that contains
	an image in it.
************************************************************/
function showPopup(url) {
	newwindow = window.open(url,'name','height=380px,width=380px,left=300px,resizable,scrollbars=yes');
	
	if (window.focus) {
		newwindow.focus()
	}
}

/************************************************************
	A set of Arrays tat contain pages to link to
************************************************************/
var chap = new Array();
chap[0] = 'story.php';
chap[1] = 'ch1.php';
chap[2] = 'ch2.php';
chap[3] = 'ch3.php';
chap[4] = 'ch4.php';
chap[5] = 'ch5.php';

var chap1 = new Array();
chap1[0] = 'ch1.php';
chap1[1] = 'ch1-1.php';
chap1[2] = 'ch1-2.php';
chap1[3] = 'ch1-3.php';
chap1[4] = 'ch1-4.php';
chap1[5] = 'ch1-5.php';

var chap2 = new Array();
chap2[0] = 'ch2.php';
chap2[1] = 'ch2-1.php';
chap2[2] = 'ch2-2.php';
chap2[3] = 'ch2-3.php';
chap2[4] = 'ch2-4.php';

var chap3 = new Array();
chap3[0] = 'ch3.php';
chap3[1] = 'ch3-1.php';
chap3[2] = 'ch3-2.php';
chap3[3] = 'ch3-3.php';
chap3[4] = 'ch3-4.php';

var chap4 = new Array();
chap4[0] = 'ch4.php';
chap4[1] = 'ch4-1.php';
chap4[2] = 'ch4-2.php';
chap4[3] = 'ch4-3.php';
chap4[4] = 'ch4-4.php';

var hero = new Array();
hero[0] = 'hero.php';
hero[1] = 'villain.php';

var villain = new Array();
villain[0] = 'villain.php';
villain[1] = 'villain2.php';

/************************************************************
	Each function grabs the selected option and directs
	the user to the correct page based from the Arrays
	above.
************************************************************/
function goSearch(form) {
	i = form.chapter.selectedIndex;
	window.location.href = chap[i];
}

function go(form) {
	i = form.selection1.selectedIndex;
	window.location.href = chap1[i];
}

function go2(form) {
	i = form.selection2.selectedIndex;
	window.location.href = chap2[i];
}

function go3(form) {
	i = form.selection3.selectedIndex;
	window.location.href = chap3[i];
}

function go4(form) {
	i = form.selection4.selectedIndex;
	window.location.href = chap4[i];
}

function bio(form) {
	i = form.hero.selectedIndex;
	window.location.href = hero[i];
}

function vp(form) {
	i = form.vp1.selectedIndex;
	window.location.href = villain[i];
}