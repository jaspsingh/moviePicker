$(document).ready( function() {
  // declare a bunch of variables
  let current3movies = [];
  baseUrl = "https://image.tmdb.org/t/p/original/";
  movie0 = document.getElementById("m-1")
  movie1 = document.getElementById("m-2")
  movie2 = document.getElementById("m-3")

  const Url = "https://api.themoviedb.org/3/discover/movie?api_key=19a46c6ef0acde95ddee46f5e8cac0c4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16";
  // If someone presses a key, do a function - $(window).keydown(keydownRouter);
  getRandom3Movies(Url);



});

//Implement functions
async function getRandom3Movies(Url) {
  let response = await $.ajax({
    url: Url,
    type: "GET",
    success: function(result) {
      return result;
    },
    error: function(error) {
      console.log('Error &{error}')
    }
  });
  console.log(response);

  // Pick movies (in this case, the top three)
  let movies = [];
  movies.push(response.results[0]);
  movies.push(response.results[10]);
  movies.push(response.results[19]);

  // Create three movies on the screen the user can see
  console.log("Movies" + movies);
  movie0.src = baseUrl + movies[0].poster_path;
  movie1.src = baseUrl + movies[1].poster_path;
  movie2.src = baseUrl + movies[2].poster_path;

  // Need a form a logic for storing what types a user has picked, and showing
  // a collection of similar ones. If the user doesn't like any of the similar ones, we show a different set of movies with other categories similar to the first movie they clicked.

}

function createItemDivString(itemIndex, imageString){
  return "<div id='i-" + itemIndex + "><img src='" + imageString + "'/></div>";
}

// // Call functions
// setInterval(
//   function()
//     {
//       current3movies = getRandom3Movies();
//       // Show these movies, start fading after 5 seconds
//
//       alert("Hello");
//     }, 10000);
