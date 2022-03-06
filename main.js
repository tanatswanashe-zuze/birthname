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

    function myCalc() {
        var CC1 = parseInt(CC).valueOf
        var YY1 = parseInt(YY).valueOf
        var MM1 = parseInt(MM).valueOf
        var DD1 = parseInt(DD).valueOf



    }
    var d = Number(((CC / 4) - 2 * CC1 - 1) + ((5 * YY1 / 4)) + ((26 * (MM1 + 1) / 10)) + DD1) % 7
    return d
    1
    var Gender = document.getElementById("Gender").value

    if (Gender == "Male") {
        var AkanName = "Kwasi"
    } else { AkanName = "Sbo" }
    var AkanNameM = kwasi





    document.getElementById("test").innerHTML = d
}