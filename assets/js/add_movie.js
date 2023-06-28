document.getElementById("add_movie").onclick = function () {
  let movieTitle = document.getElementById("movieTitle").value;
  let movieDescription = document.getElementById("movieDescription").value;
  let genreType = document.getElementById("genreType").value;
  let file = document.getElementById("file").files[0];
  console.log(file)
  let releaseDate = document.getElementById("releaseDate").value;
  let params = {
    "file": file,
    "movieDto": {
      "movieTitle": movieTitle,
      "movieDescription": movieDescription,
      "genreType": genreType,
      "releaseDate": releaseDate,
      "userId": 1
    }
  };

  const addMovie = async () => {
    const fd = new FormData();
    fd.set('file', file);
    const detail = JSON.stringify(params.movieDto)
    fd.set('movieDto', detail)
    let req = await request(
      "POST",
      "http://localhost:9595/movie/create",
      true,
      fd
    );
    let status = req.status;

    if (Number(status) === 200) {
      window.location.reload();
      console.log('success')
    }
    else {
      alert('Cannot login')
    }
  }
  addMovie();

}
