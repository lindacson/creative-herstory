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
        setPath: "accepted",
      },
      {
        text: "refuse",
        nextText: 321,
        points: 2,
        setPath: "refused",
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
        text: "refuse and revoke treaty",
        nextText: 521,
        points: 2,
        setPath: "revoked",
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
    showContext: 6,
  },
  // SCENE 2 FROM 52* — WAR COUNCIL (revoked treaty path)
  {
    id: 530,
    text: "Your war council assembles. The treasury runs thinner without Rome's trade, but your people stand behind you — and you understand the enemy in a way those who never engaged with them cannot.",
    speakerName: "Queen Amanirenas",
    characterImg: QUEEN,
    next: 531,
  },
  {
    id: 531,
    text: "Kandake. Their envoys mapped our roads while they were here. But I watched them too — Rome moves in formations, supply-dependent, with rigid command lines. Their strength has a weakness.",
    speakerName: "General",
    characterImg: GENERAL,
    next: 532,
  },
  {
    id: 532,
    text: "We know how their demands work. First trade, then labor, then territory. We refused before they reached the third step. Use that clarity now.",
    speakerName: "Sister",
    characterImg: SISTER,
    next: 533,
  },
  {
    id: 533,
    text: "Three paths: meet them head-on at the border, draw them into the desert and bleed their supply lines, or seal our cities and let the heat and distance break them.",
    speakerName: "General",
    characterImg: GENERAL,
    next: 540,
  },
  // SCENE 2C — CHOICE (from id 527, revoked treaty path)
  {
    id: 540,
    characterImg: QUEEN,
    options: [
      {
        text: "direct confrontation",
        nextText: 711,
        points: 2,
      },
      {
        text: "guerrilla warfare",
        nextText: 721,
        points: 1,
      },
      {
        text: "defensive fortification",
        nextText: 731,
        points: 1,
      },
    ],
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
  // SCENE 2B — CHOICE (from id 327, direct refusal path)
  {
    id: 70,
    characterImg: QUEEN,
    options: [
      {
        text: "direct confrontation",
        nextText: 711,
        points: 2,
      },
      {
        text: "guerrilla warfare",
        nextText: 721,
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
  // Victory bridge — leads to succession scene via context 8
  {
    id: 80,
    text: "Kush stands. Rome recognizes your sovereignty. Your name will be remembered.",
    speakerName: "Queen Amanirenas",
    characterImg: QUEEN,
    next: 100,
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
        text: "listen to your people",
        nextText: 94,
        points: 2,
      },
      {
        text: "ignore petitions",
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
    showContext: 7,
  },
  // SCENE 2 FROM 96 — WAR COUNCIL (appeasement → defiance path)
  {
    id: 160,
    text: "Your war council convenes under the weight of months lost. Rome's merchants are gone — but they did not leave empty-handed. They carry maps of your roads, your markets, your supply routes.",
    speakerName: "Queen Amanirenas",
    characterImg: QUEEN,
    next: 161,
  },
  {
    id: 161,
    text: "Kandake, we cannot meet them in open battle. They know our terrain too well. We gave them that knowledge. We must fight on terms they cannot prepare for.",
    speakerName: "General",
    characterImg: GENERAL,
    next: 162,
  },
  {
    id: 162,
    text: "The merchant queens are with us. The people are with us. But we must be smart — a frontal fight now is exactly what Rome wants.",
    speakerName: "Sister",
    characterImg: SISTER,
    next: 163,
  },
  {
    id: 163,
    text: "Two paths remain: draw them into the desert and destroy them slowly, or seal our cities and let them exhaust themselves at our walls.",
    speakerName: "General",
    characterImg: GENERAL,
    next: 165,
  },
  // SCENE 2D — CHOICE (from id 96, appeasement path)
  {
    id: 165,
    characterImg: QUEEN,
    options: [
      {
        text: "guerrilla warfare",
        nextText: 721,
        points: 1,
      },
      {
        text: "defensive fortification",
        nextText: 731,
        points: 1,
      },
    ],
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
    next: 200,
  },
  // APPEASEMENT ENDING — FORCED SUCCESSION
  {
    id: 200,
    text: "With Roman governors embedded in your court, the question of succession is raised — and not by you.",
    speakerName: "Queen Amanirenas",
    characterImg: QUEEN,
    showContext: 11,
  },
  {
    id: 201,
    text: "Kush requires stability. Rome recommends a successor with the temperament to ensure continued cooperation. Your nephew. He has already agreed to the terms.",
    speakerName: "Roman Envoy",
    characterImg: ROMAN,
    next: 202,
  },
  {
    id: 202,
    text: "They are not recommending. They are telling you. This choice was made before you entered the room.",
    speakerName: "Sister",
    characterImg: SISTER,
    next: 203,
  },
  {
    id: 203,
    text: "This is what appeasement costs. Not just your treasury. Not just your people's labor. Your future — and your daughter's future — now belong to Rome.",
    speakerName: "Queen Amanirenas",
    characterImg: QUEEN,
    showContext: 10,
  },
  {
    id: 204,
    text: "The title of Kandake remains. But everything it once meant is gone.",
    speakerName: "Queen Amanirenas",
    characterImg: QUEEN,
    next: FINISH,
  },
  // SCENE 3 — ROYAL SUCCESSION
  {
    id: 100,
    text: "The immediate crisis has passed. But a quieter question has grown impossible to ignore: you have no daughter. In Kushite tradition, the throne passes through the female line — and your sister's daughter stands as your natural heir.",
    speakerName: "Queen Amanirenas",
    characterImg: QUEEN,
    next: 101,
  },
  {
    id: 101,
    text: "But not everyone agrees.",
    speakerName: "Queen Amanirenas",
    characterImg: QUEEN,
    showContext: 8,
  },
  {
    id: 102,
    text: "Kandake. I have given everything to this throne — my youth, my sons, my silence during years when I had every right to speak. I ask only this: name my grandson as your heir. He is capable. The northern lords will follow him.",
    speakerName: "Queen Mother",
    characterImg: QUEEN_MOTHER,
    next: 103,
  },
  {
    id: 103,
    text: "With respect — the tradition does not belong to the northern lords. It belongs to Kush. My daughter has trained for this her entire life. She carries the bloodline. She is the heir.",
    speakerName: "Sister",
    characterImg: SISTER,
    next: 104,
  },
  {
    id: 104,
    text: "I will not pretend this is simple. My mother speaks for half the court. My wife — and the law — speaks for the other half. But this throne was built by women. That is not my opinion. That is eight centuries of Kushite history.",
    speakerName: "King",
    characterImg: KING,
    showContext: 9,
  },
  {
    id: 105,
    text: "I have studied every Kandake who held this throne before you. The military records, the trade agreements, the diplomatic dispatches. I am not asking for the throne. I have earned the right to be considered for it.",
    speakerName: "Niece",
    characterImg: NIECE,
    next: 106,
  },
  {
    id: 106,
    text: "And I respect her. Truly. But Kush just survived a war. The northern lords are restless and they will not follow a young woman they have never seen tested. I have ridden with the border garrison. I know these men.",
    speakerName: "Nephew",
    characterImg: NEPHEW,
    next: 107,
  },
  {
    id: 107,
    text: "You have ridden with men who already doubt women can rule. You are not the solution to their doubt — you are its reward.",
    speakerName: "Sister",
    characterImg: SISTER,
    next: 108,
  },
  {
    id: 108,
    text: "This kingdom needs whoever can hold it together. Kandake — I ask you to choose with your head, not your mother's law.",
    speakerName: "Queen Mother",
    characterImg: QUEEN_MOTHER,
    next: 109,
  },
  // SCENE 3 — CHOICE
  {
    id: 109,
    characterImg: QUEEN,
    options: [
      {
        text: "name your niece as heir",
        nextText: 1091,
        points: 2,
      },
      {
        text: "break tradition for your nephew",
        nextText: 1101,
        points: 0,
      },
    ],
  },
  // SCENE 3 — UPHOLD TRADITION path
  {
    id: 1091,
    text: "The tradition holds because it is true. My niece will be the next Kandake. This is my final word.",
    speakerName: "Queen Amanirenas",
    characterImg: QUEEN,
    next: 1092,
  },
  {
    id: 1092,
    text: "The northern lords will grumble. They always do. Let them.",
    speakerName: "King",
    characterImg: KING,
    next: 1093,
  },
  {
    id: 1093,
    text: "I will be ready.",
    speakerName: "Niece",
    characterImg: NIECE,
    next: FINISH,
  },
  // SCENE 3 — BREAK TRADITION path
  {
    id: 1101,
    text: "The northern routes cannot fracture. My nephew will inherit. This decision stands.",
    speakerName: "Queen Amanirenas",
    characterImg: QUEEN,
    next: 1102,
  },
  {
    id: 1102,
    text: "You have just told every daughter in Kush that the throne is no longer theirs. They will remember this.",
    speakerName: "Sister",
    characterImg: SISTER,
    next: 1103,
  },
  {
    id: 1103,
    text: "The tradition that made you Kandake will not survive this reign. Future queens will have to fight for what you surrendered today.",
    speakerName: "Priest",
    characterImg: PRIEST,
    next: FINISH,
  },
];

const EPILOGUES = [
  {
    minScore: 5,
    text: "THE SOVEREIGN LEGACY\n\nFrom your first refusal to your final decree, you chose sovereignty at every turn. You met Rome's aggression on your own terms — militarily, diplomatically, and in the question of who would carry the throne forward. When that moment came, you answered it the way Kush always had: through the female line.\n\nThe real Kandake Amanirenas did exactly this. She refused Rome's terms, invaded Roman Egypt, fought to a stalemate, and negotiated directly with Emperor Augustus as an equal sovereign. Rome never conquered Kush. The Kandake tradition continued for centuries after her reign.\n\nYour choices matched her legacy. Kush endures. The line of queens endures. Your name will be remembered.",
  },
  {
    minScore: 4,
    text: "THE WARRIOR'S HALF\n\nYou met Rome at the border with full force. No shadows, no retreat — you chose the boldest possible stand and held it. Rome learned that Kush fights back on its own terms. That victory is real and hard-won.\n\nBut when the question of succession arose, you let political calculation override eight hundred years of matrilineal law. You fought for sovereignty on the battlefield and surrendered it at court. Rome could not break you with legions — but pressure eroded what violence could not.\n\nKush survives. But the institution that protected women's power for centuries ends with your reign. The daughters who would have inherited a sovereign kingdom will now have to fight for what was given away.",
  },
  {
    minScore: 3,
    text: "THE COMPROMISED STAND\n\nYou drew a line against Rome when it mattered. That took real courage, especially given the costs of what came before. But resistance without a vision of what you are preserving can only go so far.\n\nYou held Rome at bay, but every consequential choice — in war and in succession — was made with one eye on those who doubted you. The kingdom survives. But it survives changed: the daughters who would have inherited a sovereign Kush under the old law will now have to fight for what their grandmothers were guaranteed by tradition.\n\nThe Kandake title endures. Its meaning is diminished.",
  },
  {
    minScore: 0,
    text: "THE COST OF COMPLIANCE\n\nRome did not conquer Kush with legions. It did not need to. It used trade agreements, labor demands, and the slow replacement of Kushite law with Roman administration — one concession at a time. In the end, even the question of who rules after you was answered by someone else.\n\nThis is how sovereignty dies — not in a single battle, but through accumulated compliance. The real Kandake Amanirenas refused every step of this path. She fought, she bled, she negotiated as an equal, and she won. The Kush of her legacy remained free for centuries.\n\nFuture generations will have to reclaim, through struggle, what was given away through deference. The title of Kandake remains. Everything it once meant is gone.",
  },
];