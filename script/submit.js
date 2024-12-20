// document.getElementById("addMovieForm").addEventListener("submit", function(event) {
//     event.preventDefault();

//     var title = document.getElementById("movieTitle").value;
//     var releaseDate = document.getElementById("releaseDate").value;
//     var genre = document.getElementById("genre").value;
//     var imageFile = document.getElementById("imageUpload").files[0];

//     var reader = new FileReader();
//     reader.onload = function(event) {
//         var imageURL = event.target.result;

//         var movieList = document.querySelector(".movie-list");
//         var movieCard = document.createElement("div");
//         movieCard.className = "movie-card";
//         movieCard.innerHTML = `
//             <img src="${imageURL}" alt="${title}" class="movie-title">
//             <div class="movie-info">
//                 <h4>${title}</h4>
//                 <p>Release Date: ${releaseDate}</p>
//                 <p>Genre: ${genre}</p>
//             </div>
//         `;
//         movieList.appendChild(movieCard);
//     };

//     reader.readAsDataURL(imageFile);

//     document.getElementById("addMovieForm").reset();
// });
// Get the movie list element once and store it in a variable
document.getElementById("addMovieForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var title = document.getElementById("movieTitle").value;
    var releaseDate = document.getElementById("releaseDate").value;
    var genre = document.getElementById("genre").value;
    var imageFile = document.getElementById("imageUpload").files[0];

    var reader = new FileReader();
    reader.onload = function(event) {
        var imageURL = event.target.result;

        var movieList = document.querySelector(".movie-list");
        var movieCard = document.createElement("div");
        movieCard.className = "movie-card";
        movieCard.innerHTML = `
            <img src="${imageURL}" alt="${title}" class="movie-title">
            <div class="movie-info">
                <h4>${title}</h4>
                <p>Release Date: ${releaseDate}</p>
                <p>Genre: ${genre}</p>
            </div>
        `;
        movieList.appendChild(movieCard);
    };

    reader.readAsDataURL(imageFile);

    // Clear the form fields
    document.getElementById("movieTitle").value = "";
    document.getElementById("releaseDate").value = "";
    document.getElementById("genre").value = "";
    document.getElementById("imageUpload").value = "";
});