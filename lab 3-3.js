/* By Aiden Baker. 
License to Aiden Baker using GNU GPLv3
https://choosealicense.com/licenses/gpl-3.0/
*/

function MonthName(MonthNum) {
    //above we made a "custom block" named MonthName with Inputs MonthNum
    switch(MonthNum) {
        case 1: return "January";
        case 2: return "February";
        case 3: return "March";
        case 4: return "April";
        case 5: return "May";
        case 6: return "June";
        case 7: return "July";
        case 8: return "August";
        case 9: return "September";
        case 10: return "October";
        case 11: return "November";
        case 12: return "December";
        default: return "That doesn't seem quite right..."; //might replace default with an error or something.
    }
};

function DayName(DayNum) {
    //make the DayName function
    switch(DayNum) {
        case 1: return "Sunday";
        case 2: return "Monday";
        case 3: return "Tuesday";
        case 4: return "Wednesday";
        case 5: return "Thursday";
        case 6: return "Friday";
        case 7: return "Saturday";
        default: return "That doesn't seem quite right...";
    }
};

function DaysIn(MonthName) {
    //DaysIn function
    switch(MonthName) {
        case "January":
        case "March":
        case "May":
        case "July":
        case "August":
        case "October":
        case "December": return 31;
        case "February": return 28;
        case "April":
        case "June":
        case "September":
        case "November": return 30;
    }
};

function IsLeapYear(Year) {
    if(Year%400==0 || Year%4==0 && Year%100!=0) {
        return true;
    }
    else{
        return false;
    }
};

let YearInput = prompt("Enter a year");
let MonthInput = prompt("Enter month (number)");
