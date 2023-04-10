let p = document.getElementById('parent')
let c = document.getElementById('child')

document.addEventListener('click', see, { capture: true })

document.addEventListener('click', click => {
    console.log('Document Bubble')
})

p.addEventListener('click', click => {
    console.log('Parent Capture')
    click.stopPropagation()
    if (click.stopPropagation() == true) {
        document.removeEventListener('click', see)
    }
}, { capture: true })

p.addEventListener('click', click => {
    console.log('Parent Bubble')
})

c.addEventListener('click', click => {
    console.log('Child Capture')
}, { capture: true })

c.addEventListener('click', click => {
    console.log('Child Bubble')
})

function see() {
    console.log('Document Capture')
}