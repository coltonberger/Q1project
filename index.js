window.onload = function() {
  let allListItems = document.querySelectorAll("li");
  console.log(allListItems)
  allListItems.forEach((listItem) =>{
    listItem.addEventListener("click", namedFunction);
  });

    function namedFunction(event){
      let elem = document.querySelector(".selected")
      if(elem) {
      elem.className = "";
      }
      this.className = "selected"
      }
}
