var box=document.getElementById('box');
var button=document.getElementById('btn');
var scr= document.getElementById('s');
function move() {
    var left = 0
    var fwdMove = true;
    //button.classList.add('display');
    function frame() {
        if (left < 0) {
            fwdMove = true;
        } else if (left > 380) {
            fwdMove = false;
        }

        fwdMove?left += 10:left -= 10
        box.style.left = left + 'px' // show frame
    }    
    var id = setInterval(frame, 30) // draw every 1ms
}


function copy(){
    var nbox = document.createElement('DIV');
    nbox.classList.add('box');
    document.body.appendChild(nbox);
    movedwn(nbox);
    console.log('you just clicked this box');
}

var s=0;
var h=580;
function movedwn(ele) { 
  var pos = 80;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == h) {
      clearInterval(id);
    } else {
      pos++; 
      ele.style.top = pos + "px"; 
    }
  }
  h-=50;
  s+=1;
  document.getElementById('s').innerHTML=s;
}