const form = document.forms["search"];
//const [input, button] = form.elements;
const input = form.elements["searchInput"];
input.value = "Search here";

input.addEventListener("focus", function () {
  if (input.value === "Search here") {
    input.value = "";
  }
}, false);

input.addEventListener("blur", function () {
  if (input.value === "") {
    input.value = "Search here";
  }
}, false);

//console.table([input, button]);
form.addEventListener("submit", search, false);

function search(event) {
  console.log(1);
  alert("Submitted");
  event.preventDefault();
}
