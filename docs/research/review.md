<script src='review.js'></script>
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>  
<style>@import url(review.css);</style> 

# Design Review

Leave your design review of React Away based on the documentation site.

<section identity>
   Name <input required id='name' placeholder='Type your full name here'/> 
   | Email <input required id='mail' placeholder='Type your email here'/>
</section>

<br>

<form questions>
<div features></div>
<div>

## Is it a web standard style?

<input name='standard' requried type='radio' value='yes'>yes</input>
<input name='standard' requried type='radio' value='no'>no</input>
<input name='standard' requried type='radio' value='maybe'>maybe</input>

## React Away lets React more... 

<input name='way' requried type='checkbox' value='easy'>easy</input>
<input name='way' requried type='checkbox' value='flex'>flex</input>
<input name='way' requried type='checkbox' value='lean'>lean</input>
<input name='way' requried type='checkbox' value='bold'>bold</input>
<input name='way' requried type='checkbox' value='fast'>fast</input>

## What principles do you recognize?

<input name='dky' value='dry' requried type='checkbox'>DRY</input>
<input name='dky' value='kiss' requried type='checkbox'>KISS</input>
<input name='dky' value='yagni' requried type='checkbox'>YAGNI</input>

## Does it improves dev experience?

<input name='dx' requried type='radio' value='yes'>yes</input>
<input name='dx' requried type='radio' value='no'>no</input>
<input name='dx' requried type='radio' value='maybe'>maybe</input>

## What is the most useful one?

<select id='useful' listing required>
</select>

## Let some comments here...

<textarea name='conclusion' required></textarea>

<button  type='submit'>Submit your response</button>

</div>
</form>
