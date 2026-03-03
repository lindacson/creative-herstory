/*~~ Set up game logic ~~*/
const LOADING = 0;
const TITLE = 1;
const DIALOGUE = 2;
const EPILOGUE = 3;
const CREDITS = 4;
const HOW_TO_PLAY = 5;

state = {
  gameStage: LOADING,
  isLoading: true,
  epilogue: null,
};

function donePreloading() {
  if (state.isLoading) {
    state.isLoading = false;
    $(".loading-dots").addClass("hidden");
    state.gameStage = TITLE;
    showGameStage();
  }
}

function startGame() {
  state.gameStage = DIALOGUE;
  showGameStage();
  showDialogue(1);
}

function showDialogue(textNodeIndex) {
  const dialogue = DIALOGUE_CONTENT;
  const textNode = dialogue.find((textNode) => textNode.id === textNodeIndex);

  $("#character-portrait").css(
    "background-image",
    "url(" + textNode.characterImg[0] + ")"
  );
  $("#character-portrait").css(
    "background-position-x",
    textNode.characterImg[1] + "px"
  );
  $("#character-portrait").css(
    "background-position-y",
    textNode.characterImg[2] + "px"
  );

  $("#responses").empty(); // reset
  $("#progress-dialogue").addClass("hidden");

  // If displaying a dialogue object with options to show on the screen
  if (textNode.options) {
    textNode.options.forEach((option) => {
      const button = document.createElement("button");
      button.innerText = option.text;
      button.addEventListener("click", () => selectOption(option));
      $("#responses").append(button);
    });
  }

  // If displaying a dialogue object with text and speaker content
  if (textNode.speakerName && textNode.text) {
    $("#speaker-name").text(textNode.speakerName);
    $("#character-dialogue").empty();

    loadingText = true;
    textArray = textNode.text.split("");
    timeouts = [];

    textArray.forEach((letter, index) => {
      timeouts.push(
        setTimeout(() => {
          $("#character-dialogue").append(letter);
        }, 20 * index)
      );
    });

    timeouts.push(
      setTimeout(
        () => finishLoadingDialogue(textNode),
        20 * (textArray.length - 1)
      )
    );

    document.body.onkeyup = function (e) {
      if (e.code == "Space" || e.code == "Enter") {
        clearTimeouts(timeouts, textNode);
      }
    };

    $(".dialogue-wrapper").click(function () {
      clearTimeouts(timeouts, textNode);
    });
  }
}

function clearTimeouts(timeouts, textNode) {
  if (loadingText) {
    timeouts.forEach((timeout) => {
      clearTimeout(timeout);
    });
    $("#character-dialogue").html(textNode.text);
    finishLoadingDialogue(textNode);
  }
}

function finishLoadingDialogue(textNode) {
  loadingText = false;
  $("#progress-dialogue").removeClass("hidden");

  document.body.onkeyup = function (e) {
    if (e.code == "Space" || e.code == "Enter") {
      advance(textNode);
    }
  };
  $("#progress-dialogue").click(function (event) {
    event.stopPropagation();
    advance(textNode);
  });
  $(".dialogue-wrapper").click(function () {
    advance(textNode);
  });
}

function clearListeners() {
  document.body.onkeyup = {};
  $("#progress-dialogue").off("click");
  $(".dialogue-wrapper").off("click");
}

function advance(textNode) {
  clearListeners();
  if (textNode.next == FINISH) {
    showEpilogue();
  } else {
    showDialogue(textNode.next);
  }
}

function selectOption(option) {
  if (option.showCredits) {
    showCredits();
    return;
  }
  if (option.showHowToPlay) {
    showHowToPlay();
    return;
  }
  if (option.setState) {
    state = Object.assign(state, option.setState);
  }
  option.chatMoods?.forEach((chatMood) => {
    showChat(chatMood);
  });
  showDialogue(option.nextText);
}

function showCredits() {
  state.previousStage = state.gameStage;
  state.gameStage = CREDITS;
  showGameStage();
  $("#credits .credits-content").scrollTop(0);
}

function playFromCredits() {
  if (state.previousStage === EPILOGUE) {
    restart();
  } else {
    state.gameStage = DIALOGUE;
    showGameStage();
    showDialogue(8);
  }
}

function showHowToPlay() {
  state.gameStage = HOW_TO_PLAY;
  showGameStage();
  $("#how-to-play .credits-content").scrollTop(0);
}

function playFromHowToPlay() {
  state.gameStage = DIALOGUE;
  showGameStage();
  showDialogue(8);
}

function showGameStage() {
  $("#loading").addClass("hidden");
  $("#titlescreen").addClass("hidden");
  $("#dialogue-container").addClass("hidden");
  $("#how-to-play").addClass("hidden");
  $("#credits").addClass("hidden");
  $("#epilogue").addClass("hidden");
  switch (state.gameStage) {
    case LOADING:
      $("#loading").removeClass("hidden");
      break;
    case TITLE:
      $("#titlescreen").removeClass("hidden");
      break;
    case DIALOGUE:
      $("#dialogue-container").removeClass("hidden");
      break;
    case HOW_TO_PLAY:
      $("#how-to-play").removeClass("hidden");
      break;
    case CREDITS:
      $("#credits").removeClass("hidden");
      break;
    case EPILOGUE:
      $("#epilogue").removeClass("hidden");
      break;
  }
}

function showEpilogue() {
  state.gameStage = EPILOGUE;
  showGameStage();
  const epilogueObject = EPILOGUES.find(
    (epilogue) => epilogue.id === state.epilogue
  );
  $("#epilogue-result").text(epilogueObject.text);
}

function restart() {
  state.gameStage = DIALOGUE;
  showGameStage();
  showDialogue(1);
}
