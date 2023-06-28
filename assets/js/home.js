const watchlistIcon = document.querySelector(".watchlist-icon");

watchlistIcon.addEventListener("click", function () {
  // window.location.href = "mylist.html";
});
const bookmarkIcon = document.querySelector("#bookmark-icon");
const popup = document.querySelector("#popup");

document.getElementById("bookmark-icon").addEventListener("click", function () {
  if (this.classList.contains("bookmark-icon-1")) {
    this.classList.remove("bookmark-icon-1");
    this.classList.add("bookmark-icon");
  } else {
    this.classList.remove("bookmark-icon");
    this.classList.add("bookmark-icon-1");
  }
  popup.style.display = "block";
});
