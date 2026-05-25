const generateBtn = document.getElementById("generateBtn");

const results = document.getElementById("results");

const loading = document.getElementById("loading");

generateBtn.addEventListener("click", function(){

const keyword = document.getElementById("keyword").value;

if(keyword === ""){

alert("Please enter a keyword");

return;

}

results.innerHTML = "";

loading.style.display = "block";

setTimeout(function(){

loading.style.display = "none";

const ideas = [

"25 " + keyword + " Ideas That Look Expensive And Trendy",

"Best " + keyword + " Trends That Are Going Viral On Pinterest",

"Modern " + keyword + " Inspiration For Aesthetic Content",

"Pinterest-Worthy " + keyword + " Concepts Creators Are Loving",

"Luxury Style " + keyword + " Ideas Perfect For 2026"

];

ideas.forEach(function(idea){

results.innerHTML += `

<div class="result-card">

${idea}

<br>

<button class="copy-btn" onclick="copyText('${idea}')">
Copy Title
</button>

</div>

`;

});

},1800);

});

function copyText(text){

navigator.clipboard.writeText(text);

alert("Copied");

}