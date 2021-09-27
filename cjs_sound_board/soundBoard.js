//code plays sounds and switches Dark/light mode.

function playSound(value) {
    const soundEffect = new Audio();
    soundEffect.src = value;
    soundEffect.play();
  }

  function darkLightmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  } 