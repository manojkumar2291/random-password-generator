const generatebtn=document.getElementById("generate");
const copybtn=document.querySelector("fa-copy");
const passwordbox=document.getElementById("password");
const length=12;
const uppercase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase='abcdefghijklmnopqrstuvwxyz';
const numbers='0123456789';
const special="!@#$%^&*([]{}?/*-+=)";


const allchars=uppercase+lowercase+numbers+special;


function createPassword(){
    let password="";
    password+=uppercase[Math.floor(Math.random()*uppercase.length)];
    password+=lowercase[Math.floor(Math.random()*lowercase.length)];
    password+=numbers[Math.floor(Math.random()*numbers.length)];
    password+=special[Math.floor(Math.random()*special.length)];
    while(length>password.length){
    password+=allchars[Math.floor(Math.random()*allchars.length)];
    }
    passwordbox.value=password;
}

function copyPassword(){
   
    passwordbox.select();
    document.execCommand("copy");
}