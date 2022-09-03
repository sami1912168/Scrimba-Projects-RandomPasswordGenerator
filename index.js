const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
 "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let passEl = document.getElementById("pass-el")
let pass1El= document.getElementById("pass1-el")  



function randomPassword1(){
    var v = ""
    for(let i=1; i<=15;i++){
        let indexRandom = Math.floor(Math.random()*90)+1
        v += characters[indexRandom] + "";
     }
    pass1El.textContent = v
    console.log(v)
}


function randomPassword(){
    var s = ""
    for(let i=1; i<=15;i++){
        let indexRandom = Math.floor(Math.random()*90)+1
        s += characters[indexRandom] + "";
     }
    passEl.textContent = s
    console.log(s)
}

// For copying the text whatevver displays.
function copyPassword() {
    var copyText = document.getElementById("pass-el");
    copyText.select();
    document.execCommand("copy");  
  }

  function copyPassword() {
    var copyText = document.getElementById("pass1-el");
    copyText.select();
    document.execCommand("copy");  
  }




