let timer = 30;

setInterval(()=>{

let t = document.getElementById("timer");

if(t){

t.innerHTML = timer;

timer--;

if(timer < 0){

timer = 30;

}

}

},1000);


function signup(){

let email = document.getElementById("email").value;

let password = document.getElementById("password").value;

localStorage.setItem("email",email);

localStorage.setItem("password",password);

let id = Math.floor(Math.random()*99999);

localStorage.setItem("userId",id);

alert("Signup Success");

}


function login(){

let email = document.getElementById("email").value;

let password = document.getElementById("password").value;

if(
email == localStorage.getItem("email")
&&
password == localStorage.getItem("password")
){

document.getElementById("loginBox").style.display="none";

document.getElementById("mainPanel").style.display="block";

document.getElementById("userEmail").innerHTML=email;

document.getElementById("userId").innerHTML=localStorage.getItem("userId");

loadHistory();

}else{

alert("Wrong Login");

}

}


function logout(){

location.reload();

}


function deposit(){

let amount = prompt("Enter Deposit Amount");

if(amount < 100){

alert("Minimum Deposit ₹100");

return;

}

let upi = localStorage.getItem("upi") || "winnerindia@upi";

alert("Pay on UPI:\n"+upi);

let utr = prompt("Enter UTR Number");

let deposits = JSON.parse(localStorage.getItem("deposits")) || [];

deposits.push({

amount:amount,

utr:utr,

status:"Processing",

date:new Date().toLocaleString()

});

localStorage.setItem("deposits",JSON.stringify(deposits));

loadHistory();

alert("Deposit Submitted");

}


function withdraw(){

let amount = prompt("Enter Withdraw Amount");

if(amount < 110){

alert("Minimum Withdraw ₹110");

return;

}

let withdraws = JSON.parse(localStorage.getItem("withdraws")) || [];

withdraws.push({

amount:amount,

status:"Pending",

date:new Date().toLocaleString()

});

localStorage.setItem("withdraws",JSON.stringify(withdraws));

loadHistory();

alert("Withdraw Submitted");

}


function loadHistory(){

let deposits = JSON.parse(localStorage.getItem("deposits")) || [];

let depositHTML = "";

deposits.forEach(d=>{

depositHTML += `
<p>
₹${d.amount}
|
${d.status}
|
${d.date}
</p>
`;

});

let dh = document.getElementById("depositHistory");

if(dh){

dh.innerHTML = depositHTML;

}


let withdraws = JSON.parse(localStorage.getItem("withdraws")) || [];

let withdrawHTML = "";

withdraws.forEach(w=>{

withdrawHTML += `
<p>
₹${w.amount}
|
${w.status}
|
${w.date}
</p>
`;

});

let wh = document.getElementById("withdrawHistory");

if(wh){

wh.innerHTML = withdrawHTML;

}

let ad = document.getElementById("adminDeposits");

if(ad){

ad.innerHTML = depositHTML;

}

let aw = document.getElementById("adminWithdraws");

if(aw){

aw.innerHTML = withdrawHTML;

}

}


function saveUpi(){

let upi = document.getElementById("upiInput").value;

localStorage.setItem("upi",upi);

alert("UPI Saved");

}


function setResult(){

let result = document.getElementById("resultInput").value;

localStorage.setItem("gameResult",result);

alert("Result Set: "+result);

}


function bet(type){

let amount = prompt("Enter Bet Amount");

if(!amount) return;

let result = localStorage.getItem("gameResult") || "0";

let balance = parseInt(document.getElementById("balance").innerHTML);

if(result % 2 == 0){

balance += parseInt(amount);

alert("You Win");

}else{

balance -= parseInt(amount);

alert("You Lose");

}

document.getElementById("balance").innerHTML = balance;

}

loadHistory();
