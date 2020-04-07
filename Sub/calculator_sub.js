function sub(){
    var n1 = document.querySelector('#txtn1');
    var n2 = document.getElementById('txtn2');
    var res = document.querySelector('#res');
    var n1 = Number (txtn1.value);
    var n2 = Number (txtn2.value);
    var sub = n1 - n2;
    res.innerHTML = ('Resultado: ' + sub)
}