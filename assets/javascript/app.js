//create an onClick event for our start button to launch the game

//create our game page//
var quiz = {
	
	//create timer OBJECT
	//Display a countdown timer
	timer: function(){
		setInterval(function() {
			var count = 30;
			this.count=this.count-1;
  			if (this.count <= 0)
  		
     	clearInterval(count);
     //counter ended, do something here
     	return;
  	    				
		}, 1000);

		console.log(this.timer);
	}
		//onclick timer must launch countdown
		//onclick timer must stop when DONE button clicked
			//@TODOcreate DONE button
	//Display list of trivia questions
		//Ordered list questions with radio button options
			//create radio buttons OBJECT
				//if selects right answer, add to CORRECT field
				//if else wrong answer, add to INCORRECT field
		//DONE button
};
quiz.timer();
$("#count-down").on("click", quiz.timer());{
}



			//create onClick event, when clicked
					//display RESULTS page
					//
	//to have the game show up after the button click
		//$('#overlay button').on('click', function(event) {
     	//$('#overlay').hide();});

	//do i need an onSubmit or onClick to return value, alert and/orthen change to console.log
		//$("#stopTimer").on('click', getScore());
 	//to get the radio button score
 		//getScore: function(){
        //$('input[name="species"]:checked').value;}
    //travis setup help
    var quiz1 = {
  		questionOne : {
    		"questionText" : "blah",
    		"answers": [1, 2, 3, 4],
    		"correctAnswer": 1 
  		},
  		timer: function() {

  		},
  stopTimer: function() {
  },
  init: function() {
    this.timer();
  },
  end: function() {
    this.stopTimer();
  }
};

$('.start-game').on('click', function(){
  quiz.init();
});

$('.end-game').on('click', function(){
  quiz.end();
});