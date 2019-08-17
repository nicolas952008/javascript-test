
function calculate(){
    console.log('Hola');
    var l1 = Number(document.getElementById('lado1').value);
    var l2 = Number(document.getElementById('lado2').value);
    var ans = Math.sqrt(Math.pow(l1,2)+Math.pow(l2,2));
    document.getElementById('ans-txt').innerHTML = ans;
    
}