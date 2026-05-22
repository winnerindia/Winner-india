let balance = 1000;
let withdrawCount = 0;
let time = 30;

setInterval(()=>{

 time--;
 document.getElementById("timer").innerHTML = time;

 if(time <= 0){
 time = 30;
 }

},1000);

function updateBalance(){

document.getElementById("balance").innerHTML = "₹" + balance;

}

function login(){
alert("Login Successful");
}

function logout(){
alert("Logout Successful");
}

function deposit(){

let amount = prompt("Deposit Amount");

if(amount){

alert("UPI ID: winnerindia@upi");

let utr = prompt("Enter UTR Number");

alert("Deposit Request Submitted");

}

}

function withdrawMoney(){

if(withdrawCount >= 3){
alert("Daily Withdrawal Limit Reached");
return;
}

let amount = prompt("Withdraw Amount");

let tax = amount * 0.30;
let finalAmount = amount - tax;

alert(
"Tax: ₹" + tax +
"\nFinal Amount: ₹" + finalAmount
);

withdrawCount++;

}

function placeBet(type){

let amount = Number(document.getElementById("betAmount").value);

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

let result = Math.floor(Math.random()*10);

let win = Math.random() > 0.5;

if(win){

let winAmount = amount * 2;

balance += winAmount;

updateBalance();

alert("YOU WIN ₹" + winAmount + "\nResult: " + result);

}else{

alert("YOU LOSS ₹" + amount + "\nResult: " + result);

}

}

function home(){
window.scrollTo({top:0,behavior:'smooth'});
}

function promotion(){
alert("Invite Friends & Earn Bonus");
}

function wallet(){
alert("Wallet Balance: ₹" + balance);
}

function support(){

let link = localStorage.getItem("telegramSupport");

if(link){
window.location.href = link;
}else{
alert("Support Not Available");
}

}
