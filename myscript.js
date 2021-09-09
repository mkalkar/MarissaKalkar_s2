// var attractions = {
//      id: "CSE457",
//      name: "Introduction to Visualization",
//      price: 65,
//      opening_days: true,
//      limited_access_children : true
// }

var attractions = [
    {
      id: "1",
      name: "Roller Coaster",
      price: 5,
      opening_days: ["Monday", "Wednesday", "Friday"],
      limited_access_children : true
    },
    {
      id: "2",
      name: "The Wild Thing",
      price: 5,
      opening_days: ["Monday", "Wednesday", "Friday"],
      limited_access_children : true
    },
    {
      id: "3",
      name: "Ferris Wheel",
      price: 10,
      opening_days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      limited_access_children : true
    }
];


// console.log(attractions[0].name);
// for(var i=0; i<attractions[1].opening_days.length; ++i){
//   console.log(attractions[1].opening_days[i]);
// }
// console.log(attractions[1].opening_days[0]);
// console.log(attractions[2].price / 2);
// Calling the function
var amusementRidesDouble = doublePrices(attractions);
//debugAmusementRides();

// Implementation of the function
function doublePrices(amusementRides) {
  for(var i=0; i<amusementRides.length; ++i){
     if(i !=1){
        amusementRides[i].price = amusementRides[i].price * 2;
     }
     //console.log(attractions[i].price);
  }

}

function debugAmusementRides(){
  for(var i=0; i<attractions.length; ++i){
        console.log("name: " + attractions[i].name + " " + "price: " + attractions[i].price);
        //console.log(amusementRides[i].price)
     //console.log(attractions[i].price);
  }
}
