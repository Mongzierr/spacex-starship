var number = 0;
var money = 500;
var percent = 10;
var mm1 = 1;
var mm2 = 2;
var mm3 = 3;
var mm4 = 4;
var up1 = 0;
var up2 = 0;
var up3 = 0;
var up4 = 0;
var up5 = 0;
var up6 = 0;
var up7 = 0;
var up8 = 0;
var up9 = 0;
var up10 = 0;
var up11 = 0;
var up12 = 0;
var round = 1;
var showspace = 0;
var countweek = 6;
var countquiz = 0;
var countmk = 0;
var countkm = 0;
var timeup = 0;
function move(number) {
  var elem = document.getElementById("myBar");  
  var x = document.getElementById("spacexv2");
  var y = document.getElementById("spacex");
  var z = document.getElementById("spacexv3");
  var j = document.getElementById("spacexv4");
  var mq = window.matchMedia( "(max-width: 1100px)" );
  var mq = window.matchMedia( "(max-width: 1100px)" );
  if (number == 1) {
    percent += 10;
    elem.style.width = percent + '%';
    elem.innerHTML = percent + '%';
  }
  if (number == 0) {
    percent -= 10;
    elem.style.width = percent + '%';
    elem.innerHTML = percent + '%';
  }
  
  if (number == 10) {
    percent = 100;
    elem.style.width = percent + '%';
    elem.innerHTML = percent + '%';
  }
  
  if (number == 11) {
    percent += 100;
    elem.style.width = percent + '%';
    elem.innerHTML = percent + '%';
  }
  
  if(showspace == 1 && percent >= 40){
    if (mq.matches) {
        x.style.display = "none";
    }
    else {
        y.style.display = "none";
        x.style.display = "block";
    }
  }
  if(showspace == 1 && percent >= 60){
    if (mq.matches) {
        z.style.display = "none";
    }
    else {
        x.style.display = "none";
        z.style.display = "block";
    }
  }
  if(showspace == 1 && percent >= 85){
    if (mq.matches) {
        j.style.display = "none";
    }
    else {
        z.style.display = "none";
        j.style.display = "block";
    }
  }
}

function openresearch(){
  var x = document.getElementById("research");
  var y = document.getElementById("research2");
  var z = document.getElementById("research3");
  if (countmk == 4){
    x.style.display = "block";
  }
  if (countmk == 5){
    y.style.display = "block";
  }
  if (countmk == 6){
    z.style.display = "block";
  }
}

function closeresearch() {
  var x = document.getElementById("research");
  var y = document.getElementById("research2");
  var z = document.getElementById("research3");
  x.style.display = "none";
  y.style.display = "none";
  z.style.display = "none";
}

function closemarket() {
  var x = document.getElementById("market");
  x.style.display = "none";
}

function openmarket() {
  var x = document.getElementById("market");
  if(countkm == 0){
    x.style.display = "block"; 
  }
}

function openupgrade() {
  var x = document.getElementById("upgrade");
  if(countmk >=4 ){
    x.style.display = "block"; 
  }
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
  var k = document.querySelector(".m4");
  var payload = document.querySelector(".p1");
  var inside = document.querySelector(".p5");
  var ipon = document.querySelector(".p9");
  if (piece == 1){
    money-=100;
    x.innerHTML = parseFloat(money).toFixed( 2 )+" SPACE";
    y.style.opacity=0.7;
    y.innerHTML = "Sold Out.";
    y.style.cursor = "auto";
    countmk++;
    checkbt();
    return mm1 =0;
    
  }
  if (piece == 2){
    money-=100;
    x.innerHTML = parseFloat(money).toFixed( 2 )+" SPACE"
    z.style.opacity=0.7;
    z.innerHTML = "Sold Out.";
    z.style.cursor = "auto";
    inside.style.opacity = 1;
    inside.style.cursor = "auto";
    countmk++;
    checkbt();
    return mm2 =0;
  }
  
  if (piece == 3){
    money-=100;
    x.innerHTML = parseFloat(money).toFixed( 2 )+" SPACE"
    j.style.opacity=0.7;
    j.innerHTML = "Sold Out.";
    j.style.cursor = "auto";
    payload.style.opacity = 1;
    payload.style.cursor = "auto";
    countmk++;
    checkbt();
    return mm3 =0;
  }

  if (piece == 4){
    money-=100;
    x.innerHTML = parseFloat(money).toFixed( 2 )+" SPACE"
    k.style.opacity=0.7;
    k.innerHTML = "Sold Out.";
    k.style.cursor = "auto";
    ipon.style.opacity = 1;
    ipon.style.cursor = "auto";
    countmk++;
    checkbt();
    return mm4 =0;
  }

  
}

