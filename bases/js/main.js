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

/*$('#bouton-bleu').on('click', function(){
    $('table').find('tr').last().remove();
});
*/

const button = document.getElementById('bouton-bleu');
const table = document.querySelector('table');
const btns = document.getElementsByClassName('btn');

/*btns[0].addEventListener('click', function(){
    alert('MESSAGE');
    table.style.display = '';
});*/

button.addEventListener('click', function(){
    if(table.style.display == 'none'){
        table.style.display = 'table';
    }
    else{
        table.style.display = 'none';
    }
});

const button2 = document.getElementById('bouton-deux');
button2.addEventListener('click', function(){
    const taille = document.getElementsByTagName('tr').length;
    for(i = i; i < taille; i++){
        document.querySelectorAll('tr')[i].lastElementChild.innerHTML = '';
    }
});