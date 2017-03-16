'use strict';
	
var steve;
var stevesLoan;
var month = 0;
var monthsUntilEvicted;

function loan () {
	var account = {
		borrowed: 550000,
		balance:286000,
		monthlyPayment: 1700,
		defaulted: 0,
		defaultsToForclose: 5,
		forclosed: false 
	};
	function missPayment() {
		account.defaulted ++;
		if(account.defaulted >= account.defaultsToForclose) {
			account.forclosed = true;

		}
		return {
			getBalance: function (){
				return account.balance;
			},
			recievePayment: function(amount){
				if(amount < account.monthlyPayment) {
					missPayment();
				}
				account.balance-=amount;
			}

		};

	}
  }
