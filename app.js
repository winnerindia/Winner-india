// app.js

let currentUser = localStorage.getItem("currentUser");

let users = JSON.parse(localStorage.getItem("users")) || [];

function signup(){

let email = document.getElementById("email").value;

let password = document.getElementById("password").value;

if(email=="" || password==""){
alert("Fill all details");
return;
}

let id = 1000 + users.length + 1;

let user = {
id:id,
email:email,
password:password,
wallet:1000
};

users.push(user);

localStorage.setItem("users",JSON.stringify(users));

alert("Signup Success");

}

function login(){

let email = document.getElementById("email").value;

let password = document.getElementById("password").value;

let found = users.find(u=>u.email==email && u.password==password);

if(found){

localStorage.setItem("currentUser",email);

location.reload();

}else{
alert("Wrong Login");
}

}

function logout(){

localStorage.removeItem("currentUser");

location.reload();

}

function loadUser(){

if(!currentUser)return;

document.getElementById("authBox").style.display="none";

document.getElementById("userPanel").style.display="block";

let user = users.find(u=>u.email==currentUser);

document.getElementById("userId").innerHTML=user.id;

document.getElementById("userEmail").innerHTML=user.email;

document.getElementById("wallet").innerHTML=user.wallet;

loadHistory();

}

function openDeposit(){

let amount = prompt("Enter Deposit Amount");

if(amount < 100){
alert("Minimum Deposit ₹100");
return;
}

let utr = prompt("Enter UTR Number");

let upi = localStorage.getItem("adminUpi") || "winnerindia@upi";

alert("Pay On UPI:\n"+upi);

let deposits = JSON.parse(localStorage.getItem("deposits")) || [];

deposits.push({
id:Math.floor(Math.random()*99999),
email:currentUser,
utr:utr,
amount:amount,
date:new Date().toLocaleString(),
status:"Processing"
});

localStorage.setItem("deposits",JSON.stringify(deposits));

alert("Deposit Submitted");

loadHistory();

}

function openWithdraw(){

let amount = prompt("Withdraw Amount");

if(amount < 110){
alert("Minimum Withdrawal ₹110");
return;
}

let bank = prompt("Bank Name");

let acc = prompt("Account Number");

let ifsc = prompt("IFSC Code");

let withdraws = JSON.parse(localStorage.getItem("withdraws")) || [];

withdraws.push({
id:Math.floor(Math.random()*99999),
email:currentUser,
amount:amount,
bank:bank,
account:acc,
ifsc:ifsc,
date:new Date().toLocaleString(),
status:"Pending"
});

localStorage.setItem("withdraws",JSON.stringify(withdraws));

alert("Withdrawal Submitted");

loadHistory();

}

function loadHistory(){

let deposits = JSON.parse(localStorage.getItem("deposits")) || [];

let html="";

deposits.forEach(d=>{

if(d.email==currentUser){

html += `
<p>
₹${d.amount} |
${d.status} |
${d.date}
</p>
`;

}

});

document.getElementById("depositHistory").innerHTML=html;

let withdraws = JSON.parse(localStorage.getItem("withdraws")) || [];

let whtml="";

withdraws.forEach(w=>{

if(w.email==currentUser){

whtml += `
<p>
₹${w.amount} |
${w.status} |
${w.date}
</p>
`;

}

});

document.getElementById("withdrawHistory").innerHTML=whtml;

}

function bet(type){

let amount = prompt("Enter Bet Amount");

if(amount==null)return;

alert(type+" Bet Success");

}

let sec = 30;

setInterval(()=>{

let timer = document.getElementById("timer");

if(timer){

sec--;

timer.innerHTML=sec;

if(sec<=0){

sec=30;

let result = localStorage.getItem("gameResult") || 0;

document.getElementById("result").innerHTML=result;

}

}

},1000);

function saveUpi(){

let upi = document.getElementById("upiInput").value;

localStorage.setItem("adminUpi",upi);

alert("UPI Updated");

}

function saveResult(){

let result = document.getElementById("gameResult").value;

localStorage.setItem("gameResult",result);

alert("Result Updated");

}

function loadAdmin(){

let deposits = JSON.parse(localStorage.getItem("deposits")) || [];

let dhtml="";

deposits.forEach(d=>{

dhtml += `
<div class="box">
<p>ID: ${d.id}</p>
<p>Email: ${d.email}</p>
<p>UTR: ${d.utr}</p>
<p>₹${d.amount}</p>
<p>${d.date}</p>
<p>${d.status}</p>
</div>
`;

});

let depo = document.getElementById("adminDeposit");

if(depo){
depo.innerHTML=dhtml;
}

let withdraws = JSON.parse(localStorage.getItem("withdraws")) || [];

let whtml="";

withdraws.forEach(w=>{

whtml += `
<div class="box">
<p>ID: ${w.id}</p>
<p>Email: ${w.email}</p>
<p>Bank: ${w.bank}</p>
<p>Account: ${w.account}</p>
<p>IFSC: ${w.ifsc}</p>
<p>₹${w.amount}</p>
<p>${w.date}</p>
<p>${w.status}</p>
</div>
`;

});

let wd = document.getElementById("adminWithdraw");

if(wd){
wd.innerHTML=whtml;
}

}

loadUser();

loadAdmin();
let gameTime = 30;
let sec = gameTime;

function changeGameTime(time){

gameTime = time;
sec = time;

}

function betNumber(num){

let amount = prompt("Enter Bet Amount");

if(amount==null)return;

alert("Bet Placed On Number "+num);

}

setInterval(()=>{

let timer = document.getElementById("timer");

if(timer){

sec--;

timer.innerHTML=sec;

if(sec<=0){

sec=gameTime;

let result = localStorage.getItem("gameResult") || 0;

document.getElementById("result").innerHTML=result;

}

}

},1000);
