var cnt=document.getElementById("count"); 
var water=document.getElementById("water");
var percent=cnt.innerText;
var interval;
interval=setInterval(function(){ 
  percent++; 
  cnt.innerHTML = percent; 
  water.style.transform='translate(0'+','+(100-percent)+'%)';
  if(percent==100){
    clearInterval(interval);
   window.location.replace("./index.html");
  }
},
15); 