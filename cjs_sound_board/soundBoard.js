//code plays sounds and switches Dark/light mode.

function playSound(value) {
  var input_vol = document.getElementById('volume').value;
  var vol = input_vol/100
  const soundEffect = new Audio();
  soundEffect.src = value;
  soundEffect.volume = vol;
  soundEffect.play();
}

function darkLightmode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
} 