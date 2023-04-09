function dadJoker() {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    }).then(async function (response) {
        let resp = await response.json()
        return document.getElementById("jokePrint").innerHTML = resp.joke;
    })
}