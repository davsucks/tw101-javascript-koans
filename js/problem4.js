"use strict";

/*
 Problem 4:

 Background:
 At present, currency notes in India are issued in the denomination of Rs.5, Rs.10, Rs.20, Rs.50, Rs.100, Rs.500 and
 Rs.1000.
 http://www.rbi.org.in/currency/faqs.html

 Problem statement:
 Write a program that will enable counting of money given in the form of Indian currency notes. The program must take
 a variable number of arguments. These arguments must be summed and the total must be displayed. For any input number
 that does not match a valid currency denomination, ignore the value and stop counting further, displaying the sum
 counted so far.

 Examples:

 Given Rs 10, 20, 100 notes
 When I count the money
 Then my total is Rs 130

 Given Rs 20, 50, 10, 20, 13, 500 notes
 When I count the money
 Then my total is Rs 100

*/

// Write your JavaScript here

function changeElementText(element, answer) {
    $(element).text(answer);
}

function isValidRupee(amount) {
    return (amount % 5 === 0 ||
            amount % 10 === 0 ||
            amount % 20 === 0 ||
            amount % 50 === 0 ||
            amount % 100 === 0 ||
            amount % 500 === 0 ||
            amount % 1000 === 0)
}

function countMoney() {
    var sum = 0;
    for (var index = 0; index < arguments.length; index++) {
        var currentAmount = arguments[index];
        if (isValidRupee(currentAmount)) {
            sum += currentAmount;
        } else {
            break;
        }
    }
    return sum;
}

function runProblemFourExercises() {
    changeElementText("#totalOne", countMoney(10, 20, 100));
    changeElementText("#totalTwo", countMoney(20, 50, 10, 20, 13, 500));
}

