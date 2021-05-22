"use strict"

//create the data for the table here
var products = [
	{item: "burger", price: 3.50}, 
	{item: "fries", price: 1.25},
	{item: "drink", price: 1.00},
	{item: "chicken nuggets", price: 2.50}
];
//console.log("length is " + products.length);
//console.log(products[0]);
//console.log("item is " + products[0].item);
//console.log("price is " + products[0].price);

//create a variable for the html code
//to build the table
var tableHTML = "<table>" + 
				"<caption>MENU</caption>" + 
				"<tr><th>Item</th><th>Price</th></tr>";

//console.log(tableHTML);
for(var i = 0; i < products.length; i++){
	//add the rows for each product
	tableHTML += "<tr><td>" + products[i].item + 
				"</td><td>" + products[i].price + 
				"</td></tr>";
}
//add the rows for products
//close the table
//tableHTML = tableHTML + "</table>";
tableHTML += "</table>";
//console.log(tableHTML);
//display this table in the div in html
document.getElementById("menu").innerHTML = tableHTML;