const username = "KimiaParmida";

const songArr = [
  {
    name: "Always",
    genre: "metal",
    singer: "isak",
    src: "../assets/images/Single_by_Sam_Smith.jpeg",
    favorite: false,
  },
  {
    name: "Hello",
    genre: "pop",
    singer: "adel",
    src: "../assets/images/Single_by_Sam_Smith.jpeg",
    favorite: true,
  },
  {
    name: "blinding lights",
    genre: "rock",
    singer: "the weekend",
    src: "../assets/images/Single_by_Sam_Smith.jpeg",
    favorite: true,
  },
  {
    name: "ocean eyes",
    genre: "rap",
    singer: "billie",
    src: "../assets/images/Single_by_Sam_Smith.jpeg",
    favorite: false,
  },
];

let favArr = [
  {
    name: "Always",
    genre: "metal",
    singer: "isak",
    src: "../assets/images/Single_by_Sam_Smith.jpeg",
    favorite: true,
  },
  {
    name: "Hello",
    genre: "pop",
    singer: "adel",
    src: "../assets/images/Single_by_Sam_Smith.jpeg",
    favorite: true,
  },
  {
    name: "ocean eyes",
    genre: "rap",
    singer: "billie",
    src: "../assets/images/Single_by_Sam_Smith.jpeg",
    favorite: true,
  },
];

const username_html = document.getElementById("username");
const songList = document.getElementById("songCards");
const favList = document.getElementById("favCards");

username_html.innerHTML = username;
makeList();

function makeList() {
  songArr.forEach((song) => createSongList(song));
  favArr.forEach((favItem) => createFavList(favItem));
}

function createSongList(song) {
  const likeIconSrc=heartIconSrc(song);
  songList.innerHTML += addCard(likeIconSrc,song);
}

function addCard(likeIconSrc,song) {
  return `<div class="card">
                              <a href="Song.html">
                                  <img src=${song.src} alt="Avatar" style="width:100%"/>
                              </a>
                              <div class="container">
                                <h4>
                                 <a href="Song.html"><b>${song.name}</b></a>
                                </h4>
                              <img
                                src=${likeIconSrc}
                                class="favorite"
                                width="30"
                                height="27"
                                alt="Add to favorite"
                                />
                              <p>${song.singer}</p>
                            </div>
                          </div>`;
}

function createFavList(favItem) {
  const likeIconSrc=heartIconSrc(favItem);
  favList.innerHTML += addCard(likeIconSrc,favItem);
}

function heartIconSrc(song) {
  if (!song.favorite)
    return  "../assets/images/heart.png";

  return  "../assets/images/filled-heart.png";
}
