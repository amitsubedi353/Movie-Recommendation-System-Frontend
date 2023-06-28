document.getElementById("rate_btn").addEventListener("click", function () {
  var selectedRating = document.querySelector('input[name="star"]:checked').value;

  console.log(selectedRating);

  const rating = async () => {
    const movieId = localStorage.getItem('movieId')
    params = {
      "ratingNumber": selectedRating,
      "movieId": movieId
    }
    let req = await request(
      "POST",
      "http://localhost:9595/rating/create",
      true,
      params
    );
    console.log(req)

    let msg=req?.status
document.querySelector(".messageDiv").textContent = msg;
  }
  rating();

});