function upgradev2(){
  var x = document.getElementById("money-bar");
  var payloadv2 = document.querySelector(".p2");
  if (up1 == 1 && money -100 >=0){
    money-=100;
    x.innerHTML = parseFloat(money).toFixed( 2 )+" SPACE";
    move(1);
    payloadv2.innerHTML = "Upgrade Success.";
    payloadv2.style.opacity = 1;
    payloadv2.style.cursor = "auto";
    up1 =0;
  }
}
function upgradev3(){
  var x = document.getElementById("money-bar");
  var payloadv3 = document.querySelector(".p3");
  if(up2 == 1 && money -100 >=0){
    money-=100;
    x.innerHTML = parseFloat(money).toFixed( 2 )+" SPACE";
    move(1);
    payloadv3.innerHTML = "Upgrade Success.";
    payloadv3.style.opacity = 1;
    payloadv3.style.cursor = "auto";
    up2=0;
  }
}
function upgradev4(){
  var x = document.getElementById("money-bar");
  var payloadv4 = document.querySelector(".p4");
  if(up3 == 1 && money -100 >=0){
    money-=100;
    x.innerHTML = parseFloat(money).toFixed( 2 )+" SPACE";
    move(1);
    payloadv4.innerHTML = "Upgrade Success.";
    payloadv4.style.opacity = 1;
    payloadv4.style.cursor = "auto";
    up3=0;
  }
}

function upgradev6(){
  var x = document.getElementById("money-bar");
  var payloadv6 = document.querySelector(".p6");
  if (up6 == 1 && money -100 >=0){
    money-=100;
    x.innerHTML = parseFloat(money).toFixed( 2 )+" SPACE";
    move(1);
    payloadv6.innerHTML = "Upgrade Success.";
    payloadv6.style.opacity = 1;
    payloadv6.style.cursor = "auto";
    up6 =0;
  }
}

function upgradev7(){
  var x = document.getElementById("money-bar");
  var payloadv7 = document.querySelector(".p7");
  if (up7 == 1 && money -100 >=0){
    money-=100;
    x.innerHTML = parseFloat(money).toFixed( 2 )+" SPACE";
    move(1);
    payloadv7.innerHTML = "Upgrade Success.";
    payloadv7.style.opacity = 1;
    payloadv7.style.cursor = "auto";
    up7 =0;
  }
}

function upgradev8(){
  var x = document.getElementById("money-bar");
  var payloadv8 = document.querySelector(".p8");
  if (up8 == 1 && money -100 >=0){
    money-=100;
    x.innerHTML = parseFloat(money).toFixed( 2 )+" SPACE";
    move(1);
    payloadv8.innerHTML = "Upgrade Success.";
    payloadv8.style.opacity = 1;
    payloadv8.style.cursor = "auto";
    up8 =0;
  }
}

function upgradev10(){
  var x = document.getElementById("money-bar");
  var payloadv10 = document.querySelector(".p10");
  if (up10 == 1 && money -100 >=0){
    money-=100;
    x.innerHTML = parseFloat(money).toFixed( 2 )+" SPACE";
    move(1);
    payloadv10.innerHTML = "Upgrade Success.";
    payloadv10.style.opacity = 1;
    payloadv10.style.cursor = "auto";
    up10 =0;
  }
}

function upgradev11(){
  var x = document.getElementById("money-bar");
  var payloadv11 = document.querySelector(".p11");
  if (up11 == 1 && money -100 >=0){
    money-=100;
    x.innerHTML = parseFloat(money).toFixed( 2 )+" SPACE";
    move(1);
    payloadv11.innerHTML = "Upgrade Success.";
    payloadv11.style.opacity = 1;
    payloadv11.style.cursor = "auto";
    up11 =0;
  }
}

function upgradev12(){
  var x = document.getElementById("money-bar");
  var payloadv12 = document.querySelector(".p12");
  if (up12 == 1 && money -100 >=0){
    money-=100;
    x.innerHTML = parseFloat(money).toFixed( 2 )+" SPACE";
    move(1);
    payloadv12.innerHTML = "Upgrade Success.";
    payloadv12.style.opacity = 1;
    payloadv12.style.cursor = "auto";
    up12 =0;
  }
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
      showspace++;
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
        if (timer == 0 && countweek >= -1){
          if(countweek == -1)
            duration = 0;
          else{
            display.textContent = (countweek +1) + " Week";
            countweek--;
            plusmoney();
          }
        }
        if(duration == 0){
          display.textContent = "Time up";
          move(timeup);
          timeup--;
          countkm=1;
          countmk=-1;
          document.querySelector("#cheat").style.display = "block";
        }
    }, 1000);
}


