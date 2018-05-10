window.onload = function() {
  let answers = ["1", "2", "3", "4"],
    tot = answers.length;

  function getCheckedValue(radioName) {
    let radios = document.getElementsByName(radioName); // Get radio group by-name
    for (let i = 0; i < radios.length; i++)
      if (radios[i].checked) return radios[i].value; // return the checked value
  }

  function getScore() {
    var score = 0;
    for (var i = 0; i < tot; i++)
      if (getCheckedValue("question" + i) === answers[i]) score += 1; // increment only
    return score;
  }

  function correctAnwser () {
    
  }

  function returnScore() {
    alert("Your score is " + getScore() + "/" + tot);
  }
}
