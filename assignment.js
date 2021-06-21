// https://github.com/ARFaisalweb/Javascript-problem-solving-assignment

//Task no :- 01. Kilometer To Meter Converter Function.
function kilometerToMeter(n) {
  var kilometer = 0;
  if (n < 0) {
    return "Distance value should be positive. Pls, put a valid number";
  } else {
    //Here converting kilometer to meter. We know that, 1 kilometer = 1000 meters.
    var kilometer = n * 1000;
  }
  return kilometer;
}
var result = kilometerToMeter(3.9);
console.log("Meter : ", result);

// Task no :- 02. Budget Calculator Function.
function budgetCalculator(numberOfWatchs, numberOfPhones, numberOfLaptops) {
  if ((numberOfWatchs < 0, numberOfPhones < 0, numberOfLaptops < 0)) {
    return "You should give a valid number";
  } else {
    var totalCost =
      numberOfWatchs * 50 + numberOfPhones * 100 + numberOfLaptops * 500;
    return totalCost;
  }
}
var totalCost = budgetCalculator(6, 3, 3);
console.log("Total budget:", totalCost);

//Task no :- 03. Hotel Cost Calculator Function.
function hotelCost(hotelStayDays) {
  var totalCost = 0;
  if (hotelStayDays < 0) {
    return "You should input a valid value. Pls, put a valid number.";
  } else if (hotelStayDays <= 10) {
    //10 days stay.
    totalCost = hotelStayDays * 100;
  } else if (hotelStayDays <= 20) {
    //20 days stay.
    var firstTenDaysCost = 10 * 100;
    var remainingDays = hotelStayDays - 10;
    var remainingDaysCost = remainingDays * 80;
    totalCost = firstTenDaysCost + remainingDaysCost;
  } else {
    //20 more days stay.
    var firstTenDaysCost = 10 * 100;
    var secondTenDaysCost = 10 * 80;
    var remainingDays = hotelStayDays - 20;
    var remainingDaysCost = remainingDays * 50;
    totalCost = firstTenDaysCost + secondTenDaysCost + remainingDaysCost;
  }
  return totalCost;
}
var totalRentCost = hotelCost(17);
console.log("Total hotel rent cost:", totalRentCost);

//Task no :- 04. Mega Friend Function.
var friends = [
  "Saif",
  "Tahsin",
  "Abdullah",
  "Kawser",
  "Mansoor",
  "Mahmudullah",
  "Nazrul",
];
function megaFriend(aray) {
  if (aray.length == 0) {
    return "You should insert a value.";
  } else {
    var longest = "";
    for (var i = 0; i < aray.length; i++) {
      var friend = aray[i].length;
      if (friend > longest) {
        longest = friend;
        var longestName = aray[i];
      }
    }
    return longestName;
  }
}
var result = megaFriend(friends);
console.log("Longest friend name:", result);
