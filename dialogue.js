// These arrays represent character sprites. The first item in the array is the url of the sprite sheet. 
// The second is the background-position-x used to show the specific sprite you want, and the third is the background-position-y. 
const LINDA = ["./characters/linda.png", 0, 0];
const QUEEN = ["./characters/queen.png", 0, 0];
const QUEEN_MOTHER = ["./characters/queen_mother.png", 0, 0];
const SISTER = ["./characters/sister.png", 0, 0];
const NIECE = ["./characters/niece.png", 0, 0];
const NEPHEW = ["./characters/nephew.png", 0, 0];
const KING = ["./characters/king.png", 0, 0];
const PRIEST = ["./characters/priest.png", 0, 0];
const ROMAN = ["./characters/roman.png", 0, 0];



// This is just a constant that checks if the game is over. 
const FINISH = "FINISH";

const DIALOGUE_CONTENT = [
  // INTRODUCTION
  {
    id: 1,
    text: "Hi there! Welcome to The Queen's Story: A Journey Through Pre-Colonial Africa. A narrative game about African women's agency and gendered power.",
    speakerName: "Linda",
    characterImg: LINDA,
    next: 2,
  },
  {
    id: 2,
    text: "I'm so happy you're here! This game was created for Portland State University's Winter 2026 Black Studies 301U class, Women in African History, taught by Bright Alozie.",
    speakerName: "Linda",
    characterImg: LINDA,
    next: 3,
  },
  {
    id: 3,
    text: "The purpose of this game is to present African women as dynamic, influential, and powerful beings. Challenging stereotypes that reduce them to narratives of poverty, hunger, oppression, sexual violence, and suffering.",
    speakerName: "Linda",
    characterImg: LINDA,
    next: 4,
  },
  {
    id: 4,
    text: "Although the game is set in pre-colonial times (Ancient Kush), the examples it draws on span pre-colonial, colonial, and post-colonial periods.",
    speakerName: "Linda",
    characterImg: LINDA,
    next: 5,
  },
  {
    id: 5,
    text: "You can advance the text by using space, enter, or clicking on the little arrow. If I'm talking, clicking space, enter, or just clicking on the text will speed me up.",
    speakerName: "Linda",
    characterImg: LINDA,
    next: 6,
  },
  {
    id: 6,
    text: "Thank you for reading! What would you like to do next?",
    speakerName: "Linda",
    characterImg: LINDA,
    next: 7,
  },
  // Menu Buttons
  {
    id: 7,
    characterImg: LINDA,
    options: [
      {
        text: "PLAY",
        nextText: 8,
      },
      {
        text: "HOW TO PLAY",
        showHowToPlay: true,
      },
      {
        text: "CREDITS",
        showCredits: true,
      },
    ],
  },
  // PLAY
  {
    id: 8,
    text: "You can advance the text by using space, enter, or clicking on the little arrow.",
    speakerName: "Clampy",
    characterImg: QUEEN,
    next: 9,
  },
  {
    id: 9,
    text: "If I'm talking, clicking space, enter, or just clicking on the text will speed me up. I'll talk for a bit, just so you can try it.",
    speakerName: "Clampy",
    characterImg: QUEEN,
    next: 10,
  },
  {
    id: 10,
    text: "Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah",
    speakerName: "Clampy",
    characterImg: QUEEN,
    next: 11,
  },
  {
    id: 11,
    text: "Sorry, was that too much?",
    speakerName: "Clampy",
    characterImg: QUEEN,
    next: 12,
  },
  {
    id: 12,
    text: "Anyway, the github repository is linked in the description, so you can clone it and make your own version!",
    speakerName: "Clampy",
    characterImg: QUEEN,
    next: 13,
  },
  {
    id: 13,
    text: "You can swap out the spritesheet to add your own characters and edit the dialogue file to add your own text.",
    speakerName: "Clampy",
    characterImg: QUEEN,
    next: 14,
  },
  {
    id: 14,
    text: "In a regular game, a player may make choices that ultimately lead to different endings. Since I'm not really telling a story, I'll just let you select an ending here.",
    speakerName: "Clampy",
    characterImg: QUEEN,
    next: 15,
  },
  {
    id: 15,
    characterImg: QUEEN,
    options: [
      {
        text: "happy ending",
        nextText: 16,
        setState: { epilogue: 1 },
      },
      {
        text: "sad ending",
        nextText: 161,
        setState: { epilogue: 2 },
      },
    ],
  },
  {
    id: 161,
    text: "Sad ending? You sure?",
    speakerName: "Clampy",
    characterImg: QUEEN,
    next: 162,
  },
  {
    id: 162,
    characterImg: QUEEN,
    options: [
      {
        text: "yes",
        nextText: 163,
      },
      {
        text: "no",
        nextText: 16,
        setState: { epilogue: 1 },
      }
    ],
  },
  {
    id: 163,
    text: "Alright, suit yourself!",
    speakerName: "Clampy",
    characterImg: QUEEN,
    next: 16,
  },
  {
    id: 16,
    text: "Anyway, that's all I've got for you. If you make your own game with this code, I'd love to see it, so please tag me!",
    speakerName: "Clampy",
    characterImg: QUEEN,
    next: FINISH
  }
];

const EPILOGUES = [
  {
    id: 1,
    text: "Wow. What an incredible accomplishment. What an incredible game. You are a wonderful person and a great success. I love you.",
  },
  {
    id: 2,
    text: "Uh. I didn't think anyone would actually want a sad ending. There wasn't much of a storyline to build on. That's ok though. Everyone feels sad sometimes. I still love you.",
  },
];