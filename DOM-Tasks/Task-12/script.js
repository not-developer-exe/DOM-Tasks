var img = document.querySelector('img')

let flag =0;


img.addEventListener('dblclick',function(){
    if(flag == 0){
        var heart = document.querySelector('#heart')
        heart.style.transform = 'scale(1.5)'
        flag = 1;
    }
    else{
        var heart = document.querySelector('#heart')
        heart.style.transform = 'scale(1)'
        flag = 0;
    }

})
img.addEventListener('mouseout',function(){
    var heart = document.querySelector('#heart')
    heart.style.transform = 'scale(1)'
    flag = 0;
})