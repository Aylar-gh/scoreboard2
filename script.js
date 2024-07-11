let countel = document.getElementById("count-home")

let count = 0;

function homebtn1(){
   count = count+1;
    countel.textContent = count;
}

function homebtn2(){
   count = count +2 ;
   countel.textContent = count;
}

function homebtn3(){
    count = count + 3;
    countel.textContent = count;
}
 
let guestcount = document.getElementById("count-guest");
let number = 0;
function guestbtn1(){
   number = number +1;
   guestcount.textContent = number;
}

function guestbtn2(){
    number = number +2;
    guestcount.textContent = number;
 }


function guestbtn3(){
    number = number +3;
    guestcount.textContent = number;
 }

