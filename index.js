// GET OUTPUT FROM QUIZ
//Gather all clicked data and put into Array
function getRadioValue(name) {
let array = []
let selected = document.querySelectorAll('input[type=radio]:checked')

for (let i = 0; i < selected.length; i++) {
  array.push(selected[i].value)
}

return array;
}

//check if all Four questions are anwsered.
// If not complete quiz
// else count most clicked city
function checkArrayLength(array){
  let pickedArray = getRadioValue(array);
  if (pickedArray.length < 4) {
    return "System need all sections anwsered. Please complete quiz."
  } else {
    return largestCount(pickedArray);
  }
}

//put data into an object to easily count cities
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

//Return most clicked city
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

  if (cityMostClicked === undefined) {
    return "System need all sections anwsered. Please complete quiz."
  } else {
    return "You should visit " + cityMostClicked + ".";
  }
}

  //google search flights & hotels
(function() {
  var cx = '014638102533477823949:vpgpc-lujag';
  var gcse = document.createElement('script');
  gcse.type = 'text/javascript';
  gcse.async = true;
  gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(gcse, s);
})();
