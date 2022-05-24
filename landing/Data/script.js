

function sound() {
  var sound = new Audio('https://cdn.discordapp.com/attachments/875221583537516584/978468111986618388/About_You_directed_by_J.Vash.mp3')
  sound.volume = 0.2;
  sound.loop = true;
  sound.play();
}



window.addEventListener('scroll', reveal);
function reveal() {
  var reveals = document.querySelectorAll('.reveal');
  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    }
    else {
      reveals[i].classList.remove('active');
    }
  }
}
