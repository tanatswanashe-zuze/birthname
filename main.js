//(d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7

//let CC = document.getElementById("date")
//let YY = document.getElementById ("date")
//let MM = document.getElementById("date")
//let dd = document.getElementById("date")


//let dd = getElementById("day");
//let year = getElementById("Year")
//let yy = year
//let MM = getElementById("Month")
//var today = new date()
//var birthdate = new date(datestring)
function myF() {
    var Year = document.getElementById("YEAR").value
    var MM = document.getElementById("MONTH").value
    var DD = document.getElementById("DAY").value
    var CC = Year.substr(0, 2)
    var YY = Year.substr(2.2)
    var Gender = document.getElementById("Gender").value

    if (Gender == "Male") {
        var AkanName = "Kwasi"
    } else { AkanName = "Sbo" }
    document.getElementById("test").innerHTML = AkanName
}




function myCalc() {

    return (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
}

console.log = "d"