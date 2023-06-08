function add7prompt(){
    let x = prompt("Please, give me any number: ",);
    x = (+x + 7);
    if (isNaN(x)) {
        alert("This is not a valid number !");
    } else {
        alert(`This number plus 7 is = ${x}`);
    };  
};

function add7input(){
    let x = document.getElementById('test1inputin').value;
    x = (+x + 7);
    if (isNaN(x)) {
        document.getElementById('test1inputout').innerHTML = "this is not a valid number";
    } else {
        document.getElementById('test1inputout').innerHTML = x;
    };
}

function multiplyprompt(){
    let x = prompt("Please, give me any number: ",);
    let y = prompt("Please, give me another number: ",);
    result = (+x*+y);
    if (isNaN(x)) {
        alert("This is not a valid number !");
    } else {
        alert(`The number ${x} multiplied by ${y} is = ${result}`);
    };  
};

function multiplyinput(){
    let x = document.getElementById('test2inputx').value;
    let y = document.getElementById('test2inputy').value;
    if (x !== undefined && y !== undefined){
        out = (+x*+y);
        if (isNaN(out)) {
            document.getElementById('test2inputout').innerHTML = "this is not a valid number";
        } else {
            document.getElementById('test2inputout').innerHTML = out;
        }; 
    }
}
