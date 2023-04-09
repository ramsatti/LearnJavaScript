function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function questAns() {
    let input = prompt('Type in a Question?')
    let eightBallResponses = [
        'It is certain.',
        'Without a doubt.',
        'You may rely on it.',
        'Yes, definitely',
        'It is decidedly so.',
        'As I see it, yes.',
        'Most likely.',
        'Signs point to yes.',
        'Reply hazy, try again.',
        'Better not tell you now.',
        'Ask again later.',
        'Cannot predict now.',
        'Concentrate and ask again.',
        "Don't count on it.",
        'Outlook not so good.',
        'My sources say no.',
        'Very doubtful.',
        'My reply says no.'
    ]
    document.getElementById('response').innerHTML = eightBallResponses[randomNumber(0, eightBallResponses.length)]
}


