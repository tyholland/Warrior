<?php
include('head.php');
?>

<div id="chapter">
<form>
<select name="hero" onChange="bio(this.form)">
<option>Heroes</option>
<option selected="selected">Villains</option>
</select>
</form>
</div>

<div id="section">
<form>
<select name="vp1" onChange="vp(this.form)">
<option>Page 1</option>
<option selected="selected">Page 2</option>
</select>
</form>
</div>

<div id="char" align="left">
Click the image to enlarge the picture
<br><br>
<table>
<tr><td ><a href="#" onClick="showPopup('../Images/sphinx.jpg')"><img src="../Images/sphinx2.jpg" height="100px" width="100px" /></a></td>
<td>
<b class="desc">Name:</b> Sphinx
<br>
<b class="desc">Description:</b> Another minion of King Zephion. He's the third strongest minion. He is very hot tempered and loves to fight whenever he gets a chance to. Wishes he was the boss of the other minions but accepts his role of third command.
</td></tr>
<tr><td ><img src="" height="100px" width="100px" /></td>
<td>
<b class="desc">Name:</b> Tankur
<br>
<b class="desc">Description:</b> The weakest of the minions of King Zephion. He is kept around because he has a big stature and scares most people when they first look at him. He still has plenty of power to beat an averagely strong opponent.
</td></tr>
<tr><td ><a href="#" onClick="showPopup('../Images/viltron.jpg')"><img src="../Images/viltron2.jpg" height="100px" width="100px" /></a></td>
<td>
<b class="desc">Name:</b> Viltron
<br>
<b class="desc">Description:</b> The strongest of the minions. He is also calm headed, and plans things out before attacking. Makes sure what he sets out to do is in the name of King Zephion, and that he completes every task.
</td></tr>
</table>
</div>

<?php
include('end.php');
?>