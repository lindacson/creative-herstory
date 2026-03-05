// These arrays represent character sprites. The first item in the array is the url of the sprite sheet. 
// The second is the background-position-x used to show the specific sprite you want, and the third is the background-position-y. 
const LINDA = ["./characters/linda.png", 0, 0];
const QUEEN = ["./characters/queen.png", 0, 0];
const QUEEN_MOTHER = ["./characters/queen_mother.png", 0, 0];
const SISTER = ["./characters/sister.png", 0, 0];
const GENERAL = ["./characters/general.png", 0, 0];
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
  // MENU BUTTONS
  {
    id: 7,
    characterImg: LINDA,
    options: [
      {
        text: "PLAY",
        nextText: 10,
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
    id: 10,
    text: "I am Kandake Makeda of Kush.",
    speakerName: "Queen Amanirenas",
    characterImg: QUEEN,
    next: 11,
  },
  {
    id: 11,
    text: "In your tongue, you might call me 'Queen,' but that word is insufficient.",
    speakerName: "Queen Amanirenas",
    characterImg: QUEEN,
    next: 12,
  },
  {
    id: 12,
    text: "I am Kandake - warrior, priestess, sovereign. I command legions. I speak with the voice of the gods. I negotiate with empires.",
    speakerName: "Queen Amanirenas",
    characterImg: QUEEN,
    next: 13,
  },
  {
    id: 13,
    text: "For eight hundred years, women like me have ruled these lands. We are not exceptions. We are tradition.",
    speakerName: "Queen Amanirenas",
    characterImg: QUEEN,
    next: 14,
  },
  {
    id: 14,
    text: "My story is inspired by real Kandakes:\nAmanirenas, who fought Rome and lived to tell the tale. \nAmanishakheto, whose wealth rivaled pharaohs. \nAmanitore, who built monuments that still stand today.",
    speakerName: "Queen Amanirenas",
    characterImg: QUEEN,
    next: 15,
  },
  {
    id: 15,
    text: "But their victories were not inevitable. They made choices - difficult, consequential choices - in moments of crisis.",
    speakerName: "Queen Amanirenas",
    characterImg: QUEEN,
    next: 16,
  },
  {
    id: 16,
    text: "Now you will make those choices.",
    speakerName: "Queen Amanirenas",
    characterImg: QUEEN,
    next: 17,
  },
  {
    id: 17,
    text: "Will you preserve our sovereignty, or watch it slip away? Will you fight, or negotiate? Will you uphold tradition, or forge new paths?",
    speakerName: "Queen Amanirenas",
    characterImg: QUEEN,
    next: 18,
  },
  {
    id: 18,
    text: "There are no easy answers. Only consequences.",
    speakerName: "Queen Amanirenas",
    characterImg: QUEEN,
    next: 19,
  },
  {
    id: 19,
    text: "Welcome to the Kingdom of Kush. Your story begins now.",
    speakerName: "Queen Amanirenas",
    characterImg: QUEEN,
    showContext: 1,
  },
  // SCENE 1
  {
    id: 20,
    text: "Kandake Makeda, Emperor Augustus offers friendship. Rome proposes a trade alliance - access to Mediterranean markets in exchange for preferential terms and free passage through your territories.",
    speakerName: "Roman Envoy",
    characterImg: ROMAN,
    next: 21,
  },
  {
    id: 21,
    text: "'Friendship.' That's what they offered Egypt before they conquered it.",
    speakerName: "Sister",
    characterImg: SISTER,
    next: 22,
  },
  {
    id: 22,
    text: "Egypt resisted. You need not make the same mistake. The Emperor values cooperation... or indifference.",
    speakerName: "Roman Envoy",
    characterImg: ROMAN,
    next: 23,
  },
  {
    id: 23,
    text: "That sounds like a threat.",
    speakerName: "Priest",
    characterImg: PRIEST,
    next: 24,
  },
  {
    id: 24,
    text: "Simply reality. What is your answer, Kandake?",
    speakerName: "Roman Envoy",
    characterImg: ROMAN,
    next: 30,
  },
  // SCENE 1 — CHOICE
  {
    id: 30,
    characterImg: QUEEN,
    options: [
      {
        text: "accept alliance",
        nextText: 311,
        points: 0,
      },
      {
        text: "refuse",
        nextText: 321,
        points: 2,
      },
    ],
  },
  // SCENE 1 — ACCEPT PATH 31*
  {
    id: 311,
    text: "Tell Augustus we will consider his proposal.",
    speakerName: "Queen Amanirenas",
    characterImg: QUEEN,
    next: 312,
  },
  {
    id: 312,
    text: "The Emperor will be pleased. Negotiations begin next month.",
    speakerName: "Roman Envoy",
    characterImg: ROMAN,
    next: 313,
  },
  {
    id: 313,
    text: "This is a mistake.",
    speakerName: "Sister",
    characterImg: SISTER,
    next: 314,
  },
  {
    id: 314,
    text: "Perhaps. Or perhaps we can manage them. Time will tell.",
    speakerName: "Priest",
    characterImg: PRIEST,
    showContext: 3,
  },
  // SCENE 1 — REFUSE PATH 32*
  {
    id: 321,
    text: "Kush has ruled independently for 800 years. We trade as equals or not at all.",
    speakerName: "Queen Amanirenas",
    characterImg: QUEEN,
    next: 322,
  },
  {
    id: 322,
    text: "Tell Augustus that Kush trades as equals, not subjects. If he cannot accept this, we have nothing to discuss.",
    speakerName: "Queen Amanirenas",
    characterImg: QUEEN,
    next: 323,
  },
  {
    id: 323,
    text: "You may regret this.",
    speakerName: "Roman Envoy",
    characterImg: ROMAN,
    next: 324,
  },
  {
    id: 324,
    text: "Is that a threat?",
    speakerName: "Sister",
    characterImg: SISTER,
    next: 325,
  },
  {
    id: 325,
    text: "A prediction.",
    speakerName: "Roman Envoy",
    characterImg: ROMAN,
    next: 326,
  },
  {
    id: 326,
    text: "Good. Now we prepare for war.",
    speakerName: "Sister",
    characterImg: SISTER,
    next: 327,
  },
  {
    id: 327,
    text: "The gods protect those who defend their sovereignty.",
    speakerName: "Priest",
    characterImg: PRIEST,
    showContext: 2,
  },
  // SCENE 2 FROM 31*
  {
    id: 40,
    text: "Three months have passed since you agreed to explore Rome's proposal.",
    speakerName: "Queen Amanirenas",
    characterImg: QUEEN,
    next: 41,
  },
  {
    id: 41,
    text: "Roman merchants now operate freely in your markets. Trade has increased. Your treasury has grown.",
    speakerName: "Queen Amanirenas",
    characterImg: QUEEN,
    next: 42,
  },
  {
    id: 42,
    text: "But today, the Roman envoy returns with new demands.",
    speakerName: "Queen Amanirenas",
    characterImg: QUEEN,
    next: 43,
  },
  {
    id: 43,
    text: "Kandake, the iron mines you've granted us access to are... underperforming. We need more laborers to increase production. Surely you can provide workers from nearby villages?",
    speakerName: "Roman Envoy",
    characterImg: ROMAN,
    next: 44,
  },
  {
    id: 44,
    text: "Provide workers? You mean forced labor.",
    speakerName: "Sister",
    characterImg: SISTER,
    next: 45,
  },
  {
    id: 45,
    text: "I prefer 'cooperative arrangement.' Your people would be paid, of course. Roman coin is valuable.",
    speakerName: "Roman Envoy",
    characterImg: ROMAN,
    next: 46,
  },
  {
    id: 46,
    text: "Kandake, this wasn't part of our agreement. They're asking us to conscript our own people.",
    speakerName: "Sister",
    characterImg: SISTER,
    next: 47,
  },
  {
    id: 47,
    text: "We have a partnership, do we not? Partners help each other. The Emperor would be... disappointed if Kush proves uncooperative.",
    speakerName: "Roman Envoy",
    characterImg: ROMAN,
    next: 48,
  },
  {
    id: 48,
    text: "This is how it begins. First trade, then labor, then what? Our sovereignty?",
    speakerName: "Priest",
    characterImg: PRIEST,
    next: 49,
  },
  {
    id: 49,
    text: "Your sovereignty is not in question. We simply ask for reasonable cooperation to ensure our mutual prosperity.",
    speakerName: "Roman Envoy",
    characterImg: ROMAN,
    next: 410,
  },
  {
    id: 410,
    text: "Sister, this is exactly what I warned you about. Give them this, they'll demand more.",
    speakerName: "Sister",
    characterImg: SISTER,
    next: 50,
  },
  // SCENE 2 FROM 31* — CHOICE
  {
    id: 50,
    characterImg: QUEEN,
    options: [
      {
        text: "provide workers",
        nextText: 511,
        points: 0,
      },
      {
        text: "refuse — revoke treaty",
        nextText: 521,
        points: 2,
      },
    ],
  },
  // SCENE 3 — PROVIDE WORKERS 51*
  {
    id: 511,
    text: "I will arrange for workers. But this must be the last demand.",
    speakerName: "Queen Amanirenas",
    characterImg: QUEEN,
    next: 512,
  },
  {
    id: 512,
    text: "The Emperor thanks you for your wisdom, Kandake.",
    speakerName: "Roman Envoy",
    characterImg: ROMAN,
    next: 513,
  },
  {
    id: 513,
    text: "What have you done? You're giving them our people now?",
    speakerName: "Sister",
    characterImg: SISTER,
    next: 514,
  },
  {
    id: 514,
    text: "The villages won't accept this easily. There will be resistance.",
    speakerName: "Priest",
    characterImg: PRIEST,
    next: 515,
  },
  {
    id: 515,
    text: "I'm trying to avoid war. Perhaps this satisfies them.",
    speakerName: "Queen Amanirenas",
    characterImg: QUEEN,
    next: 516,
  },
  {
    id: 516,
    text: "It won't. You'll see.",
    speakerName: "Sister",
    characterImg: SISTER,
    next: 517,
  },
  {
    id: 517,
    text: "You provided the workers. Rome seems satisfied... for now.",
    speakerName: "Queen Amanirenas",
    characterImg: QUEEN,
    next: 518,
  },
  {
    id: 518,
    text: "But your sister's words echo in your mind: \"Where does this end?\"",
    speakerName: "Queen Amanirenas",
    characterImg: QUEEN,
    next: 90,
  },
  // SCENE 3 — REFUSE 52*
  {
    id: 521,
    text: "No. This was not our agreement. The treaty is void. Leave Kush.",
    speakerName: "Queen Amanirenas",
    characterImg: QUEEN,
    next: 522,
  },
  {
    id: 522,
    text: "You're making a grave mistake, Kandake. The Emperor will not forgive this insult.",
    speakerName: "Roman Envoy",
    characterImg: ROMAN,
    next: 523,
  },
  {
    id: 523,
    text: "Then let him try to do something about it.",
    speakerName: "Sister",
    characterImg: SISTER,
    next: 524,
  },
  {
    id: 524,
    text: "He will.",
    speakerName: "Roman Envoy",
    characterImg: ROMAN,
    next: 525,
  },
  {
    id: 525,
    text: "You chose wisely, though late. Now we must prepare for Rome's response.",
    speakerName: "Priest",
    characterImg: PRIEST,
    next: 526,
  },
  {
    id: 526,
    text: "I tried to avoid war. Now it seems inevitable.",
    speakerName: "Queen Amanirenas",
    characterImg: QUEEN,
    next: 527,
  },
  {
    id: 527,
    text: "You have severed ties with Rome. Your people will suffer economically, but remain free.",
    speakerName: "Queen Amanirenas",
    characterImg: QUEEN,
    showContext: 2,
  },
  // SCENE 2 FROM 32*
  {
    id: 60,
    text: "In your war council chamber, maps spread across the table show Roman positions in Egypt. Your generals await your orders.",
    speakerName: "Queen Amanirenas",
    characterImg: QUEEN,
    next: 61,
  },
  {
    id: 61,
    text: "Intelligence reports: Three Roman legions are mobilizing at the border.",
    speakerName: "Queen Amanirenas",
    characterImg: QUEEN,
    next: 62,
  },
  {
    id: 62,
    text: "The Romans are massing forces at Aswan. Three legions — maybe twelve thousand men. Our scouts say they'll cross within two weeks.",
    speakerName: "Sister",
    characterImg: SISTER,
    next: 63,
  },
  {
    id: 63,
    text: "Kandake, we have eight thousand warriors ready. Our archers are superior, and we know this terrain. But we're outnumbered.",
    speakerName: "General",
    characterImg: GENERAL,
    next: 64,
  },
  {
    id: 64,
    text: "We need strategy, not just prayers. Kandake, how do we fight them?",
    speakerName: "Sister",
    characterImg: SISTER,
    next: 65,
  },
  {
    id: 65,
    text: "Two options: Meet them at the border in open battle, or draw them into the desert and use guerrilla tactics. The desert will be our greatest weapon.",
    speakerName: "General",
    characterImg: GENERAL,
    next: 66,
  },
  {
    id: 66,
    text: "If we meet them head-on, we show strength. Rome respects strength. A decisive victory could end this quickly.",
    speakerName: "Sister",
    characterImg: SISTER,
    next: 67,
  },
  {
    id: 67,
    text: "Or a decisive defeat could end us. The desert strategy is safer — harass their supply lines, strike at night, make them chase shadows in the heat.",
    speakerName: "General",
    characterImg: GENERAL,
    next: 68,
  },
  {
    id: 68,
    text: "Kandake Amanirenas — your ancestor — used both methods. She knew when to strike and when to vanish.",
    speakerName: "Priest",
    characterImg: PRIEST,
    next: 70,
  },
  // SCENE 2B — CHOICE
  {
    id: 70,
    characterImg: QUEEN,
    options: [
      {
        text: "direct confrontation",
        nextText: 711,
        points: 1,
      },
      {
        text: "guerrilla warfare",
        nextText: 721,
        points: 2,
      },
      {
        text: "defensive fortification",
        nextText: 731,
        points: 1,
      },
    ],
  },
  // SCENE 2B — DIRECT CONFRONTATION path
  {
    id: 711,
    text: "We meet them at the border. Kush does not hide from invaders.",
    speakerName: "Queen Amanirenas",
    characterImg: QUEEN,
    next: 712,
  },
  {
    id: 712,
    text: "A bold choice. I'll lead the cavalry.",
    speakerName: "Sister",
    characterImg: SISTER,
    next: 713,
  },
  {
    id: 713,
    text: "We position archers on the high ground. When their formations advance, we rain arrows. Then cavalry strikes their flanks.",
    speakerName: "General",
    characterImg: GENERAL,
    showContext: 4,
  },
  // SCENE 2B — GUERRILLA WARFARE path
  {
    id: 721,
    text: "We draw them into the desert. Let the land fight for us.",
    speakerName: "Queen Amanirenas",
    characterImg: QUEEN,
    next: 722,
  },
  {
    id: 722,
    text: "Wise. We evacuate border villages, poison the wells along their route, and strike when they least expect it.",
    speakerName: "General",
    characterImg: GENERAL,
    next: 723,
  },
  {
    id: 723,
    text: "Night raids. Hit their supply wagons. Make them afraid of the dark.",
    speakerName: "Sister",
    characterImg: SISTER,
    showContext: 4,
  },
  // SCENE 2B — DEFENSIVE FORTIFICATION path
  {
    id: 731,
    text: "We fortify our cities and force them to siege us. Let them exhaust themselves.",
    speakerName: "Queen Amanirenas",
    characterImg: QUEEN,
    next: 732,
  },
  {
    id: 732,
    text: "Our cities are well-fortified. Rome is good at field battles, but sieges in this heat? That favors us.",
    speakerName: "General",
    characterImg: GENERAL,
    next: 733,
  },
  {
    id: 733,
    text: "Passive. But practical.",
    speakerName: "Sister",
    characterImg: SISTER,
    showContext: 4,
  },
  // Victory bridge — leads to epilogue after context 4
  {
    id: 80,
    text: "Kush stands. Rome recognizes your sovereignty. Your name will be remembered.",
    speakerName: "Queen Amanirenas",
    characterImg: QUEEN,
    next: FINISH,
  },
  // APPEASEMENT PATH — Petition arc
  {
    id: 90,
    text: "Kandake, the merchant queens are organizing. They are writing formal petitions — presented to your court, signed by guild leaders across Meroë, Napata, and the trade cities along the Nile. They demand you put a stop to Roman influence over our markets.",
    speakerName: "Sister",
    characterImg: SISTER,
    showContext: 5,
  },
  {
    id: 91,
    text: "The petitioners represent the backbone of our economy. Market women, cloth traders, gold merchants — they built the wealth Rome now wants to extract. They are not asking. They are warning.",
    speakerName: "Priest",
    characterImg: PRIEST,
    next: 92,
  },
  {
    id: 92,
    text: "If we lose the merchant queens, we lose Kush from the inside. Rome won't need legions if our own people stop believing in us.",
    speakerName: "Sister",
    characterImg: SISTER,
    next: 93,
  },
  // APPEASEMENT PATH — CHOICE
  {
    id: 93,
    characterImg: QUEEN,
    options: [
      {
        text: "listen to your people — stop appeasement",
        nextText: 94,
        points: 2,
      },
      {
        text: "ignore petitions — maintain the alliance",
        nextText: 97,
        points: 0,
      },
    ],
  },
  // STOP APPEASEMENT path → joins refuse path at id 527
  {
    id: 94,
    text: "Enough. I have listened to Rome long enough. We end this — now.",
    speakerName: "Queen Amanirenas",
    characterImg: QUEEN,
    next: 95,
  },
  {
    id: 95,
    text: "Finally. The merchant queens will rally behind you. You will not stand alone.",
    speakerName: "Sister",
    characterImg: SISTER,
    next: 96,
  },
  {
    id: 96,
    text: "You chose your people over comfort. The road ahead is hard — but it is yours.",
    speakerName: "Queen Amanirenas",
    characterImg: QUEEN,
    next: 527,
  },
  // IGNORE PETITIONS path → colonization
  {
    id: 97,
    text: "The alliance holds. The merchants will adapt.",
    speakerName: "Queen Amanirenas",
    characterImg: QUEEN,
    next: 98,
  },
  {
    id: 98,
    text: "You are choosing Rome over Kush. They will not forgive this.",
    speakerName: "Sister",
    characterImg: SISTER,
    next: 99,
  },
  {
    id: 99,
    text: "Over the next decade, Roman influence deepens. Governors replace your advisors. Roman law supersedes Kushite law. The title of Kandake remains — but the power behind it is gone.",
    speakerName: "Queen Amanirenas",
    characterImg: QUEEN,
    next: FINISH,
  },
];

// Epilogues are selected by score threshold.
// The highest minScore that is <= state.score wins.
const EPILOGUES = [
  {
    minScore: 4,
    text: "THE SOVEREIGN PATH\n\nYou refused Rome's initial proposal, then drew them into the desert on your own terms. Like the real Kandake Amanirenas, you chose strategy over submission. Rome was humbled. Kush remained free.\n\nThe historical Amanirenas did exactly this — she invaded Roman Egypt, fought them to a stalemate, and negotiated directly with Emperor Augustus as an equal. Rome never conquered Kush. Your choices matched her legacy.",
  },
  {
    minScore: 3,
    text: "THE WARRIOR'S STAND\n\nYou refused Rome and met them head-on at the border. The battle was costly, but Kush held the line. Rome learned that this kingdom would not bend.\n\nDirect confrontation carries risk — the historical Amanirenas lost an eye in battle. But she kept fighting. Your courage preserved your sovereignty. The path forward is uncertain, but it is yours.",
  },
  {
    minScore: 2,
    text: "LATE DEFIANCE\n\nYou accepted Rome's initial terms, but drew the line when they demanded your people. It took pressure to find your resolve — but you found it.\n\nHistory shows that delayed resistance is harder than early refusal. Rome is now angry, and Kush must prepare for consequences. Still, you chose your people's freedom over comfort. That choice matters.",
  },
  {
    minScore: 0,
    text: "THE COST OF SUBMISSION\n\nYou accepted Rome's alliance and provided the workers they demanded. Your treasury grew, but your people's freedom eroded.\n\nThis is how empires absorb kingdoms — not always through conquest, but through compliance. Small concessions become large ones. History shows this pattern repeated across Africa during European colonization centuries later. Kush's sovereignty may yet survive, but the road will be much harder.",
  },
];