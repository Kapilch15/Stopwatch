var isStop = true;
var sec = 0;
var min = 0;
var hr  = 0;

function startTimer(){
    console.log("Timer is starting"); 
   if(isStop == true){
    isStop = false;
    timer();
   }
}

function timer(){
   if(isStop == false){

    sec = parseInt(sec);
    min = parseInt(min); 
    hr  = parseInt(hr); 
    sec++;

    if(sec==60){
      sec = 0;
      min++;
    }

    if(min==60){ 
      min = 0;
      hr++;
    }
  
    //condtions for seconds after every 10sec
   if(sec<10){
     sec = "0" + sec;
   }
   if(min<10){
     min = "0" + min;
   }
   if(hr<10){
      hr = "0" + hr;
   }

    stopWatch.innerHTML= hr + " : "  + min + " : " + sec;

    setTimeout("timer()", 1000);
   }
}

function stopTimer(){
   isStop = true;
}

function resetTimer(){
   isStop = true;
   sec = 0;
   min = 0;
   hr = 0;

   stopWatch.innerHTML = "00 : 00 : 00";
}  
