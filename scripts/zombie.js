function doMath(){
    var codeX = document.getElementById('codeX').value;
    var codeY = document.getElementById('codeY').value;
    var codeZ = document.getElementById('codeZ').value;

    var done1 = (2 * Number(codeX) + 11);
    var done2 = ((2 * Number(codeZ) + Number(codeY)) - 5);
    var done3 = (Math.abs(Number(codeY) + Number(codeZ)) - Number(codeX));
    console.log(done1);
    console.log(done2);
    console.log(done3);
    document.getElementById('done1').innerHTML = done1;
    document.getElementById('done2').innerHTML = done2;
    document.getElementById('done3').innerHTML = done3;
}