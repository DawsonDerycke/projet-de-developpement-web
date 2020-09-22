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

if(button != null){
button.addEventListener('click', function(){
    alert('TEST');
}); 
}
const btns = document.getElementsByClassName('btn');

btns[0].addEventListener('click', function(){
    alert('MESSAGE');
});

const table = document.querySelector('table');

table.style.display = 'none';
