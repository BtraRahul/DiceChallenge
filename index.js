function setAndReturnWinner() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var source1 = "images/dice" + randomNumber1 + ".png";
  var source2 = "images/dice" + randomNumber2 + ".png";

  document.querySelectorAll("img")[0].setAttribute("src", source1);
  document.querySelectorAll("img")[1].setAttribute("src", source2);

  if (randomNumber1 > randomNumber2)
    document.querySelectorAll("h1")[0].textContent = "Player 1 Wins";
  else if (randomNumber1 < randomNumber2)
    document.querySelectorAll("h1")[0].textContent = "Player 2 Wins";
  else document.querySelectorAll("h1")[0].textContent = "Draw";
}

setAndReturnWinner();
// function selectImage(className, num) {
//   if (num == "1")
//     document
//       .querySelector(".className ")
//       .setAttribute("src", "/images/dice1.png");
//   if (num == "2")
//     document
//       .querySelector(".className ")
//       .setAttribute("src", "/images/dice2.png");
//   if (num == "3")
//     document
//       .querySelector(".className ")
//       .setAttribute("src", "/images/dice3.png");
//   if (num == "4")
//     document
//       .querySelector(".className ")
//       .setAttribute("src", "/images/dice4.png");
//   if (num == "5")
//     document
//       .querySelector(".className ")
//       .setAttribute("src", "/images/dice5.png");
//   if (num == "6")
//     document
//       .querySelector(".className")
//       .setAttribute("src", "/images/dice6.png");
// }

// selectImage(img1, randomNumber1);
// selectImage(img2, randomNumber2);
// document.querySelector("img1").setAttribute("src", "path1");
// document.querySelector("img2").setAttribute("src", "path2");
