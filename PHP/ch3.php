<?php
include('head.php');
?>

<div id="chapter">
<form>
<select name="chapter" onChange="goSearch(this.form)">
<option>Stories</option>
<option >Chapter 1</option>
<option >Chapter 2</option>
<option selected="selected">Chapter 3</option>
<option >Chapter 4</option>
</select>
</form>
</div>

<div id="section">
<form>
<select name="selection3" onChange="go3(this.form)">
<option selected="selected">Title</option>
<option>The Unleashing</option>
<option>Mourning</option>
<option>Training Time</option>
<option>It Begins</option>
</select>
</form>
</div>

<b class="title">Chapter 3:</b>
<br>
<br>
<b class="title">Separation</b>

<?php
include('end.php');
?>