let piano = createPianoElement();

document.getElementsByTagName("body")[0].appendChild(piano);

let keysElement = createDivElement("keys");
piano.appendChild(keysElement); 

let blackKeysElement = createDivElement("black-keys");
keysElement.appendChild(blackKeysElement); 

let whiteKeysElement = createDivElement("white-keys");
keysElement.appendChild(whiteKeysElement); 

for (tree = 0; tree < 10; tree++) {
  let eachBlackKeysElement = createDivElement("key black-key");

  blackKeysElement.appendChild(eachBlackKeysElement); 
}

for (tree = 0; tree < 14; tree++) {
  let eachWhiteKeysElement = createDivElement("key white-key");

  whiteKeysElement.appendChild(eachWhiteKeysElement); 
}

function createPianoElement() {
  let pianoElement = document.createElement("div"); 
  pianoElement.id = "piano"; 

  return pianoElement;
}

function createDivElement(className) {
  let divElement = document.createElement("div"); 
  divElement.className = className; 

  return divElement;
}

const pianoKeys = document.querySelectorAll(".key");

function playSound(url) {
  new Audio(url).play();
}

pianoKeys.forEach((pianoKey, index) => {
 
  const keyNumber = index < 9 ? "0" + (index + 1) : index + 1;

  const newUrl = `24-piano-keys/key${keyNumber}.mp3`;
  pianoKey.addEventListener("click", () => playSound(newUrl));
});
