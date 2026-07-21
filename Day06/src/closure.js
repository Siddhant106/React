let b = 80;

function greet(){
    let a = 40;

    function meet(){
        console.log(a);
    }

    return meet;
}

const num = greet();
console.log(num);
num();