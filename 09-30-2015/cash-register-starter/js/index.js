// WRITE CODE HERE
// To create a cash register

// A SUPER handy function that makes
// our normal values look pretty
// when we place them on the page


//set default value = 0 
//get value out of the box
//add value and update total and text above it.


function currencyFormat(number) {
    var currency = parseFloat(number);
    currency = currency.toFixed(2);
    currency = '$' + currency;
    return currency;
}

var total = 0;

$('form').on('submit', updateReceipt);

function updateReceipt() {
	event.preventDefault();
     
    var newEntry = $('input').val();

total = parseFloat(total) + parseFloat(newEntry);

fancyTotal = currencyFormat(total);
// 	$('#total').html(newEntry);
 $('#entries').append('<div>' + newEntry + '</div>');
 
 $('#total').html(fancyTotal);
};



