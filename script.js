/* 1/28/2021 Troll Game Project */

// definition of the trollGame() function which runs the game
function trollBattle() {
	// Initial prompt question for the user which gets stored in a variable
	 var action = window.prompt("You're walking through the dark forest minding your own business and a troll suddenly appears!\n\nDo you FIGHT the troll?\n\nDo you RUN from the troll?\n\nDo you BRIBE the troll?").toUpperCase();

	 // Switch statement to handle the inital player's choice
	 switch(action){
	 	case "FIGHT": {
	 		var skill = window.prompt("Are you a skilled fight? (YES or NO)").toUpperCase();
	 		var strong = window.prompt("Are you stronger than a troll? (YES or NO)").toUpperCase();
	 		// if statement that analyses the user's responses
	 			if(skill === "YES" || strong === "YES") {
	 				// the user responded yes to at least of those prompts
	 				// write the positive results to the document
	 				document.getElementById("result").innerHTML = "You can be either stronger or more skilled than a troll to survive!<br/>You live another day!";
	 				// clear any losing messages from the document
	 				document.getElementById("death").innerHTML = "";
	 				// play the winning audio file
	 				document.getElementById("win").play();
	 		} else {
	 			// the use responded NO to BOTH of the prompts
	 			// write the negative result to the document
	 			document.getElementById("death").innerHTML = "You're not skilled or strong? Why did you fight a troll?<br/>You have died!";
	 			// clear any positive message from the document
	 			document.getElementById("result").innerHTML = "";
	 			// play the losing audo file
	 			document.getElementById("lose").play();
	 		}
	 		break;
	 	}
	 	case "RUN": {
	 		var fast = window.prompt("Are you fast? (YES or NO)").toUpperCase();
	 		// if statement that analyses the user's response
	 			if(fast === "YES"){
	 				// write the positive results to the document
	 				document.getElementById("result").innerHTML = "Your speed has allowed you to survive!<br/>But can live with your cowardice?";
	 				// clear any losing messages from the document
	 				document.getElementById("death").innerHTML = "";
		 			// play the winning audio file
		 			document.getElementById("win").play();
	 		} else {
	 			// write the negative result to the document
	 			document.getElementById("death").innerHTML = "You coward! If you're going to run, at least be fast!<br/>You have died...";
	 			// clear any positive message from the document
	 			document.getElementById("result").innerHTML = "";
	 			// play the losing audo file
	 			document.getElementById("lose").play();
	 		}
	 		break;
	 	}


	 	case "BRIBE": {
	 		var money = window.prompt("You have to pay the troll-toll.\nDo you have any money? (YES or NO)").toUpperCase();
	 		// if the statement that checks the value of the money variable. If they say yes, continue asking how much
	 		if(money === "YES") {
	 			var amount = window.prompt("How much money do you have?\nPlease enter a NUMERIC VALUE.").toUpperCase();
	 			// convert the string you get from the prompt to an integer
	 			amount = parseInt(amount);
	 			// Check to see if the amount is enough to survive
	 			if(amount > 50) {
	 				// write the positive results to the document
	 				document.getElementById("result").innerHTML = "Great job! The troll is happy.<br/>You can pass with your life!";
	 				// clear any losing messages from the document
	 				document.getElementById("death").innerHTML = "";
	 				// play the winning audio file
	 				document.getElementById("win").play();
	 			} else {
	 				// you don't have enough money and you lose
	 				
	 				// write the negative result to the document
	 				document.getElementById("death").innerHTML = "The troll needs more money than that to let you pass!<br/>You have died...";
	 				// clear any positive message from the document
	 				document.getElementById("result").innerHTML = "";
	 				// play the losing audo file
	 				document.getElementById("lose").play();
	 				}
				}
				break;
	 	}

	 	default: {
	 		// the user has NOT entered a valid choice to the initial prompt
	 		window.prompt("You entered: " + action + ". Not a valid choice, please try again!");
	 		trollBattle();
	 		break;

	 	}
	 }// end of switch statement
	
	}

