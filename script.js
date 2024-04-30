let myArea = document.querySelector("#myArea");
let myChar = document.querySelector("#myChar");

let myWord = document.querySelector("#words");
let noSpace = document.querySelector("#withOutSpace");
let syllables = document.querySelector("#slb");
let sentence = document.querySelector("#stns");
let myPgs = document.querySelector("#pgs");
let read = document.querySelector("#read");
let speak = document.querySelector("#speak");
let cut = document.querySelector(".cut");



let rContainer = document.querySelector(".right-mian-container");

let btn1 = document.querySelector("#btn1");

let myBody = document.querySelector("#myBody");


myArea.addEventListener("input", function () {
  myChar.innerHTML = myArea.value.length
  noSpace.innerHTML = myArea.value.trim(" ").length
  sentence.innerHTML = myArea.value.split(".").length
  // myPgs.innerHTML = myArea.value.split(".").length

// words and syllabus
  myWord.innerHTML = myArea.value.split(" ").length
  syllables.innerHTML = myArea.value.split(" ").length


  myPgs.innerHTML = myArea.value.split(/[\r\n]+/).length

})




btn1.addEventListener("click", function () {

  myChar.innerHTML = myArea.value.length

})

btn2.addEventListener("click", function () {

  myArea.value = myArea.value.toUpperCase();

})



btn3.addEventListener("click", function () {

  myArea.value = myArea.value.toLowerCase();

})


btn4.addEventListener("click", function () {

  myArea.value = "";

})



btn5.addEventListener("click", function () {

 rContainer.innerHTML += `<div class="text-box-container">
    <textarea id="myArea" class="input-box">
    </textarea>
    <!-- <div > -->
    <div class="cut">X</div>
    <div class="add">+</div>
    <!-- </div> -->
</div> 

<div class="right-container2">


<div class="c-btn2">
    <button id="btn1">Check Word</button>
    <button id="btn5">clone</button>
    <button id="btn4">Clear</button>
</div>


<div>
    <div class="c-btn1">
        <button id="btn2">Convert To Uppercase</button>
        <button id="btn3">Convert To LowerCase</button>
    </div>
</div>
</div>
`;
cut.addEventListener("click" ,()=>{
  rContainer.innerHTML = 0;
})
})





