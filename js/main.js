 // Login button event handler
 const loginBtn = document.getElementById("login");
 loginBtn.addEventListener("click", function () {

     const loginArea = document.getElementById("loginArea");
     loginArea.style.display = "none";

     const transactionArea = document.getElementById("transactionArea");
     transactionArea.style.display = "block";
 })

 // Deposit button event handler

 const depositBtn = document.getElementById("addDeposit");
 depositBtn.addEventListener("click", function () {

     const depositNumber = getInputNumber("depositAmount");

     updateSpanText("currentDeposit", depositNumber);
     updateSpanText("currentBalance", depositNumber);

     document.getElementById("depositAmount").value = "";

 })

 // Withdraw button event handler
 const withdrawBtn = document.getElementById("addWithdraw");
 withdrawBtn.addEventListener("click", function () {
     const withdrawNumber = getInputNumber("withdrawAmount");

     updateSpanText("currentWithdraw", withdrawNumber);
     updateSpanText("currentBalance", -1 * withdrawNumber);

     document.getElementById("withdrawAmount").value = "";
 })

 function getInputNumber(id) {
     const Amount = document.getElementById(id).value;
     const AmountNumber = parseFloat(Amount);
     return AmountNumber;
 }

 function updateSpanText(id, depositNumber) {
     const currentAmount = document.getElementById(id).innerText;
     const currentNumber = parseFloat(currentAmount);
     const totalAmount = depositNumber + currentNumber;
     document.getElementById(id).innerText = totalAmount;
 }