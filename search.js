const searchInput = document.getElementById("search");
const resultsDiv = document.getElementById("results");

function displayResults(data){

resultsDiv.innerHTML="";

data.forEach(item => {

const div = document.createElement("div");
div.className="entry";

div.innerHTML = `
<div class="date">${item.date} | ${item.source}</div>
<div><b>Spanish:</b> ${item.text}</div>
<div><b>English:</b> ${item.translation}</div>
<div><i>${item.notes}</i></div>
`;

resultsDiv.appendChild(div);

});

}

displayResults(corpus);

searchInput.addEventListener("input", function(){

const query = this.value.toLowerCase();

const filtered = corpus.filter(item =>

item.text.toLowerCase().includes(query) ||
item.translation.toLowerCase().includes(query) ||
item.notes.toLowerCase().includes(query)

);

displayResults(filtered);

});
