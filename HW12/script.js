const url = "https://swapi.dev/api";
const secondMain = document.getElementById("episodes");
const button = document.getElementById("button");
const moviePosters = {
  1: "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
  2: "https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_.jpg",
  3: "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_.jpg",
  4: "https://static.posters.cz/image/750/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82%D0%B8/star-wars-a-new-hope-one-sheet-i28733.jpg",
  5: "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
  6: "https://cloud.vistaapps.elcapitantheatre.com/CDN/media/entity/get/FilmPosterGraphic/h-HO00000182",
};




//=========================================================================================
async function getInfOfEpisode() {
  secondMain.innerHTML = "";

  const results = (await (await fetch(`${url}/films`)).json()).results;

  for (let i = 0; i < results.length; i++) {
    const { release_date, title, episode_id } = results[i];

    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "newDiv");
    secondMain.appendChild(newDiv);

    newDiv.innerHTML = `
     <h2>Частина ${episode_id} :  ${title}</h2>
     <img src = ${moviePosters[episode_id]}></img>
     <h2>Випуск: ${release_date}</h2>
     <button class="infoBut" onclick="getInfOfSomeEpisode(${episode_id})" >Інформація про акторів</button>`;
  }

}

async function getInfOfSomeEpisode(person) {
  secondMain.innerHTML = `
        <button
          class="backButton"
          onclick="getInfOfEpisode()"
        >
          Назад
        </button>
    `;

  let newRes = 0;
  if (person == 6 || person == 5 || person == 4) {
    newRes = person - 3;
  } else {
    newRes = person + 3;
  }

  const res = await (await fetch(`${url}/films/${newRes}`)).json();
  for (let i = 0; i < res.characters.length; i++) {
    const person = await (await fetch(res.characters[i])).json();
    const newDiv = document.createElement("div");
    const newEl = document.createElement("h2");
    newDiv.setAttribute("class", "newDiv");

    secondMain.appendChild(newDiv);
    newDiv.appendChild(newEl);

    let name = person.name;
    let gender = person.gender;
    let dateBirth = person.birth_year;
    newEl.innerHTML = `
     <h3> Ім'я: ${name}</h3>
     <img src = "" class="img" id = "${name}" />
     <p>Стать: ${gender}</p>
     <p>Дата народження: ${dateBirth}</p>
    `;
    getImgPerson(name);
  }
}

async function getImgPerson(name) {
  await fetch("https://akabab.github.io/starwars-api/api//all.json")
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      let character = response.find((val) => val.name === name);
      if (character.image) {
        document.getElementById(name).src = character.image;
      }
    });
}


//============================================================================================================================================
const ctnPlanets = document.getElementById("ctn-main");
const planetsPrevious = document.getElementById("planets-previous");
const planetsNext = document.getElementById("planets-next");

let URL_Planets = "https://swapi.dev/api/planets/?page=1";
let nextPlanets;
let previousPlanets;

planetsPrevious.addEventListener("click", pagePreviousPlanets);
planetsNext.addEventListener("click", pageNextPlanets);


// Планети
async function fetchPlanets() {
  document.querySelector('.overlay').classList.add('active');
  let results = await fetch(URL_Planets);
  const data = await results.json();
  nextPlanets = data.next;
  previousPlanets = data.previous;
  let planets = data.results;
  let outPut = ' ';
  document.querySelector('.overlay').classList.remove('active');
  planets.forEach(item => {
    outPut += `<div class="card card-planet">
                  <h2>${item.name}</h2>
                  
               </div>`
  })
  ctnPlanets.innerHTML = outPut;
}

function pageNextPlanets() {
  if (nextPlanets) {
    URL_Planets = new URL(nextPlanets);
  }
  fetchPlanets()
    .then(response => {
      console.log(`Success: Planets`);
    })
    .catch(error => {
      console.log(`error!`)
      console.error(error)
    });
}

function pagePreviousPlanets() {
  if (previousPlanets) {
    URL_Planets = new URL(previousPlanets);
  }
  fetchPlanets()
    .then(response => {
      console.log(`Success: Planets`);
    })
    .catch(error => {
      console.log(`error!`)
      console.error(error)
    });
}

//============================================================================================================================================




















