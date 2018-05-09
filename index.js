window.onload = function() {
  let selected = document.querySelectorAll("li");
  for (let i = 0; i < selected.length; i++){
    let clicked = selected[i];
    clicked.addEventListener("click", namedFunction);
  }
  function namedFunction(event){
  let elem = document.querySelector("class")
    if(elem) {
      elem.className = "";
    }
      this.className = "selected"

  }
}
