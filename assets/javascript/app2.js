var game = {
  count: 30,
  
  timer: function () {
    if(this.count > 0) {
      console.log(game.count);
      this.count--;
    } else {
      clearInterval(this.counter);
    }
  },
  counter: function() {
    
    //we return the setInterval object to be found to this.counter
    return setInterval(function() {
      
      //since "this" is pointing to window, we have to pass the object's name
      game.timer();
      
    }, 1000);
  }
};

game.counter();


$("#count-down").text(game.count);
