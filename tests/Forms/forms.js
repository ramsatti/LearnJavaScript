function data() {
    let user = document.getElementById('name').value
    let date = document.getElementById('dob').value
    let gender = document.getElementById('gender').value
    let hobbies = document.getElementById('hobbies').value
    let beginner = document.getElementById('beginner').value
    let intermediate = document.getElementById('intermediate').value
    let experienced = document.getElementById('experienced').value
    let agree = document.getElementById('agree').value
    let label = document.getElementById('label').value
    let submitButton = document.querySelector('input[type="submit"]').value

    fullData = `${user}, ${date}, ${gender}, ${hobbies}, ${beginner}, ${intermediate}, ${experienced}, ${agree}, ${label}, ${submitButton}`
    console.log(fullData)
    alert(fullData)
}