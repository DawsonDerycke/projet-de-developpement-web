const img = document.getElementById('car');
let i = 0;
setInterval(function(){
    img.style.top = i % 2 === 0 ? "50px" : "100px";
    i++;
}, 500);
