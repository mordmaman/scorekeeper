var score1 = 0;
var score2 = 0;
//var limit = document.querySelector('#entry').value;
var limit = 5;
var s1 = document.querySelector(".score1");
var s2 = document.querySelector(".score2");
limitSpan.innerHTML = limit;
s1.innerHTML = score1;
s2.innerHTML = score2;
//var numInput = document.querySelector("input");
var winner = false;

function p1(){
  if(!winner){
    score1++;
    if(score1 === limit){
			s1.classList.add("green");
			winner = true;
		}
  }
  s1.innerHTML = score1;
}

function p2(){
  if(!winner){
    score2++;
    if(score2 === limit){
			s2.classList.add("green");
			winner = true;
		}
  }
  s2.innerHTML = score2;
}

function entry(){
  alert("change");
}

function reset(){
  score1 = 0;
  score2 = 0;
  limit = 5;
  limitSpan.innerHTML = limit;
  s1.innerHTML = score1;
  s2.innerHTML = score2;
  s1.style.color="black";
  s2.style.color="black";
}





