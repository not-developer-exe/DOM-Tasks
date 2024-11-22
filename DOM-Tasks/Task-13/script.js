var btn = document.querySelector('button')

let flag = 0;
btn.addEventListener('click',function(){
    if(flag === 0){
        document.body.style.backgroundColor = 'black'
        document.body.style.color = 'white'
        btn.style.backgroundColor = 'white'
        btn.style.color = 'black'
        btn.style.border = '1px solid black'
        flag = 1;
        btn.textContent = 'Turn off Dark Mode'
    }
    else{
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
        btn.style.backgroundColor = 'black'
        btn.style.color = 'white'
        btn.style.border = '1px solid white'
        flag = 0;
        btn.textContent = 'Turn on Dark Mode'
    }
})

