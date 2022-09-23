let town = {
      gold: 0,
      wood: 0,
      stone: 0,
      clay: 0,
      men: 0,

      monument: {
            time: 5
      },

}

function update() {
	$( document ).ready(function(){
      $(".gold").html(`<img src="src/gold.png">`+ "Gold: " + town.gold);
      $(".wood").html("Wood: " + town.wood);
      $(".stone").html("Stone: " + town.stone);
      $(".clay").html("Clay: " + town.clay);
      $(".men").html("Men: " + town.men);

      $(".monument .time").html(town.monument.time);


	})
	setTimeout(update, 1000);
}
update();

function build(x) {
      if (x.time>0) {
            x.time --
            setTimeout(build, 1000, x)
      }
      else{
            built(x)
      }
}
function built(x){
      switch(x){
            case town.monument:
            town.gold = 10;
            break;
      }
}
