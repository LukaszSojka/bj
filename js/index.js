function shuffle(array) {
	
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}	

function next_cart(cards_on_table,cur) {	
	
	//400px
	if (cards_on_table == 1) {	
	
		var top_place=101;
		var right_place=980;
		
	} else if (cards_on_table == 2) {
		
		var top_place=400;
		var right_place=980;
		
	} else if (cards_on_table == 3) {
		
		var top_place=101;
		var right_place=800;
		
	} else if (cards_on_table == 4) {
		
		var top_place=400;
		var right_place=800;
		
	} else if (cards_on_table == 5) {		
		
		var top_place=400;
		var right_place=620
		
	} else if (cards_on_table == 6) {
		
		var top_place=400;
		var right_place=440;
		
	} else if (cards_on_table == 7) {
		
		var top_place=400;
		var right_place=260;
		
	} else if (cards_on_table == 8) {	
		
		var top_place=101;
		var right_place=620
		
	} else if (cards_on_table == 9) {
		
		var top_place=101;
		var right_place=440;
		
	} else if (cards_on_table == 10) {
		
		var top_place=101;
		var right_place=260;
	}
	
	
	if (cur == null) {			
	
		alert('Please shuffle!');	
		
	} else if (cur > 52) {		
	
		alert('No cards, Please shuffle!');	
		
	} else {		
				
		$( "#next_cart_"+cards_on_table ).animate({		
		
			top: top_place,
			right: right_place
			
		}, 500, function() {		  
		
			if (cards_on_table > 1) {
				$("#next_cart_"+cards_on_table).addClass('rotated1');
				setTimeout(function(){ 						
				
					$("#next_cart_"+cards_on_table).html('<img style="height:217px;width:150px;" src="images/'+cardsArr1.cards[cur].img+'" />');				
					$("#next_cart_"+cards_on_table).addClass('rotated2');	
					
				}, 250);
			}		
		});
	}
}

function uncover_first() {	

	$("#next_cart_1").addClass('rotated1');
	setTimeout(function(){ 						
	
		$("#next_cart_1").html('<img style="height:217px;width:150px;" src="images/'+cardsArr1.cards[1].img+'" />');				
		$("#next_cart_1").addClass('rotated2');	
		
	}, 250);	
}

function calculate_score(score,power) {	
	
	//as is 1 if score more than 11
	var end_score;
	if (score > 11 && power == 11) {
		end_score = score + 1;
	} else {
		end_score = score + power;	
	}
	return(end_score);
}
	


