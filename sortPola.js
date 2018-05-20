const fs = require('fs');

function readFile() {
    let content = fs.readFileSync('./pola.txt', 'UTF-8');
    return content.split(/\n/g);
}


function runSort() {
    let unitTest = [];
    const textArray = readFile();
    for(let text of textArray) {
        unitTest.push(text);
    }
    
    unitTest.sort(function(a, b){
        return a.length - b.length;
    });
    unitTest = unitTest.filter(function(item, pos) {
        return unitTest.indexOf(item) == pos;
    })

    const stream = fs.createWriteStream("polaSukukata.txt");
    stream.once('open', function(fd) {
        stream.write("polaSukukata\n");
        stream.write("========================================\n");
        for(let item of unitTest) {
            stream.write(`${item}\n`);
        }
        stream.write("\n");
        stream.end();
    });
}
runSort();