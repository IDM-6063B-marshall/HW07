//let mString = "";
//function preload() {
//mString = loadStrings("./Tove.txt");
// }
//with a relatively short text I found it easier to load the strings directly in the sketch window

// typewriter effect for mString0; bunched up text for mString1; mString2 linked to mouse

let mString0 =
  "P.S. How lovely to get your letter! I carry it with me everywhere.";
let mString1 =
  "Yes, I'd like to sit on the hill at Brunsan and get a cold backside and a red nose and eat an awkward orange that makes a mess of my gloves and step in a deep puddle and then go home to our balls of fluff and tumble into your arms and fall asleep with my whole head full of spring!";
let mString2 = "I love you!";
let charPos0 = 0;
let charPos1 = 0;
let charPos2 = 0;
let targetWord = "eat";
let velocity = 0.2;
let acceleration = 0.005;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //getting the length of the first two strings to set time delay
  print(mString0.length);
  print(mString1.length);
}

function draw() {
  //I referred to https://editor.p5js.org/pippinbarr/sketches/bjxEfpiwS for scaffolding for some of the typewriter code
  //background(255, 255, 255); //bg here will prevent snail trail for type2 if desired
  let type0 = mString0.substring(0, charPos0);
  textWrap(CHAR);
  textSize(24);
  textFont(`Courier`);
  text(type0, 100, 100, windowWidth - windowWidth / 3);
  charPos0 += 0.2;

  //delay start and wrap text for mString1 and mString 2

  let type1 = mString1.substring(0, charPos1);
  if (charPos0 >= 80) {
    textSize(24);
    textFont(`Courier`);
    text(type1, 200, 200, windowWidth - windowWidth / 3);
    velocity += acceleration;
    charPos1 += velocity;

    //want mString1 to speed up to convey excitement; explored some code for velocity here: https://editor.p5js.org/Alizarin/sketches/1Gfsnas9A

    //link type2 to mouse movement and crowd the screen w/ love

    let type2 = mString2.substring(0, charPos2);
    if (charPos1 >= 350) {
      textSize(42);
      textFont(`Courier`);
      text(type2, mouseX, mouseY);
      charPos2 += 1;
    }
  }
}
