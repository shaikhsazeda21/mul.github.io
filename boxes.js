function mul(){
    var val1= Number(document.getElementById('n1').value)
    var val2= Number(document.getElementById('n2').value)
    var val3= Number(document.getElementById('n3').value)
    var val4= Number(document.getElementById('n4').value)
    var val5= Number(document.getElementById('n5').value)

var res= val1*val2*val3*val4*val5
document.getElementById('para').innerHTML= `${val1}*${val2}*${val3}*${val4}*${val5}=${res}`
};