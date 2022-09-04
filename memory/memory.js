const cards = document.addEventListener("DOMContentLoaded", () => {
  cardArray = [
    {
      name: "cupcake",
      img: "images/cupcake.jpg",
    },
    {
      name: "cupcake",
      img: "images/cupcake.jpg",
    },
    {
      name: "dog",
      img: "images/dog.png",
    },
    {
      name: "dog",
      img: "images/dog.png",
    },
    {
      name: "icecream",
      img: "images/icecream.jpg",
    },
    {
      name: "icecream",
      img: "images/icecream.jpg",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "rainbow",
      img: "images/rainbow.png",
    },
    {
      name: "rainbow",
      img: "images/rainbow.png",
    },
    {
      name: "unicorn",
      img: "images/unicorn.jpg",
    },
    {
      name: "unicorn",
      img: "images/unicorn.jpg",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  //? create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement("img");

      card.style.cursor = "pointer";

      card.setAttribute("src", "images/close.jpg");

      card.setAttribute("data-id", i);

      card.addEventListener("click", flipCard);
      
      grid.appendChild(card);
    }
  }

  function checkForMatch() {
    let cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId === optionTwoId) {
      alert("Ai ai, a mesma imagem não conta !");

      cards[optionOneId].setAttribute("src", "images/close.jpg");
      cards[optionTwoId].setAttribute("src", "images/close.jpg");

    } else if (cardsChosen[0] === cardsChosen[1]) {

      alert("Boa! Encontraste 2 iguais! Continua 🌹 ");

      cards[optionOneId].setAttribute("src", "images/check.jpg");
      cards[optionTwoId].setAttribute("src", "images/check.jpg");

      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)

      cardsWon.push(cardsChosen);
    }
    else {
      cards[optionOneId].setAttribute("src", "images/close.jpg");
      cards[optionTwoId].setAttribute("src", "images/close.jpg");

      alert("Ups, tenta outra vez... ");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;

    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent =
        " Parabéns! Encontraste-os todos! 🎆  ✨";
    }
  }

  function flipCard() {
    let cardId = this.getAttribute("data-id");

    cardsChosen.push(cardArray[cardId].name);

    cardsChosenId.push(cardId);

    this.setAttribute("src", cardArray[cardId].img);

    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
