



const val = document.getElementById('countervalue');

function increment(){
    let value=parseInt(val.innerText);
    value+=1;
    val.innerText=value;

};
function decrement(){
    let value=parseInt(val.innerText);
    value-=1;
    val.innerText=value;

};