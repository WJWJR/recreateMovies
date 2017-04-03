function createMovieListing () {
  let title = document.querySelector('.movieTitle');
     title.textContent = json.title;
  let poster_path = document.querySelector('img');
     poster_path.src = 'https://image.tmdb.org/t/p/w500' + json.poster_path;
  let overview = document.querySelector('.description');
    overview.textContent = json.overview;
  let release_date = document.querySelector('.openingDate');
    release_date.textContent = json.release_date;
  let popularity = document.querySelector('.following');
    popularity.textContent = json.popularity;
  let revenue = document.querySelector('.ticketSales');
    revenue.textContent = json.revenue;
  let runtime = document.querySelector('.duration');
    runtime.textContent = json.runtime;

  fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=" + key)
    .then(res => res.json())
    .then(obj => obj.results)
    .then(results => console.log(results));

}




// let classGitHub = ['conshus', 'tyjdavis', 'chrislebbano', 'filusmarvin', 'wjwjr', 'ddsheard', 'ochanya', 'jcr08'];
// var source   = document.querySelector("#github-user-template").innerHTML;
// var template = Handlebars.compile(source);
// let githubPromises = classGitHub.map(user => {
//   return fetch(`https://api.github.com/users/${user}`)
//    .then(object => object.json())
// })
// Promise.all(githubPromises).then(placeInTemplate);
//
// function placeInTemplate (githubUsers) {
//   var html   = githubUsers.map(user => template(user)).join('');
//   //the original, when context was just an object...
//   //var html = template(context);
//   var destination = document.querySelector('.handlebars-demo');
//   destination.innerHTML = html;
//}
// the html array will get joined by commas, unless you have the call to .join('') at the end
