var bag = document.getElementById("bag-icon");
var bagItems = document.getElementById("bag-items");
var body = document.getElementById("body");

bagItems.style.display = "none";

bag.addEventListener("click", () => {
  if (bagItems.style.display === "none") {
    bagItems.style.display = "block";
  } else {
    bagItems.style.display = "none";
  }
});
