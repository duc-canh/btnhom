var counter = 1;
document.getElementById('radio1').checked = true;
setInterval( function() {
    next()
}, 5000);

function next() {
    counter++;
    if (counter>4) counter =1
    document.getElementById('radio'+counter).checked = true;
}

function prev() {
    counter--;
    if (counter<1) counter = 4
    document.getElementById('radio'+counter).checked = true;
}
