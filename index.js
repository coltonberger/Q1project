// var answers = ["NY","NY","NY","NY"],
//     tot = answers.length;
//
// function getCheckedValue( radioName ){
//     let radios = document.getElementsByName( radioName ); // Get radio group by-name
//     for(var y=0; y<radios.length; y++)
//       if(radios[y].checked) {
//       return radios[y].value; // return the checked value
//     }
// }
//
// function getScore(){
//   var score = 0;
//   for (var i=0; i<tot; i++)
//     if(getCheckedValue("question"+i)===answers[i]){
//       console.log(getCheckedValue("question"+i))
//       score += 1; // increment only
//     }
//   return score;
// }
//
// function returnScore(){
//   alert("Your score is "+ getScore() +"/"+ tot);
// }

function getRadioValue(name) {
var array = []
var selected = document.querySelectorAll('input[type=radio]:checked')

for (var i = 0; i < selected.length; i++) {
  array.push(selected[i].value)
}
return array;
}

function countCityFequency(array){
  let selectedValues = getRadioValue(array);
  let countCity = {};

  for (let j = 0; j < selectedValues.length; j++){
    let city = selectedValues[j];
    if (countCity[city] === undefined) {
      countCity[city] = 1;
    } else {
      countCity[city]++;
    }
  }

  return countCity;
}

function largestCount(object){
  let obj = countCityFequency(object);
  let max = 0;
  let cityMostClicked;

  for(let city in obj) {
    let count = obj[city]
    if (count > max){
      max = count;
      cityMostClicked = city;
    }
  }
  return cityMostClicked;
}
