document.querySelector('#sum').addEventListener('click',function(){
    var num1=document.querySelector('#num1').value;
    var num2=document.querySelector('#num2').value;
    
    alert(parseInt(num1)+parseInt(num2));
});

document.querySelector('#res').addEventListener('click',function(){
    var num1=document.querySelector('#num1').value;
    var num2=document.querySelector('#num2').value;
    
    alert(parseInt(num1)-parseInt(num2));
});

document.querySelector('#mul').addEventListener('click',function(){
    var num1=document.querySelector('#num1').value;
    var num2=document.querySelector('#num2').value;
    
    alert(parseInt(num1)*parseInt(num2));
});

document.querySelector('#div').addEventListener('click',function(){
    var num1=document.querySelector('#num1').value;
    var num2=document.querySelector('#num2').value;
    
    alert(parseInt(num1)/parseInt(num2));
});
