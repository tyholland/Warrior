<?php
include('head.php');
?>

<div id="chapter">
<form>
<select name="chapter" onChange="goSearch(this.form)">
<option>Stories</option>
<option selected="selected">Chapter 1</option>
<option >Chapter 2</option>
<option >Chapter 3</option>
<option >Chapter 4</option>
</select>
</form>
</div>

<div id="section">
<form>
<select name="selection1" onChange="go(this.form)">
<option selected="selected">Title</option>
<option>Interlude</option>
<option>First Encounter</option>
<option>Elemental Warriors</option>
<option>Plan of Action</option>
<option>One Down</option>
</select>
</form>
</div>


<b class="title">Chapter 1:</b>
<br>
<br>
<b class="title">The Beginning</b>

<?php
include('end.php');
?>