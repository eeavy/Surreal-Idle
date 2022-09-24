let town = {
 gold: 0,
 wood: 0,
 stone: 0, 
 clay: 0,
 men: 0,
 
  mall: { 
   time: 5,
  }, 
 }

 
function update() { 
	$(document).ready(function(){ 
	$(".gold").html(`<img src="src/gold.png">`+ "Gold: " + town.gold);
$("#mall").html("Mall " + town.mall.time) 	;
 	}) 
		setTimeout(update, 100);
	}
 update(); 


function canBuild(e) {
if(town[e].time>0){
    setTimeout(build(e), 1000)
}
}
function build(e){
    if(town[e].time>0){
    town[e].time--
}
    console.log(e)
}


function openNav() {
  document.getElementById("mySidenav").style.display = "block";
}

function closeNav() {
  document.getElementById("mySidenav").style.display = "none";
}
