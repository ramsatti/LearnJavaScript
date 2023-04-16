function changeColor() {
    let hexNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]

    let hexcode = ''

    for (let i = 0; i < 6; i++) {
        let random_index = Math.floor(Math.random() * hexNum.length)
        hexcode += hexNum[random_index]
    }

    document.getElementById("hex-code").innerHTML = hexcode
    document.body.style.backgroundColor = '#' + hexcode
}