// Functions


function add(x , y){
    return x+y;
}


function mul(x , y){
    return x*y;
}

function operation(func){
return func;
}


/*
function operation(func, a)(b){
    function func(a) {
        console.log(a + b);
    }

    function func(a) {
        console.log(a * b);
    }
};*/

console.log(operation((add)(10 , 20)));
console.log(operation((mul) (10, 20)));
