// Create a function that will be called when the user clicks on the button element you added to your HTML.
// This function should grab the values entered by the user from the input element and the select element.
// The function should then calculate the weight of the user on the selected planet, and show the weight to the user in the p element you added to your HTML.

/*
$("#btnCalculateWeight").click(function(){
var userWeight = S("#userWeight").val();
var planetText = $('#planetWeight option:selected').text();
var planetMultiplier = S('planetValue option:selected').val();
var weightOnPlanet = userWeight * planetMultiplier;

$("#output").text('If you were on') + ' + ' planetName 'you would weight' + weightOnPlanet 'lbs'
});



*/



















/*
function calculateweight() {
  var userWeight = document.getElementById('userWeight').value;
  var select = document.getElementById('planetWeight');
  var options select.options;
  var selectedOption = option [select.selectedIndex];
  var planetName = selectedOption.innerHTML;
  var planetMultiplier = selectedOption.value;
  var weightOnPlanet= userWeight * planetWeight;


}*/


     function weightCalculate(){  

var yourWeight = document.getElementById('weight').value;

var planet = document.getElementById('gravity').value;
var onPlanet= yourWeight * planet;
document.getElementById("userValue").innerHTML="You would weigh " + onPlanet + "pounds"
};


















/*
var planet = document.getElementById('gravity').value;

var button = document.createElement("button");
button.innerHTML = "Submit";
// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);
// 3. Add event handler
button.addEventListener ("click", function personsWeight() {
    var input = document.getElementById("weight").value;
    alert(input)
});
*/




 


