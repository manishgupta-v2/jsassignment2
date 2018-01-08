// Functions

function add(x){
    var a = x;
    function add1(b){
        return a+b;
    }
}

function mul(x){
    var a = x;
    function mul1(b){
        return a*b;
    }
}

function operation(func, x){
return func(x);
}


console.log(operation((add,10)(20)));
console.log(operation((mul,10)(20)));
