"use strict"
// // the json section
// const clear = document.getElementById("clear");
// const format = document.getElementById("format");
// const compress = document.getElementById("compress");
// const copy = document.getElementById("copy");
// const open = document.getElementById("open");
// const fileInput = document.getElementById("fileInput");

// const textarea = document.getElementById("json");

// const fullscreen = document.getElementById("fullscreen");
// const jsonDiv = document.getElementById("jsonDiv");

// // the xml section 
// const clear1 = document.getElementById("clear1");
// const format1 = document.getElementById("format1");
// const compress1 = document.getElementById("compress1");
// const copy1 = document.getElementById("copy1");
// const open1 = document.getElementById("open1");
// const fileInput1 = document.getElementById("fileInput1");

// const textarea1 = document.getElementById("xml");

// const fullscreen1 = document.getElementById("fullscreen1");
// const xmlDiv = document.getElementById("xmlDiv");


// // global functions

// let clearFunc = function(textarea){
//     textarea.value = "";
// }
// let compressFunc = function(textarea){
//     textarea.value = textarea.value.replace(/\s/g, "");
// }
// let copyFunc = function(textarea){
//     textarea.select();
//   document.execCommand("copy");
//   alert("Text copied to clipboard!");
// }
// let openFunc = function (fileInput) {
//     fileInput.click();
//   }

// let fullscreenFunc = function (div,textarea) {
//     div.classList.toggle("fullscreen");
//     textarea.classList.toggle("fulltextarea");
//   }

// let readFile = function(e,textarea){
//     const selectedFile = e.target.files[0];
//   if (selectedFile) {
//     // Perform actions with the selected file, such as reading its content
//     const reader = new FileReader();

//     reader.onload = function (ee) {
//       const contents = ee.target.result;
//       textarea.value = contents;
//     };
//     reader.readAsText(selectedFile);
//   }
// }

// // the event listener for both section

// //clear
// clear.addEventListener("click", (e)=>clearFunc(textarea));
// clear1.addEventListener("click", (e)=>clearFunc(textarea1));

// //format
// format.addEventListener("click", function (e) {
//   const formattedJsonString = JSON.stringify(
//     JSON.parse(textarea.value),
//     null,
//     2
//   );
//   textarea.value = formattedJsonString;
// });

// format1.addEventListener("click",(e)=>{
//   console.log("not yet");
// })

// //compress
// compress.addEventListener("click", (e)=>compressFunc(textarea));
// // this compress is not working for xml , combine the element with thier attribute and become a not valid xml
// compress1.addEventListener("click",(e)=>{
// console.log("not yet");
// });

// //copy
// copy.addEventListener("click",(e)=> copyFunc(textarea));
// copy1.addEventListener("click",(e)=> copyFunc(textarea1));

// //open 
// open.addEventListener("click", (e)=>openFunc(fileInput));
// open1.addEventListener("click", (e)=>openFunc(fileInput1));


// fileInput.addEventListener("change", (e)=>readFile(e,textarea));
// fileInput1.addEventListener("change", (e)=>readFile(e,textarea1));


// //fullscreen
// fullscreen.addEventListener("click",(e)=> fullscreenFunc(jsonDiv,textarea));
// fullscreen1.addEventListener("click",(e)=> fullscreenFunc(xmlDiv,textarea1));

const btnSubmitPotato = document.getElementById("submitPotato");
const btnSubmitPepper = document.getElementById("submitPepper");
const btnSubmitTomato = document.getElementById("submitTomato");

const classifierForm = document.getElementById("classifierForm");
const classifierForm1 = document.getElementById("classifierForm1");
const classifierForm2 = document.getElementById("classifierForm2");

const potatoInput = document.getElementById("potato_classifier");
const pepperInput = document.getElementById("pepper_classifier");
const tomatoInput = document.getElementById("tomato_classifier");



btnSubmitPotato.addEventListener("click",(e)=>{
  if(potatoInput.value === ''){

    alert("No file chosen !!");
    return false;
  }
  classifierForm.submit();
});

btnSubmitPepper.addEventListener("click",(e)=>{
  // console.log('test')
  if(pepperInput.value === ''){

    alert("No file chosen !!");
    return false;
  }
  classifierForm2.submit();
});

btnSubmitTomato.addEventListener("click",(e)=>{
  if(tomatoInput.value === ''){

    alert("No file chosen !!");
    return false;
  }
  classifierForm1.submit();
});