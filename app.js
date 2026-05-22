// app.js

let balance = 1000;
let withdrawCount = 0;
let time = 30;
let currentUser = localStorage.getItem("user");

function updateBalance(){

const balanceBox = document.getElementById("balance");

if(balanceBox){

balanceBox.innerHTML = "₹" + balance;

}

}

window.onload = function(){

updateBalance();

const loginBtn = document.querySelector(".login-btn");
const logoutBtn = document.querySelector(".logout-btn");

if(currentUser){

if(loginBtn) loginBtn.style.display = "none";
if(logoutBtn) logoutBtn.style.display = "inline-block";

}else{

if(loginBtn) loginBtn.style.display = "inline-block";
if(logoutBtn) logoutBtn.style.display = "none";

}

}

function login(){

let email = prompt("Enter Email");

if(email){

localStorage.setItem("user", email);

alert("Login Successful");

window.location.reload();

}

}

function logout(){

localStorage.removeItem("user");

alert("Logout Successful");

window.location.reload();

}

function deposit(){

let amount = prompt("Enter Deposit Amount");

if(amount){

alert(
"UPI ID: winnerindia@upi\n\n" +
"QR Scan करके payment करें"
);

let utr = prompt("Enter UTR Number");

if(utr){

alert(
"Deposit Request Submitted\n\n" +
"Status: Processing"
);

}

}

}

function withdrawMoney(){

if(withdrawCount >= 3){

alert("आज का Withdrawal Limit पूरा हो गया");

return;

}

let bank = prompt("Enter Bank Name");

if(!bank) return;

let account = prompt("Enter Account Number");

if(!account) return;

let ifsc = prompt("Enter IFSC Code");

if(!ifsc) return;

let amount = Number(prompt("Enter Withdrawal Amount"));

if(amount > balance){

alert("Insufficient Balance");

return;

}

let tax = amount * 0.30;

let finalAmount = amount - tax;

balance -= amount;

withdrawCount++;

updateBalance();

alert(

"Withdrawal Successful ✅\n\n" +

"Bank: " + bank + "\n" +

"Account: " + account + "\n" +

"IFSC: " + ifsc + "\n\n" +

"30% Government Tax: ₹" + tax + "\n\n" +

"Final Amount: ₹" + finalAmount + "\n\n" +

"Today's Withdrawal: " + withdrawCount + "/3"

);

}

function placeBet(type){

let amount = Number(
document.getElementById("betAmount").value
);

if(amount <= 0){

alert("Enter Bet Amount");

return;

}

if(amount > balance){

alert("Insufficient Balance");

return;

}

balance -= amount;

updateBalance();

let result = Math.floor(Math.random() * 10);

let win = Math.random() > 0.5;

if(win){

let winAmount = amount * 2;

balance += winAmount;

updateBalance();

alert(
"🎉 YOU WIN ₹" + winAmount +
"\n\nResult Number: " + result
);

}else{

alert(
"❌ YOU LOSS ₹" + amount +
"\n\nResult Number: " + result
);

}

}

function support(){

let link = localStorage.getItem("telegramSupport");

if(link){

window.location.href = link;

}else{

alert("Support Not Available");

}

}

function home(){

window.scrollTo({
top:0,
behavior:"smooth"
});

}

function promotion(){

alert(
"🎁 Invite Friends & Earn Bonus"
);

}

function wallet(){

alert(
"💰 Wallet Balance: ₹" + balance
);

}

function profile(){

alert(
"👤 Winner India Profile\n\n" +
"Gaming लाइन में सरकार 30% टैक्स लेती है।"
);

}

setInterval(() => {

const timerBox = document.getElementById("timer");

if(timerBox){

time--;

timerBox.innerHTML = time;

if(time <= 0){

time = 30;

}

}

}, 1000);
