// Functions closure

function add(a,b){
    return a+b;
    }

function mul(a,b){
    return a*b;
    }

function operation(func, a){
    function cal(b){
        return func(a,b); 
    }
    return cal;
}


console.log(operation(add,10)(20));
console.log(operation(mul,10)(20));
