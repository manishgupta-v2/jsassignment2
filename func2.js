// Functions closure 2

function add(x){
    var a = x;
    function add1(b){
        return a+b;
    }
    return add1;
}

function mul(x){
    var a = x;
    function mul1(b){
        return a*b;
    }
    return mul1;
}

function operation(func, x){
return func(x);
}


console.log(operation(add,10)(20));
console.log(operation(mul,10)(20));