/* eslint-disable no-undef */

function write(text) {
    process.stdout.write(text);
}

let date = new Date();
write(date.toTimeString().substring(0,8));

setInterval(()=> {
    date = new Date();
    write('\x1B[8D'); // D => left C => right A => up B => down
    write(date.toTimeString().substring(0,8));
}, 100);

