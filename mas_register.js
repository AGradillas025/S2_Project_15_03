"use strict";
/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 3


   Filename: mas_register.js

   Author:  Anthony S,A Gradillas
   Date:    4.19.19
   
   Function List
   =============
   
   formTest()
      Performs a validation test on the selection of the conference
      session package and the conference discount number
   
   calcCart()
      Calculates the cost of the registration and saves data
      in session storage
      
   writeSessionValues()
      Writes data values from session storage in to the
      registration summary form


*/

// Adds an event listener to run an anonymous function on the load event
window.addEventListener("load", function () {
      // Calls the calcCart function
      calCart();
      // Runs the sessionTest function when clicked
      document.getElementById("regSubmit").onclick = sessionTest;
      // The onblur event handlers are for the input boxes
      document.getElementById("fnBox").onblur = calcCart;
      document.getElementById("lnBox").onblur = calcCart;
      document.getElementById("groupBox").onblur = calcCart;
      document.getElementById("mailBox").onblur = calcCart;
      document.getElementById("phoneBox").onblur = calcCart;
      document.getElementById("banquetBox").onblur = calcCart;
      // The onchange event handler is for the sectionBox selection list
      document.getElementById("sessionBox").onchange = calcCart;
      // The onclick event handler is for the mediaCB check box which runs the calcCart function in response
      document.getElementById("mediaCB").onclick = calcCart;
});

// The main purpose of the following function is to provide a validation test for the confrence session selection list
function sessionTest() {
      var confSession = document.getElementById("sessionBox");

      // Tests whether the slected index of the sessionBox section list is equal to -1
      if (confSession.selectedIndex === -1) {
            sessionBox.setCustomValidity("Select a Session Package");
      } else {
            sessionBox.setCustomValidity("");
      }
}

// The function calculates the registration cost and to save information about the customer's choices in session storage
function calcCart() {
      // Within confName the values first and last name are stored
      sessionStorage.confName = document.forms.regForm.elements.fnBox.value + " " + document.forms.regForm.elements.lnBox.value;

      // The values group, mail, phone, and banquet are all stored within the session storage variables
      sessionStorage.confGroup = document.forms.regForm.elements.groupBox.value;
      sessionStorage.confMail = document.forms.regForm.elements.mailBox.value;
      sessionStorage.confPhone = document.forms.regForm.elements.phoneBox.value;
      sessionStorage.confBanquet = document.forms.regForm.elements.banquetBox.value;

      // The value of banquet cost will be multiplied by 55
      sessionStorage.confBanquetCost = confBanquet * 55;
      sessionStorage.selectedIndex = document.forms.regForm.elements.sesionBox.value;

      // Records which session the user has selected
      if (sessionBox.selectedIndex !== -1) {
            sessionStorage.confSession = document.forms.regForm.elements.sessionBox[selectedIndex].text;
            sessionStorage.confSessionCost = document.forms.regForm.elements.sessionBox[selectedIndex].value;
      } else {
            sessionStorage.confSession = "";
            sessionStorage.confSessionCost = 0;
      }

      // This will allow the user to opt to purchase a meida pack for $115
      if (forms.regForm.elements.mediaCB.checked) {
            sessionStorage.confPack = "yes";
            sessionStorage.confPackCost = 115;
      } else {
            sessionStorage.confPack = "no";
            sessionStorage.confPackCost = 0;
      }

      // 
      function writeSessionValues() {
            //
            document.getElementById("regName").textContent = sessionStorage.confName;
            document.getElementById("regGroup").textContent = sessionStorage.confGroup;
            document.getElementById("regEmail").textContent = sessionStorage.confMail;
            document.getElementById("regPhone").textContent = sessionStorage.confPhone;
            document.getElementById("regSession").textContent = sessionStorage.confSession;
            document.getElementById("regBanquet").textContent = sessionStorage.confBanquet;
            document.getElementById("regPack").textContent = sessionStorage.confPack;

            //
            document.getElementById("regTotal").textContent = "$" + sessionStorage.confTotal;
      }
}