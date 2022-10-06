const container=document.querySelector('.container');
const sizeEl=document.querySelector('.size');
let size = sizeEl.value;
const color=document.querySelector('.color');
const resetBtn = document.querySelector('.btn')


let draw = false;

function populate(size){
    container.style.setProperty('--size', size)
    for (let i=0; i<size*size; i++) //Adding each pixel in acord of the size
    {
        const div = document.createElement('div');
        div.classList.add('pixel');

        div.addEventListener('mouseover', function(){
            if(!draw){return;}
            div.style.backgroundColor=color.value;
        });

        div.addEventListener('mousedown', function(){
            div.style.backgroundColor=color.value;
        });


        container.appendChild(div);
    }
}

function reset(){
    container.innerHTML='';
    populate(size);
}

window.addEventListener("mousedown", function(){
    draw=true;

});

window.addEventListener("mouseup", function(){
    draw=false;

});

resetBtn.addEventListener('click', function(){
    reset();
})



sizeEl.addEventListener('keyup', function(){
    size=sizeEl.value;
    reset();

})

sizeEl.addEventListener('change', function(){
    size=sizeEl.value;
    reset();

})

populate(size);