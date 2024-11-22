var btn = document.querySelector('button')
var winner = document.querySelector('h2 span')
var teams = ['CSK', 'RCB', 'MI', 'SRH', 'KKR', 'RR', 'DC', 'GT', 'LSG', 'PBKS']

btn.addEventListener('click', function(){
    var a = Math.floor(Math.random()*teams.length)
    winner.innerHTML = teams[a]
    winner.style.color = 'red'
    winner.style.fontSize = '100px'
})
console.log(winner)