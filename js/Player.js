class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }
  getCount(){
    var playCountRef = database.ref("playerCountRef");
    playCountRef("value", data =>{playCountRef = data.val})
  };

  updateCount(count){
    database.ref("/").update({playerCount : count})
  };

 }

