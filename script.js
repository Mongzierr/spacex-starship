var number = 0;
var money = 100000;
var percent = 0;
var mm1 = 1;
var mm2 = 2;
var mm3 = 3;
    function move(number) {
      var elem = document.getElementById("myBar");   
      if (number == 1) {
        percent += 10;
        elem.style.width = percent + '%';
        elem.innerHTML = percent + '%';
      }
    } 

function showbutton() {
  var x = document.getElementById("button");
  var y = document.getElementById("rep");
  if (x.style.display === "none") {
    x.style.display = "block";
  } 
  else {
    x.style.display = "none";
  }
}

function closemarket() {
  var x = document.getElementById("market");
  x.style.display = "none";
}

function openmarket() {
  var x = document.getElementById("market");
  x.style.display = "block"; 
}

function openupgrade() {
  var x = document.getElementById("upgrade");
  x.style.display = "block"; 
}

function closeupgrade() {
  var x = document.getElementById("upgrade");
  x.style.display = "none";
}

function buy(piece){
  var x = document.getElementById("money-bar");
  var y = document.querySelector(".m1");
  var z = document.querySelector(".m2");
  var j = document.querySelector(".m3");
  if (piece == 1){
    money-=2500;
    x.innerHTML = parseFloat(money).toFixed( 2 )+" USD";
    move(1);
    y.style.opacity=0.7;
    y.innerHTML = "sold out";
    y.style.cursor = "auto";
    return mm1 =0;
  }
  if (piece == 2){
    money-=2500;
    x.innerHTML = parseFloat(money).toFixed( 2 )+" USD"
    move(1);
    z.style.opacity=0.7;
    z.innerHTML = "sold out";
    z.style.cursor = "auto";
    return mm2 =0;
  }
  if (piece == 3){
    money-=2500;
    x.innerHTML = parseFloat(money).toFixed( 2 )+" USD"
    move(1);
    j.style.opacity=0.7;
    j.innerHTML = "sold out";
    j.style.cursor = "auto";
    return mm3 =0;
  }
}

var ID=0;
var left=8;

function printweek()
{
  document.getElementById("week").innerHTML=left+" weeks";
  left--;
  if (left == -1){
    stop()
  }
}

function start()
{
  ID=window.setInterval(printweek,60000);
}

function stop()
{
  window.clearInterval(ID);
}

function show(){
  var x = document.getElementById("spacex");
  x.style.display = "block";
  var mq = window.matchMedia( "(max-width: 1100px)" );
  if (mq.matches) {
      x.style.display = "none";
  }
  else {
      x.style.display = "block";
  }
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 *5,
        display = document.querySelector('#week');
    startTimer(fiveMinutes, display);
};