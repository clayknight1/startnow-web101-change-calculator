
function calculateChange() {
    const total = $('#amount-due').val();
    const paid = $('#amount-received').val(); 
    const amountToChange = (paid - total).toFixed(2);
    const amountFloor = Math.floor(amountToChange);
    const decimalAmount = (amountToChange % 1).toFixed(2);
    const quarterAmount = Math.floor(decimalAmount / .25);
    const dimeAmount = Math.floor((decimalAmount - (quarterAmount *  .25)) / .10);
    const nickelAmount = Math.floor((decimalAmount - ((quarterAmount * .25) + (dimeAmount * .1))) / .05);
    const pennyAmount = Math.round((decimalAmount - ((quarterAmount * .25) + (dimeAmount * .1) + (nickelAmount * .05))) /.01);
    $('#dollars-output').text(amountFloor);
    $('#quarters-output').text(quarterAmount);
    $('#dimes-output').text(dimeAmount);
    $('#nickels-output').text(nickelAmount);
    $('#pennies-output').text(pennyAmount);
    $('#test').text(decimalAmount);
}

$('#calculate-change').on('click', function(){
    calculateChange();
})