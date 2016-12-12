var score1 = 0;
var score2 = 0;
//var limit = document.querySelector('#entry').value;
var limit = 5;
var s1 = document.querySelector(".score1");
var s2 = document.querySelector(".score2");
limitSpan.innerHTML = limit;
s1.innerHTML = score1;
s2.innerHTML = score2;

function p1(){
  if(score2!=limit){
    if (score1 == limit-1){
      s1.innerHTML = score1+=1;
      s1.style.color="green";
      
    }
    else if (score1<limit){
      s1.innerHTML = score1+=1;
      console.log(limit);
    }
  }
}


function p2(){
  if(score1 != limit){
    if (score2 == limit-1 && score1 !=limit){
      s2.innerHTML = score2+=1;
      s2.style.color="green";
    }
    else if (score2<limit && score1 != limit){
      s2.innerHTML = score2+=1;
    } 
  }
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



