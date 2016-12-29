<?php
include('head.php');
?>

<div id="chapter">
<form>
<select name="chapter" onChange="goSearch(this.form)">
<option>Stories</option>
<option >Chapter 1</option>
<option selected="selected">Chapter 2</option>
<option >Chapter 3</option>
<option >Chapter 4</option>
</select>
</form>
</div>

<div id="section">
<form>
<select name="selection2" onChange="go2(this.form)">
<option selected="selected">Title</option>
<option>World Famous</option>
<option>Rescue Mission</option>
<option>Surprise</option>
<option>Good Bye</option>
</select>
</form>
</div>

<b class="title">Chapter 2:</b>
<br>
<br>
<b class="title">Heroes</b>

<?php
include('end.php');
?>