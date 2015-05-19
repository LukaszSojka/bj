var Controllers1 = angular.module('Controllers1', []);
	
Controllers1.controller('ClickCtrl', ['$scope', 
	function($scope) {
		$scope.backToTop = function() {
		  $('html, body').animate({ scrollTop: 0 }, 'slow')
		};
	}]);   
	

Controllers1.controller('blackjack', ['$scope', '$http','$timeout',

	function($scope,$http,$timeout) {	
	
		var list1 = '';
		var cur = 0;				
		var cards_on_table = 0;	
		var casino_power = 0;	
		var player_power = 0;	
		
		//load and shuffle 
		$http.get('data/cards_pack.json').success(function(data) {

			cardsArr1 = JSON.parse(JSON.stringify(data));				
			shuffle(cardsArr1.cards);
			console.log(cardsArr1.cards);			
			cur=0					
			$("#game1_2").html('');		
			$scope.selected_card='';	
			$(".game1_1 img").css('visibility','hidden');
			list1 = '';	
			$scope.deck_shuffled='deck shuffled';			
			
			$scope.start_game();
		});

		$scope.remove_carts = function(obj) {
			
			$("#deck0").html('<div class="next_cart" id="next_cart_1"><div class="card_hidden"><div class="card_hidden1"><img src="images/site_logo_strapless.gif" /></div></div></div><div class="next_cart" id="next_cart_2"><div class="card_hidden"><div class="card_hidden1"><img src="images/site_logo_strapless.gif" /></div></div></div><div class="next_cart" id="next_cart_3"><div class="card_hidden"><div class="card_hidden1"><img src="images/site_logo_strapless.gif" /></div></div></div><div class="next_cart" id="next_cart_4"><div class="card_hidden"><div class="card_hidden1"><img src="images/site_logo_strapless.gif" /></div></div></div><div class="next_cart" id="next_cart_5"><div class="card_hidden"><div class="card_hidden1"><img src="images/site_logo_strapless.gif" /></div></div></div><div class="next_cart" id="next_cart_6"><div class="card_hidden"><div class="card_hidden1"><img src="images/site_logo_strapless.gif" /></div></div></div><div class="next_cart" id="next_cart_7"><div class="card_hidden"><div class="card_hidden1"><img src="images/site_logo_strapless.gif" /></div></div></div><div class="next_cart" id="next_cart_8"><div class="card_hidden"><div class="card_hidden1"><img src="images/site_logo_strapless.gif" /></div></div></div><div class="next_cart" id="next_cart_9"><div class="card_hidden"><div class="card_hidden1"><img src="images/site_logo_strapless.gif" /></div></div></div><div class="next_cart" id="next_cart_10"><div class="card_hidden"><div class="card_hidden1"><img src="images/site_logo_strapless.gif" /></div></div></div>');
			$scope.start_game();		
			$scope.you_bust='';		
			$scope.you_win='';	
			$scope.you_lost='';		
			$scope.draw='';		
			$scope.casino_bust='';			
		}
		
		//take next cart
		$scope.start_game = function(obj) {				
			
			//$scope.start_positions();
			
			cards_on_table = 0;	
			casino_power = 0;	
			player_power = 0;	
					
			$scope.bank_score=0;
			$scope.your_score=0;			
					
			//do first 4 steps automaticly		
			cur++;					
			cards_on_table+=1;	
			
			if (cards_on_table == 3 || cards_on_table == 5 || cards_on_table == 7 || cards_on_table == 9) {		
				casino_power=calculate_score(casino_power,cardsArr1.cards[cur].power/1);				
			} else if (cards_on_table == 2 || cards_on_table == 4 || cards_on_table == 6 || cards_on_table == 8 || cards_on_table == 10) {			
				player_power=calculate_score(player_power,cardsArr1.cards[cur].power/1);	
			} 
			next_cart(cards_on_table,casino_power,player_power,cur);					
					
			$scope.bank_score=casino_power;
			$scope.your_score=player_power;			
			
			$timeout(function(){				
			
				cur++;					
				cards_on_table+=1;	

				if (cards_on_table == 1 || cards_on_table == 3 || cards_on_table == 5 || cards_on_table == 7 || cards_on_table == 9) {		
					casino_power=calculate_score(casino_power,cardsArr1.cards[cur].power/1);	
				} else if (cards_on_table == 2 || cards_on_table == 4 || cards_on_table == 6 || cards_on_table == 8 || cards_on_table == 10) {			
					player_power=calculate_score(player_power,cardsArr1.cards[cur].power/1);	
				} 
				next_cart(cards_on_table,cur);				
					
				$scope.bank_score=casino_power;
				$scope.your_score=player_power;			
				
			}, 400);
						
			$timeout(function(){				
			
				cur++;					
				cards_on_table+=1;	

				if (cards_on_table == 1 || cards_on_table == 3 || cards_on_table == 5 || cards_on_table == 7 || cards_on_table == 9) {		
					casino_power=calculate_score(casino_power,cardsArr1.cards[cur].power/1);	
				} else if (cards_on_table == 2 || cards_on_table == 4 || cards_on_table == 6 || cards_on_table == 8 || cards_on_table == 10) {			
					player_power=calculate_score(player_power,cardsArr1.cards[cur].power/1);	
				} 
				next_cart(cards_on_table,cur);		
					
				$scope.bank_score=casino_power;
				$scope.your_score=player_power;			
				
			}, 800);			
			
			$timeout(function(){				
			
				cur++;					
				cards_on_table+=1;	

				if (cards_on_table == 1 || cards_on_table == 3 || cards_on_table == 5 || cards_on_table == 7 || cards_on_table == 9) {		
					casino_power=calculate_score(casino_power,cardsArr1.cards[cur].power/1);	
				} else if (cards_on_table == 2 || cards_on_table == 4 || cards_on_table == 6 || cards_on_table == 8 || cards_on_table == 10) {			
					player_power=calculate_score(player_power,cardsArr1.cards[cur].power/1);	
				} 
				next_cart(cards_on_table,cur);		
					
				$scope.bank_score=casino_power;
				$scope.your_score=player_power;			
				
			}, 1200);
		}
		
		//take next cart
		$scope.hit = function(obj) {				
				
			cur++;					
			cards_on_table+=1;	
			player_power=calculate_score(player_power,cardsArr1.cards[cur].power/1);	
			next_cart(cards_on_table,cur);				
			$scope.your_score=player_power;		
			
			if (player_power > 21) {
				console.log(player_power);
				$scope.yo_bust();
			}
		}
		
		//after stick casino move
		$scope.stick = function(obj) {	
				
			casino_power=calculate_score(casino_power,cardsArr1.cards[1].power/1);	
			
			uncover_first();				
			$scope.bank_score=casino_power;		
			
			cards_on_table=7;
			$scope.casino_move();
		}	
		
		$scope.casino_move = function(obj) {	
		
			if (casino_power < 17) {
				
				$timeout(function(){
				
					$scope.val = true	
					cur++;					
					cards_on_table++;	
					casino_power=calculate_score(casino_power,cardsArr1.cards[cur].power/1);	
					next_cart(cards_on_table,cur);				
					$scope.bank_score=casino_power;		
					
					$scope.casino_move();
					
				}, 800); 
				
			} else if (casino_power > 21) {
				
				$scope.ca_bust();
				
			} else {
				
				if (casino_power > player_power) {
					$scope.yo_lost();
				} else if (casino_power < player_power) {
					$scope.yo_win();
				} else if (casino_power == player_power) {
					$scope.draw();
				}
			}
		}	
		
		$scope.next_game = function(obj) {
			
			$scope.remove_carts();
		}			
		
		$scope.ca_bust = function(obj) {		
			$scope.casino_bust='CASINO BUST - you WIN! :) ';			
		}
		
		$scope.yo_bust = function(obj) {		
			$scope.you_bust='YOU BUST - casino WIN! :( ';			
		}
		
		$scope.yo_win = function(obj) {		
			$scope.you_win='YOU WIN! :) ';			
		}
		
		$scope.yo_lost = function(obj) {		
			$scope.you_lost='YOU LOST! :( ';			
		}
		
		$scope.draw = function(obj) {		
			$scope.draw='DRAW! :|';			
		}
		
	}]);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
  