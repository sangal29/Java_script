let rec  = document.getElementsByTagName("h2");
console.dir(rec[0].innerText);
rec[0].innerText = rec[0].innerText + "From Apna College";

let cl = document.querySelectorAll(".box");
console.log(cl); 

for (div of cl)
{
    console.log(div);
}