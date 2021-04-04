const fs = require('fs');
const path = require('path');


let files = process.argv.slice(2);

let combined;
let initialFile_with_Headers;

function firstFile() {

    fs.readFile(files[0], 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        }
        const array = data.split('\r\n');

        const filename = path.basename(files[0]);

        const newArray = array.map((ele, i, array) => {
            return `${ele},"${filename}"`;
        });

        newArray.splice(0, 1, '"email_hash","category", "filename"');

        if (array[array.length - 1] === '') {
            newArray.splice(newArray.length - 1, 1);
        }

        initialFile_with_Headers = newArray;

        restOfFiles();

    });
};

firstFile();

function restOfFiles() {

    for (let i = 1; i < files.length - 1; i++) {
        let file = files[i];

        try {
            var data = fs.readFileSync(file, 'utf8');
            let array = data.split('\r\n');

            let filename = path.basename(file);

            let newArray = array.map((ele, i, array) => {
                return `${ele},"${filename}"`;
            });

            newArray.splice(0, 1);
            if (array[array.length - 1] === '') {
                newArray.splice(newArray.length - 1, 1);
            }

            initialFile_with_Headers = initialFile_with_Headers.concat(newArray);

        } catch (e) {
            console.log('Error:', e.stack);
        }
    }
    printCombinedFiles();
};

function printCombinedFiles() {

    combined = initialFile_with_Headers.join('\r\n');
    fs.writeFile(files[files.length - 1], combined, 'utf8', err => {
        if (err) {
            console.log(err);
        }

        fs.readFile(files[files.length - 1], 'utf8', (err, data) => {
            if (err) {
                console.log(err);
            }
            console.log(data);
        });
    });
};