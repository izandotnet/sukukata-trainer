const sukukata = require('sukukata');
const fs = require('fs');

const hurufVokal = ['a', 'e', 'i', 'o', 'u'];

function readFile() {
    let content = fs.readFileSync('./karangan.txt', 'UTF-8');
    content = content.replace(/\n/g, ' ');
    content = content.replace(/[&\/\\#,+()$~%.'`":*?<>{}-]/g, ' ');
    return content.split(' ');
}

function prepareUnitTest(input) {
    return `expect(sukukata.toArray('${input}')).toEqual(['${input}']);`;
}

function runTrainer() {
    let trainingResult = [];
    let unitTest = [];
    const textArray = readFile();
    for(let text of textArray) {
        if (text !== '') {
            if(sukukata.toArray(text).length === 0) {
                unitTest.push(prepareUnitTest(text));
            }
            trainingResult.push(`${text}: ${sukukata.toArray(text)}`);
        }
    }

    unitTest.sort(function(a, b){
        return a.length - b.length;
    });
    unitTest = unitTest.filter(function(item, pos) {
        return unitTest.indexOf(item) == pos;
    })

    const stream = fs.createWriteStream("result.txt");
    stream.once('open', function(fd) {
        stream.write("Result\n");
        stream.write("========================================\n");
        for(let item of trainingResult) {
            stream.write(`${item}\n`);
        }
        stream.write("\n");
        stream.write("\n");

        stream.write("Unit Test\n");
        stream.write("========================================\n");
        stream.write(`test('Test by: contributor ${new Date()}', () => {\n`);

        for(let item of unitTest) {
            stream.write(`${item}\n`);
        }
        
        stream.write("});\n");
        stream.write("\n");
        stream.end();
    });
}
runTrainer();