window.onload = function () {
  var display = document.querySelector('#week');
  var oneMinutes = 20;
  startTimer(oneMinutes, display);
};


function ani() {
  var x = document.getElementById("spacex");
  var y = document.getElementById("spacexv2");
  var z = document.getElementById("spacexv3");
  var j = document.getElementById("spacexv4");
  var img = document.getElementById('gif');
  document.querySelector("#cheat").style.display = "none";
  document.querySelector("#over").style.display = "none";
  if (showspace == 1 && percent <= 40){
    x.style.animation = "go 1s 1 forwards linear";
    y.style.animation = "go 1s 1 forwards linear";
    z.style.animation = "go 1s 1 forwards linear";
    j.style.animation = "go 1s 1 forwards linear";
    img.setAttribute('src', 'https://cdn.discordapp.com/attachments/977545208755523625/977588674667626556/V2.gif');
    document.querySelector(".box").style.display = "block";
    countmk =7;
    timeup--;
  }
  else if (showspace == 1 &&  percent <= 60){
    x.style.animation = "go 1s 1 forwards linear";
    y.style.animation = "go 1s 1 forwards linear";
    z.style.animation = "go 1s 1 forwards linear";
    j.style.animation = "go 1s 1 forwards linear";
    document.querySelector("#text").innerHTML = "ยานไปติดอยู่วงโคจรไปต่อไม่ได้";
    img.setAttribute('src', 'https://cdn.discordapp.com/attachments/977545208755523625/977588739993899038/V3.gif');
    document.querySelector(".box").style.display = "block";
    countmk =7;
    timeup--;
  }

  else if (showspace == 1 && percent <=100){
    x.style.animation = "go 1s 1 forwards linear";
    y.style.animation = "go 1s 1 forwards linear";
    z.style.animation = "go 1s 1 forwards linear";
    j.style.animation = "go 1s 1 forwards linear";
    document.querySelector("#text").innerHTML = "การส่งจรวจประสบความสำเร็จ";
    img.setAttribute('src', 'https://cdn.discordapp.com/attachments/956179267308371978/961240156873039913/Untitled_Artwork.gif');
    document.querySelector(".box").style.display = "block";
    countmk =7;
    timeup--;
  }

  else if (showspace == 1 && percent >100){
    x.style.animation = "go 1s 1 forwards linear";
    y.style.animation = "go 1s 1 forwards linear";
    z.style.animation = "go 1s 1 forwards linear";
    j.style.animation = "go 1s 1 forwards linear";
    document.querySelector("#text").innerHTML = "คุณคือสุดยอดแห่งเกรียน ยินดีด้วยนี่คือ Easter Egg";
    img.setAttribute('src', 'https://i.pinimg.com/originals/91/60/74/916074b3c5a6a5bcdcdd73be43282fa5.gif');
    document.querySelector(".box").style.display = "block";
    countmk =7;
  }
}
function plusmoney(){
  var x = document.getElementById("money-bar");
  var y = document.getElementById("chart");
  if(countweek == 5){
    money+=200;
    x.innerHTML = parseFloat(money).toFixed( 2 )+" SPACE";
    y.innerHTML = "SpaceTH.co ให้ทุนสนับสนุน +200 SPACE ";
    y.style.animation="ani2 5s";
  }
  if(countweek == 4){
    money+=200;
    x.innerHTML = parseFloat(money).toFixed( 2 )+" SPACE";
    y.innerHTML = "Steve Job ฝากพินัยกรรมไว้ให้เงินทุนสนับสนุน +200 SPACE";
    y.style.animation="ani3 5s";
  }
  if(countweek == 3){
    money+=150;
    x.innerHTML = parseFloat(money).toFixed( 2 )+" SPACE";
    y.innerHTML = "พี่เอ้ให้เงินสนับสนุนไปสร้าง ไวนิลบนดวงจันทร์ +150 SPACE";
    y.style.animation="ani4 5s";
  }
  if(countweek == 2 && percent < 50){
    if(money - 200 <= 0){
      money = 0;
      x.innerHTML = parseFloat(money).toFixed( 2 )+" SPACE";
    }
    else {
      money-=200; 
      x.innerHTML = parseFloat(money).toFixed( 2 )+" SPACE";
      y.innerHTML = "ความคืบหน้าต่ำ Sponsor ขอถอนเงินลงทุน -200 SPACE"; 
      y.style.animation="ani5 5s";
    }
  }
  if(countweek == 1){
    money+=50; 
    x.innerHTML = parseFloat(money).toFixed( 2 )+" SPACE";
    y.innerHTML = "ถูกหวย 2ตัวบนหลังจากถูกกินมานานได้เงินสนับสนุน +50 SPACE";
    y.style.animation="ani6 5s";
  }
  if(countweek == 0){
    money+=100; 
    x.innerHTML = parseFloat(money).toFixed( 2 )+" SPACE";
    y.innerHTML = "ชาวดาวนาเม็กบินมา ได้ของไปขายและได้เงินสนับสนุน +100 SPACE";
    y.style.animation="ani7 5s";
  }
  if(countweek == -1){
    money+=100; 
    x.innerHTML = parseFloat(money).toFixed( 2 )+" SPACE";
    y.innerHTML = "ได้รับเงินจาก NASA ได้รับเงินสนับสนุน +100 SPACE";
    y.style.animation="ani8 5s";
  }
}
function quiz1t(){
  var x = document.getElementById("quiz1");
  var y = document.getElementById("keaw1");
  var z = document.getElementById("dang1");
  x.innerHTML = "คุณตอบได้ถูกต้อง สามรถอัพเกรดขั้นแรกได้แล้ว";
  y.style.display = "none";
  z.style.display = "none";
  countquiz++;
  countmk++;
  unlock();
}

