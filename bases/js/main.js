/*

console.log('Mon message');
console.error('Mon message erreur');

document.addEventListener('click', function(){
    alert('MESSAGE');
});

document.getElementById
document.querySelector('')

document.getElementByClassName
document.getElementByName
document.getElementByTagName
document.querySelectorAll()

*/

const button = document.getElementById('bouton-bleu');
const table = document.querySelector('table');
const btns = document.getElementsByClassName('btn');

btns[0].addEventListener('click', function(){
    alert('MESSAGE');
});

if(button != null){
button.addEventListener('click', function(){
    alert('TEST');
}); 
}



table.style.display = '';
