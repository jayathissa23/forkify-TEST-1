'use strict';

let buttons=document.querySelectorAll('.show-modal');
let closeBtn=document.querySelector('.close-modal');

let showOverlay=document.querySelector('.overlay');
let showModel=document.querySelector('.modal');





let closeModel=function() {
    showModel.classList.add('hidden');
    showOverlay.classList.add('hidden');
}

let openModel=function() {
    showModel.classList.remove('hidden');
       showOverlay.classList.remove('hidden');
}

for (let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener('click',function(){
       openModel();
    });
};

closeBtn.addEventListener('click',function(e) {
    e.preventDefault();
    closeModel();
});


document.addEventListener('keydown',function(e) {
    e.preventDefault();
    console.log(e.key);
    if(e.key==='Escape') closeModel();
});


showOverlay.addEventListener('click',function(e) {
    e.preventDefault();
    closeModel();
});

console.log();
console.log('hiiiii');

















