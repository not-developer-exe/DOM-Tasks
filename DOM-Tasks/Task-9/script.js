var btn = document.querySelector('button')
var count = document.querySelector('#count')

let currentCount = 0

btn.addEventListener('click', function(){
    currentCount++
    count.textContent = currentCount
})