// INPUT FORM 




MONGO_INFO = process.env.MONGO_INFO;

$(function() {


  
  $( "#failingg" ).click(function() {
    $( "#spiral" ).toggle( "slow", function() {
      // Animation complete.
    });
  });

});

  



function getInputValue(){
  // Selecting the input element and get its value 
let mycontactfname = document.getElementById('fname').value;
let mycontactlname = document.getElementById('lname').value;
let mycontactage = document.getElementById('fage').value;
const thebutton = document.getElementById('failingg').innerHTML= 'MESSAGE SUBMITTED !';



};




