function addItem() {
    let gen = generateString(10)
    document.getElementById('tasks').innerHTML += `<p id="${gen}" style="background-color: white; border-radius: 5px; font-size: 1rem"> ${document.getElementById('typing').value} <button onclick="pop('${gen}')"> X </button> </p>`
}

//Random Id Generator
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

//Remover
function pop(id) {
    var element = document.getElementById(id);
    element.parentNode.removeChild(element);
}