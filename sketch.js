// let mString = "";

// function preload() {
//   mString = loadStrings("./Tove.txt");
// }

// typewriter effect for mString0; bunched up text for mString1; mString2 linked to mouse

let mString0 =
  "P.S. How lovely to get your letter! I carry it with me everywhere.";
let mString1 =
  "Yes, I'd like to sit on the hill at Brunsan and get a cold backside and a red nose and eat an awkward orange that makes a mess of my gloves and step in a deep puddle and then go home to our balls of fluff and tumble into your arms and fall asleep with my whole head full of spring!";
let mString2 = "I love you!";
let charPos0 = 0;
let charPos1 = 0;
let charPos2 = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //getting the length of the first two strings to set time delay
  print(mString0.length);
  print(mString1.length);
  print(windowWidth)
}

function draw() {
  //referred to https://editor.p5js.org/pippinbarr/sketches/bjxEfpiwS for some of the typewriter code

  background(255, 255, 255); //bg here will prevent snail trail for type2 if desired
  let type0 = mString0.substring(0, charPos0);
  textWrap(CHAR);
  textSize(24);
  textFont(`Courier`);
  text(type0, 100, 100);
  charPos0 += 0.5;

  // need to delay start and wrap text for mString1 and mString 2

  // I want the list of things in mString1 to bunch up/collect at the right of the window

  let type1 = mString1.substring(0, charPos1);
  if (charPos0 >= 80) {
    textSize(24);
    textFont(`Courier`);
    let lines1 = mString1.split("")
    text(type1, 200, 200, windowWidth - windowWidth / 4);
    charPos1 += 0.5;
    
    // need to find a way to express if the first line has hit the right edge of the text box
    // if (charPos1 >= )
    

    //link type2 to mouse movement

    let type2 = mString2.substring(0, charPos2);
    if (charPos1 >= 285) {
      textSize(24);
      textFont(`Courier`);
      text(type2, mouseX, mouseY);
      charPos2 += 0.5;
    }
  }
}
