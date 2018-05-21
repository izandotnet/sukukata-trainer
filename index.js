const sukukata = require('sukukata');
const fs = require('fs');

const hurufVokal = ['a', 'e', 'i', 'o', 'u'];

function readFile() {
    let content = fs.readFileSync('./karangan.txt', 'UTF-8');
    content = content.replace(/\n/g, ' ');
    content = content.replace(/[&\/\\#,+()$~%.'`":*?<>{}-]/g, ' ');
    return content.split(' ');
}

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

function prepareUnitTest(input, arrayText) {
    const result = `expect(sukukata.toArray('${input}')).toEqual(['${arrayText}']);`;
    return result.replaceAll(',','\',\'');
}

function runTrainer() {
    let trainingResult = [];
    const textArray = readFile();
    for(let text of textArray) {
        if (text !== '') {
            trainingResult.push(`${text}: ${sukukata.toArray(text)}`);
        }
    }

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

        for(let item of textArray) {
            if (item !== '') stream.write(`${prepareUnitTest(item, sukukata.toArray(item))}\n`);
        }
        
        stream.write("});\n");
        stream.write("\n");
        stream.end();
    });
}
runTrainer();