function quiz1f(){
  var x = document.getElementById("quiz1");
  var y = document.getElementById("keaw1");
  var z = document.getElementById("dang1");
  x.innerHTML = "เสียใจด้วยคุณตอบผิด คุณสามารถตอบคำถามต่อไปให้ถูกเพื่ออัพเกรดยานได้";
  y.style.display = "none";
  z.style.display = "none";
  countmk++;
}

function quiz2t(){
  var x = document.getElementById("quiz2");
  var y = document.getElementById("keaw2");
  var z = document.getElementById("dang2");
  x.innerHTML = "คุณตอบได้ถูกต้อง สามารถอัพเกรดต่อไปได้แล้ว";
  y.style.display = "none";
  z.style.display = "none";
  countquiz++;
  countmk++;
  unlock();
}

function quiz2f(){
  var x = document.getElementById("quiz2");
  var y = document.getElementById("keaw2");
  var z = document.getElementById("dang2");
  x.innerHTML = "เสียใจด้วยคุณตอบผิด คุณสามรถตอบคำถามต่อไปให้ถูกเพื่ออัพเกรดยานได้";
  y.style.display = "none";
  z.style.display = "none";
  countmk++;
}

function quiz3t(){
  var x = document.getElementById("quiz3");
  var y = document.getElementById("keaw3");
  var z = document.getElementById("dang3");
  x.innerHTML = "คุณตอบได้ถูกต้อง สามรถอัพเกรดต่อไปได้แล้ว";
  y.style.display = "none";
  z.style.display = "none";
  countquiz++;
  countmk++;
  unlock();
  checkbt();
}

function quiz3f(){
  var x = document.getElementById("quiz3");
  var y = document.getElementById("keaw3");
  var z = document.getElementById("dang3");
  x.innerHTML = "เสียใจด้วยคุณตอบผิด การอัพเกรดของคุณสิ้นสุดแล้ว";
  y.style.display = "none";
  z.style.display = "none";
  countmk++;
  checkbt();
}

function unlock(){
  if (countquiz == 1){
    up1++;
    up6++;
    up10++;
  } 
  if (countquiz == 2){
    up2++;
    up7++;
    up11++;
  } 
  if (countquiz == 3){
    up3++;
    up8++;
    up12++;
  }
}

function cheat(){
  var x = document.getElementById("money-bar");
  money=999999999;
  x.innerHTML = parseFloat(money).toFixed()+" SPACE";
  percent=100;
  move(10);
  showspace = 1;
  document.querySelector("#over").style.display = "block";
  countkm =1;
  checkbt();
}

function over(){
  move(11);
  move();  
}

function chate(){
  if(timeup == -1){
    document.querySelector("#cheat").style.display = "block";
  }
}

function checkbt(){
  var x = document.getElementById("upgradebutton");
  var y = document.getElementById("marketbutton")
  if (countmk == 4){
    document.getElementById("researchbutton").style.background ="white";
    x.style.backgroundColor = "white";
    y.style.backgroundColor = "#c4c4c4";
    countkm = 1;
  }
  if(countmk == 7){
    document.getElementById("researchbutton").style.background ="#c4c4c4";
  }
  if(countkm == 1){
    y.style.background = "#c4c4c4";
  }
}
