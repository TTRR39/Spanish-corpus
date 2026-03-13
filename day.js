const params=new URLSearchParams(window.location.search);

const date=params.get("date");

const title=document.getElementById("title");

title.textContent=date;

const results=document.getElementById("results");

const searchInput=document.getElementById("search");

let dayData=corpus.filter(x=>x.date===date);

function display(data){

results.innerHTML="";

data.forEach(item=>{

const div=document.createElement("div");

div.className="entry";

div.innerHTML=`
${item.text}<br>
<i>${item.translation}</i><br>
${item.notes}
`;

results.appendChild(div);

});

}

display(dayData);

searchInput.addEventListener("input",function(){

const q=this.value.toLowerCase();

const filtered=dayData.filter(item=>

item.text.toLowerCase().includes(q) ||
item.translation.toLowerCase().includes(q) ||
item.notes.toLowerCase().includes(q)

);

display(filtered);

});
