"use strict";
function calcRemain(itemPrice, paid) {
  // Check if the paid less than the Item price
  if (paid < itemPrice) {
    document.write("****<br>**** Not valid price ****<br>****");
    return;
  }
  const currencies = [5, 10, 25, 50, 100];
  // ExpectedRemain // the total of money that should return to the user
  let expectedRemain = paid - itemPrice;
  const remainArray = [];
  while (expectedRemain > 0) {
    for (let i = currencies.length; i >= 0; i--) {
      if (expectedRemain >= currencies[i]) {
        remainArray.push(currencies[i]);
        expectedRemain -= currencies[i];
        break;
      }
    }
  }
  document.write("****" + remainArray + "****");
  if (expectedRemain === 0) {
    document.write(
      `<br> **** Your Order Done, Thank you for buying from us ****<br> ******** `
    );
  }
}

// Enter The item price in the first param, and the paid amount of money in the second param
//====================================================================
calcRemain(500, 820);
//====================================================================
