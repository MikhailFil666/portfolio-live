"use strict";

const gifs = [
  "apple-apple-cat.gif",
  "baby-on-tiger.gif",
  "cat-cute.gif",
  "cat-dance-happy-dance-cat.gif",
  "cat-dance.gif",
  "cat-meme-cat-dance.gif",
  "dose-dosecat.gif",
  "komik.gif",
  "silly-cat-dance-silly-gif-silly-cat-gif.gif",
  "voices-cat.gif",
];

const photo = document.querySelector(".stub__photo");
const cursorGif = document.getElementById("cursorGif");
let gifIndex = -1;

photo.addEventListener("mouseenter", () => {
  gifIndex = (gifIndex + 1) % gifs.length;
  cursorGif.src = "assets/zagl/" + gifs[gifIndex];
  cursorGif.classList.add("is-active");
});

photo.addEventListener("mousemove", (e) => {
  cursorGif.style.left = e.clientX + "px";
  cursorGif.style.top = e.clientY + "px";
});

photo.addEventListener("mouseleave", () => {
  cursorGif.classList.remove("is-active");
});
