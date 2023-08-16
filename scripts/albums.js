function hideButtons() {
    const albums = document.querySelectorAll("a");
    albums.forEach( e => {
        e.style.display = "none";
      });
}
function showNormal() {
    var normalTunes = document.getElementById("entriesNormal")
    var gameTunes = document.getElementById("entriesGame")
    var filmTunes = document.getElementById("entriesFilm")
    gameTunes.style.display = "none";
    filmTunes.style.display = "none";
    normalTunes.style.display = "flex";
}
function showGame() {
    var normalTunes = document.getElementById("entriesNormal")
    var gameTunes = document.getElementById("entriesGame")
    var filmTunes = document.getElementById("entriesFilm")
    normalTunes.style.display = "none";
    filmTunes.style.display = "none";
    gameTunes.style.display = "flex";
}
function showFilm() {
    var normalTunes = document.getElementById("entriesNormal")
    var gameTunes = document.getElementById("entriesGame")
    var filmTunes = document.getElementById("entriesFilm")
    gameTunes.style.display = "none";
    normalTunes.style.display = "none";
    filmTunes.style.display = "flex";
}