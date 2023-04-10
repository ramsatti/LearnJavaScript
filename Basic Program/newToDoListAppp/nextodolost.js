function addinItem() {
    let idGenerator = generateString(25);
    let taskPrint = document.getElementById('tasks');
    let typerValue = document.getElementById('typing').value;
    taskPrint.innerHTML += `<p id="${idGenerator}"> ${typerValue} <button onclick="pop('${idGenerator}')"> ❌ </button> <button onclick="strikeThrough('${idGenerator}')"> ✔️ Done </button></p>`;
}

// Id Generator
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// Popper
function pop(id) {
    let element = document.getElementById(id);
    element.parentNode.removeChild(element);
}

// Strikethrough
function strikeThrough(id) {
    let element = document.getElementById(id);
    element.style.textDecoration = "line-through";
}