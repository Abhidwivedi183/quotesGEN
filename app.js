let twbtn = document.querySelector("#Tweet");

let sh = document.querySelector("#gene");

let bck = document.getElementById("bckquote");
let sp = document.querySelector("#spn");
sh.addEventListener('click',function(e){

qute();

})

twbtn.addEventListener('click',function(e){
  tweet();
})





async function qute(){
  const respone = await fetch('https://api.quotable.io/random');
  const data = await respone.json();
  bck.innerHTML = data.content;
sp.innerHTML = data.author;

}

function tweet(){
  window.open("https://twitter.com/intent/tweet?text=Hello%20world");
}





