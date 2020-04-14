var fs = require('fs');
var text = fs.readFileSync('./input.txt', 'utf8');
var file = fs.createWriteStream('output.txt');
var newarray = []

function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 0;
}

text.split("\r\n").forEach(item  =>{
        newarray.push(+item);
});

var newarray2 = newarray.map(isPrime);

newarray2.forEach(item => { 
    if ( item == true){
        file.write( 1 + '\n');    
    }else{
        file.write( 0 + '\n'); 
    }
});
file.end();