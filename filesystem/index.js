const fs = require('fs');
const { path } = require('path');

/*
const fileReadCallback = (error, data) => {
  if(error) {
    console.log('Gagal membaca berkas');
    return;
  }
  console.log(data);
};

fs.readFile(path(__dirname, 'notes.txt'), 'UTF-8', fileReadCallback);
*/

/*
Versi Synchronous 

const data = fs.readFileSync(path(__dirname, 'notes.txt'), 'UTF-8');
console.log(data);
*/

/*
ReadableStream (membaca dengan stream)

const readableStream = fs.createReadStream(resolve(__dirname, 'notes.txt'), {
  highWaterMark: 10 //10 byte
});

readableStream.on('readable', () => {
  try {
      process.stdout.write(`[${readableStream.read()}]`);
  } catch(error) {
      // catch the error when the chunk cannot be read.
  }
});

readableStream.on('end', () => {
  console.log('Done'); //data akan muncul terpotong-potong
});
*/

/*
menulis dengan stream
*/

const writableStream = fs.createWriteStream(path(__dirname, 'output.txt'));
 
writableStream.write('Ini merupakan teks baris pertama!\n');
writableStream.write('Ini merupakan teks baris kedua!\n');
writableStream.end();