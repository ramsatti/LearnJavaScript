let qna = JSON.parse(localStorage.getItem('storeQna'))


console.log()
localStorage.setItem('storeQna', JSON.stringify(qna))
let index = 0
let score = 0

function displayQstn() {
    if (index >= qna.length) {
        index = 0
        alert('Your Final Score = ' + score + '. You Can See The Final Score Top Right of WebPage')
        finalScore = document.getElementById('score').innerHTML = 'Final Score = ' + score
        score = 0
        location.reload()
    }
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
    let ansnewVal = qna[index].ansnewVal
    let op1 = document.getElementById('coption1').checked
    let op2 = document.getElementById('coption2').checked
    let op3 = document.getElementById('coption3').checked
    let op4 = document.getElementById('coption4').checked
    let printing = document.getElementById('printer')

    if (ansnewVal == 1 && op1) {
        printing.innerHTML = 'You are Correct!'
        ++score
        ++index
        displayQstn()
    }
    else if (ansnewVal == 2 && op2) {
        printing.innerHTML = 'You are Correct'
        ++score
        ++index
        displayQstn()
    }
    else if (ansnewVal == 3 && op3) {
        printing.innerHTML = 'You are Correct'
        ++score
        ++index
        displayQstn()
    }
    else if (ansnewVal == 4 && op4) {
        printing.innerHTML = 'You are Correct'
        ++score
        ++index
        displayQstn()
    }
    else {
        printing.innerHTML = 'You are Incorrect Unforunately'
        --score
    }

    document.getElementById('coption1').checked = false
    document.getElementById('coption2').checked = false
    document.getElementById('coption3').checked = false
    document.getElementById('coption4').checked = false
}

function modify() {
    let pwdCheck = prompt('What is the Password? ')
    if (pwdCheck == 'codeNerd') {
        let questionNewValue = prompt('What is the Question? ')
        qna[index].question = questionNewValue
        let o1NewValue = prompt('What is Option 1?')
        qna[index].o1 = o1NewValue
        let o2NewValue = prompt('What is Option 2?')
        qna[index].o2 = o2NewValue
        let o3NewValue = prompt('What is Option 3?')
        qna[index].o3 = o3NewValue
        let o4NewValue = prompt('What is Option 4?')
        qna[index].o4 = o4NewValue
        let ansnewVal = prompt('What Option is the Answer?')
        document.getElementById('coption1').checked = false
        document.getElementById('coption2').checked = false
        document.getElementById('coption3').checked = false
        document.getElementById('coption4').checked = false
        qna[index].ansnewVal = Number(ansnewVal)
        localStorage.setItem('storeQna', JSON.stringify(qna))
        displayQstn()
    }
}

function createQuestion() {
    let paswrdCheck = prompt('What is the Password? ')
    if (paswrdCheck == 'monkeys can fly') {
        let aboutQuestion = prompt('What is the Question? ')
        let o1create = prompt('What is Option 1?')
        let o2create = prompt('What is Option 2?')
        let o3create = prompt('What is Option 3?')
        let o4create = prompt('What is Option 4?')
        let answer = prompt('What Option is the Answer?')

        let object2append = {
            "question": aboutQuestion,
            "o1": o1create,
            "o2": o2create,
            'o3': o3create,
            'o4': o4create,
            'ansnewVal': answer

        }
        qna.push(object2append)
        localStorage.setItem('storeQna', JSON.stringify(qna))
        
        //UnSelect Radio After Submitting -----------------
        document.getElementById('coption1').checked = false
        document.getElementById('coption2').checked = false
        document.getElementById('coption3').checked = false
        document.getElementById('coption4').checked = false
    }
}

displayQstn()
console.log(score)