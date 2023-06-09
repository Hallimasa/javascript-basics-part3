// test 1 add7 function

function add7prompt(){
    let x = prompt("Please, give me any number: ",);
    x = (+x + 7);
    if (isNaN(x)) {
        alert("This is not a valid number !");
    } else {
        alert(`This number plus 7 is = ${x}`);
    }  
};

function add7input(){
    let x = document.getElementById('test1inputin').value;
    if (x != ""){
        x = (+x + 7);
        if (isNaN(x)) {
            document.getElementById('test1inputout').innerHTML = "this is not a valid number";
            document.getElementById('test1inputout').style.color = "rgb(128, 0, 0)";
            document.getElementById('test1inputin').classList.add('invalid');
            document.getElementById('test1inputin').classList.remove('valid');
        } else {
            document.getElementById('test1inputout').innerHTML = x;
            document.getElementById('test1inputout').style.color = "#F2D8D8";
            document.getElementById('test1inputin').classList.add('valid');
            document.getElementById('test1inputin').classList.remove('invalid');
        }
    } else {
        document.getElementById('test1inputout').innerHTML = "";
        document.getElementById('test1inputin').classList.remove('valid','invalid');
    }
};    

// test 2 multiply function

function multiplyprompt(){
    let x = prompt("Please, give me any number: ",);
    let y = prompt("Please, give me another number: ",);
    result = (+x*+y);
    if (isNaN(x)) {
        alert("This is not a valid number !");
    } else {
        alert(`The number ${x} multiplied by ${y} is = ${result}`);
    }  
};

function multiplyinput(){
    let x = document.getElementById('test2inputx').value;
    let y = document.getElementById('test2inputy').value;
    if (x !== "" && y !== ""){
        let out = (+x*+y);
        if (isNaN(out)) {
            document.getElementById('test2inputout').innerHTML = "this is not a valid number";
            document.getElementById('test2inputout').style.color = "rgb(128, 0, 0)";
            if (isNaN(+x)){
                document.getElementById('test2inputx').classList.remove('valid');
                document.getElementById('test2inputx').classList.add('invalid');
            }  else {
                document.getElementById('test2inputx').classList.remove('invalid');
                document.getElementById('test2inputx').classList.add('valid');
            }
            if (isNaN(+y)){
                document.getElementById('test2inputy').classList.remove('valid');
                document.getElementById('test2inputy').classList.add('invalid');
            }  else {
                document.getElementById('test2inputy').classList.remove('invalid');
                document.getElementById('test2inputy').classList.add('valid');
            };
        } else {
            document.getElementById('test2inputx').classList.remove('invalid');
            document.getElementById('test2inputy').classList.remove('invalid');
            document.getElementById('test2inputx').classList.add('valid');
            document.getElementById('test2inputy').classList.add('valid');
            document.getElementById('test2inputout').innerHTML = out;
            document.getElementById('test2inputout').style.color = "#F2D8D8";
        }; 
    } else {
        document.getElementById('test2inputout').innerHTML = "";
        document.getElementById('test2inputx').classList.remove('valid','invalid');
        document.getElementById('test2inputy').classList.remove('valid','invalid');

    }
};

// test 3 capitalize function

function capitalizeprompt(){
    let x = prompt("Please, write something: ",);
    let y = x.substring(0,1);
    if (y != y.toUpperCase()){
        alert(`This string should be capitalized: ${y.toUpperCase()}${x.substring(1,)}`)
    } else {
        alert(`your sentence is already capitalized: ${x}`)
    }
};

function capitalizeinput(){
    let x = document.getElementById('test3input').value;
    if (x !== ""){
        let y = x.substring(0,1);
        if (y != y.toUpperCase()){
            document.getElementById('test3inputout').innerHTML = (` This sentence should be capitalized: ${y.toUpperCase()}${x.substring(1,)}`); 
        } else {
            document.getElementById('test3inputout').innerHTML = (` Your sentence is already capitalized: ${x}`)
        }
    } else {
        document.getElementById('test3inputout').innerHTML = "";
    }
};

// test 4 lastLetter function

function lastletterprompt(){
    let x = prompt("Write a sentence: ",);
    let y = (x.length - 1);
    x = x.substring(y,);
    alert(`The very last letter of your sentence is: ${x}`);
};

function lastletterinput(){
    let x = document.getElementById('test4inputin').value;
    if (x !== ""){
        let y = (x.length - 1);
        x = x.substring(y,);
        document.getElementById('test4inputout').innerHTML = (`  The very last letter of your sentence is: ${x}`);
    } else {
        document.getElementById('test4inputout').innerHTML = "";
    }
};