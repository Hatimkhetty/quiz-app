const questions = [{
    question: "Math Stand for ?",
    option1: "Mathametics",
    option2: "biology",
    option3: "Mathubiology",
    anwser: "1",
}, {
    question: "How Many Months In A Year?",
    option1: "10",
    option2: "11",
    option3: "12",
    anwser: "3",
}, {
    question: "Which Of The Following Is Used In Pencils?",
    option1: "Charcoal",
    option2: "Graphite",
    option3: "Silicon",
    anwser: "2",
}, {
    question: "A Married Couple adopted a male child. A few years later, </br> twin boys were born to them. The blood group of the couple is AB positive and O negative. The blood group of the three sons is A positive, B positive, and O positive. The blood group of the adopted son is?",
    option1: "O positive",
    option2: " B positive",
    option3: "Cannot be determined on the basis of the given data",
    anwser: "3",
}]


var question = document.getElementById("question")
var option1 = document.getElementById("option1")
var option2 = document.getElementById("option2")
var option3 = document.getElementById("option3")
var count = 0;
var optn = document.getElementsByName("option")
var correctAnwser = 0;


question.innerHTML = questions[count].question;
option1.innerHTML = questions[count].option1;
option2.innerHTML = questions[count].option2;
option3.innerHTML = questions[count].option3;





function nextquestion() {

    if (count < questions.length - 1) {

        question.innerHTML = "Q" + (count + 1) + ")" + questions[count].question;
        option1.innerHTML = questions[count].option1;
        option2.innerHTML = questions[count].option2;
        option3.innerHTML = questions[count].option3;
        count++
        disBtn();
        enableBtn();
        countDown();
    }


    else {
        document.write("Quiz End");
    }
    x = setInterval
}

function enableBtn() {
    var btn = document.getElementById('btn')
    btn.disabled = false
}
function disBtn() {
    var btn = document.getElementById('btn')
    btn.disabled = false
}


// score function

function score() {
    for (var i = 0; i < optn.length; i++) {
        if (Option[i].checked) {
            if (optn.value === questions[count].anwser) {
                score += 20
                correctAnwser++
                break;
             
            }
          
                  else if (Option[i].value !== questions[count].answer) {
                    Option[i].checked = false

              }
        }
    }

}


// timer 

let min = 5;
let mm = 0;
let sec = 0;
let second = document.getElementById('sec')
let minute = document.getElementById('min')
let timer;

function countDown() {
     mm++
     if (mm == 100) {

          sec--
          mm = 0
          second.innerHTML = sec


     }

     else if (min > 0 && sec == 0) {
          min--
          sec = 59
          second.innerHTML = sec
          minute.innerHTML = min
     }
     else if (min == 0 && sec == 0) {
          result()
          clearInterval(timer)
          sec = 00
          min = 00
          sec.innerHTML = sec
          minute.innerHTML = min
     }
}


