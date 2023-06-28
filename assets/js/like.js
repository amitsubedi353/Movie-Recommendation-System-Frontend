const getLike = async () => {
    let req = await request(
      "GET",
      "http://localhost:9595/movie/read-all-movie",
      true
    );
  
  
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array; 
    }
    const like = req.data
    const shuffleVal=shuffleArray(like);
   const  shuffleValue=shuffleVal.slice(0, 5);
  
  
    const dataLike = shuffleValue.map(i => {
  
      return `
        <div class="col-2">
        <span class="editbtn" data_movie_id="${i.movieId}">
          <div class="card position-relative">
            <img src="http://localhost:9595/image/${i.movieId}" class="card-img-top" alt="...">
            <button id="bookmark-icon" class="bookmark-icon">
            <i class="fas fa-bookmark watchlist-icon position-absolute" style="top: 10px; right: 10px;"></i>
            </button>
            <div id="popup" class="hidden">
              Bookmark added!
            </div>
            <div class="card-body">
              <h5 class="card-title text-black text-truncate">${i.movieTitle}</h5>
               <p class="card-text text-truncate">${i.movieDescription}</p> 
              <!-- <a href="#" class="btn btn-success">Give rating</a>
                <a href="#" class="btn btn-success" data-toggle="tooltip" data-placement="top" title=" Added to a list">+
                </a> -->
            </div>
          </div>
   
        </div>
      `;
    });
  
  
  
    $(document).ready(function () {
      $(document).on("click", ".editbtn", function () {
        let movieId = $(this).attr("data_movie_id");
        localStorage.setItem('movieId', movieId);
  
        window.location.href = "moviePage.html";
      });
    });
  
    document.getElementById('like').innerHTML = dataLike.join("");
  
  };
  
  getLike();
  
  // document.getElementById("movie").onclick = function () {
  //   localStorage.setItem('movieId', data.movieId)
  
  
  // }
  