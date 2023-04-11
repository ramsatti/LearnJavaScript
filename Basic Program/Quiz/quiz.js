let qna = [{
    'question': 'Question 1: Who Made This Program (Hint: Youngest One in Our Family)?',
    'ans': 1,
    'o1': 'Ram',
    'o2': 'Varshith',
    'o3': 'Hema (Mom)',
    'o4': 'Siva (Dad)'
},
{
    "question": "Question 2: Who Gave This Project?",
    "ans": 1,
    "o1": "Varshith",
    "o2": "Ram",
    "o3": "Hema",
    "o4": "Siva"
}
]

let index = 0
let score = 0

function displayQstn() {
    let q2d = qna[index]
    let question = document.getElementById('q')
    question.innerHTML = q2d.question
    let op1 = document.getElementById('option1')
    op1.innerHTML = q2d.o1
    let op2 = document.getElementById('option2')
    op2.innerHTML = q2d.o2
    let op3 = document.getElementById('option3')
    op3.innerHTML = q2d.o3
    let op4 = document.getElementById('option4')
    op4.innerHTML = q2d.o4
}

function checkAns() {
    let ans = qna[index].ans
    console.log(ans)
    let op1 = document.getElementById('coption1').checked
    let op2 = document.getElementById('coption2').checked
    let op3 = document.getElementById('coption3').checked
    let op4 = document.getElementById('coption4').checked
    let printing = document.getElementById('printer')

    if (ans == 1 && op1) {
        printing.innerHTML = 'You are Correct!'
        ++score
        ++index
        displayQstn()
    }
    else if (ans == 2 && op2) {
        printing.innerHTML = 'You are Correct'
        ++score
        ++index
        displayQstn()
    }
    else if (ans == 3 && op3) {
        printing.innerHTML = 'You are Correct'
        ++score
        ++index
        displayQstn()
    }
    else if (ans == 4 && op4) {
        printing.innerHTML = 'You are Correct'
        ++score
        ++index
        displayQstn()
    }
}

displayQstn()
console.log(score)