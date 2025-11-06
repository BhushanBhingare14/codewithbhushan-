let movies = [
  {
    title: "bahubali",
    imageurl: "www.filmyfly.com",
    year: 2015,
  },
  {
    title: "kgf",
    imageurl: "www.filmyfly.com",
    year: 2018,
  },
  {
    title: "Dangal",
    imageurl: "www.filmyfly.com",
    year: 2017,
  },
];

function displaymovies() {
  movies.forEach((e, i) => {
    const moviediv = document.createElement("div");
    moviediv.classList.add("movie");
    const image = document.createElement("img");
    image.src = e.imageurl;
    image.alt = e.title;
    const title = document.createElement("h2");
    title.textContent = e.title;
    const para = document.createElement("p");
    para.textContent = e.year;
    moviediv.append(image, title, para);
    document.getElementById("library").appendChild(moviediv);
  });
}
displaymovies();
