"use strict"
console.log("you are online!")

function calcBMI() {
	// body...
	if (document.getElementById("heightft") == "" || document.getElementById("heightin").value == "" || document.getElementById("weight") == "" ) {
		alert("Error. Please enter a value")
		console.log("error. value not entered in one or more textboxes.")
	}
	else {
		let heightft = parseFloat(document.getElementById("heightft").value)
		console.log("height in feet is " + heightft)


		let heightin = parseFloat(document.getElementById("heightin").value)
		console.log("height in inches is " + heightin)

		let heighttotal = (heightft * 12) + heightin
		console.log("total height in inches is " + heighttotal)
		
		let weight = parseFloat(document.getElementById("weight").value)
		console.log("weight in pounds is " + weight)

		let bmi = (weight * 703) / (heighttotal ** 2)
		console.log("BMI is " + bmi)
		document.getElementById("bmi").innerHTML = bmi
	}
}

function reset() {
	// body...
	document.getElementById("heightft").value = "";
	document.getElementById("heightin").value = "";
	document.getElementById("weight").value = "";
	document.getElementById("bmi").innerHTML = "0";
}
// developed by giovanni borceguin