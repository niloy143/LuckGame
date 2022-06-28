var namChar = "abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numChar = "0123456789";

var regH = document.getElementsByTagName('h2')[0];
var logH = document.getElementsByTagName('h2')[1];

var regBox = document.getElementsByClassName('reg')[0];
var regName = document.getElementById('reg-name');
var regNumber = document.getElementById('reg-number');
var regPass = document.getElementById('reg-pass');
var regRePass = document.getElementById('reg-re-pass');
var regButton = document.getElementById('reg-button');

var logBox = document.getElementsByClassName('log')[0];
var logNumber = document.getElementById('log-number');
var logPass = document.getElementById('log-pass');
var logButton = document.getElementById('log-button');

var dotForm = document.getElementsByClassName('form')[0];
var dotFull = document.getElementsByClassName('full')[0];



var guestName = document.querySelector('#guestname');
var head = document.querySelector('#head');
var tail = document.querySelector('#tail');
var test = document.querySelector('#test');
var played = document.querySelector('#played');
var win = document.querySelector('#win');
var lose = document.querySelector('#lose');
var score = document.querySelector('#score');


function reg() {
    regBox.style.display = 'block';
    logBox.style.display = 'none';
    logH.style.background = 'none';
    regH.style.background = 'blue';
}

function log() {
    regBox.style.display = 'none';
    logBox.style.display = 'block';
    logH.style.background = 'blue';
    regH.style.background = 'none';
}

//=========================== Input Limitation ==================

regName.addEventListener('input', function(){
    for(var i=0; i<regName.value.length; i++) {
        if(namChar.indexOf(regName.value[i]) == -1) {
            regName.value = regName.value.slice(0, i);
        }
    }
    if(regName.value.length > 25) {
        regName.value = regName.value.slice(0, 25);
    }
});

regNumber.addEventListener('input', function(){
     for(var i=0; i<regNumber.value.length; i++) {
        if(numChar.indexOf(regNumber.value[i]) == -1){
            regNumber.value = regNumber.value.slice(0, i);
        }
     }
     if(regNumber.value.length > 11) {
        regNumber.value = regNumber.value.slice(0, 11);
    }
});

regPass.addEventListener('input', regpassword);
regRePass.addEventListener('input', regpassword); 
function regpassword(){
    if(regPass.value.length > 20) {
       regPass.value = regPass.value.slice(0, 20);
    }
    if(regRePass.value.length > 20) {
        regRePass.value = regRePass.value.slice(0, 20);
     }
}


logNumber.addEventListener('input', function(){
    for(var i=0; i<logNumber.value.length; i++) {
       if(numChar.indexOf(logNumber.value[i]) == -1){
           logNumber.value = logNumber.value.slice(0, i);
       }
    }
    if(logNumber.value.length > 11) {
       logNumber.value = logNumber.value.slice(0, 11);
   }
});

logPass.addEventListener('input', function(){
    if(logPass.value.length > 20) {
       logPass.value = logPass.value.slice(0, 20);
    }
});

//=========================== Button Function ==================

regButton.addEventListener('click', function(e){
    if((regName.value.length > 1) && (regNumber.value.length == 11) && (regPass.value == regRePass.value) && (regPass.value.length > 5) && (regRePass.value.length > 5)){
        e.preventDefault();
        dotForm.style.display = 'none';
        dotFull.style.display = 'block';
    }
    else {alert('Name should be at least 2 characters \n Number should be 11 digits \n Passwords should match \n Password should be 6-20 characters.')}
    guestName.innerHTML = 'Welcome ' + regName.value + ',\n Test your luck.';
}) 

logButton.addEventListener('click', function(e) {
    if(logNumber.value === '12345678900' && logPass.value === '123456') {
        e.preventDefault();
        dotForm.style.display = 'none';
        dotFull.style.display = 'block';
    } else {alert('Number or Password is invalid.');}
    guestName.innerHTML = 'Welcome Guest' + Number.parseInt(Math.random()*10000) + ',\n Test your luck.';
});

//================================ Next Page =======================================
// ==================================================================================
// ===================================================================================

var playedn = 0;
var winn = 0;
var losen = 0;
var scoren = 0;
var selection;

head.addEventListener('click', function(){
    head.style.background = 'aqua';
    tail.style.background = 'black';
    selection = 0;
})

tail.addEventListener('click', function(){
    tail.style.background = 'aqua';
    head.style.background = 'black';
    selection = 1;
})

test.addEventListener('click', function(){
    var toss = Number.parseInt(Math.random()*2);
    if(toss === selection){
        winn++;
        playedn++;
        scoren++;

        if(selection == 0){
            guestName.innerHTML = 'Congratulations! It\'s Head.';
        }else{guestName.innerHTML = 'Congratulations! It\'s Tail.'}
    }
    
    else if(selection == undefined){
        alert('Select \'Head\' or \'Tail\'')
    }
    
    else {
        losen++;
        playedn++;
        scoren--;
        if(selection == 1){
            guestName.innerHTML = 'Oops! It\'s Head.';
        }else{guestName.innerHTML = 'Oops! It\'s Tail.'}
    };

    
    played.innerHTML = playedn;
    win.innerHTML = winn;
    lose.innerHTML = losen;
    score.innerHTML = scoren;
});

