/* eslint-disable no-undef */


function write(text) {
    process.stdout.write(text);
}

write('\x1B[30m'); write('hello'); write('\n');
write('\x1B[31m'); write('hello'); write('\n');
write('\x1B[32m'); write('hello'); write('\n');
write('\x1B[33m'); write('hello'); write('\n');
write('\x1B[34m'); write('hello'); write('\n');
write('\x1B[35m'); write('hello'); write('\n');
write('\x1B[36m'); write('hello'); write('\n');
write('\x1B[37m'); write('hello'); write('\n');

write('\x1B[40m'); write('hello'); write('\x1B[0m'); write('\n');
write('\x1B[41m'); write('hello'); write('\x1B[0m'); write('\n');
write('\x1B[42m'); write('hello'); write('\x1B[0m'); write('\n');
write('\x1B[43m'); write('hello'); write('\x1B[0m'); write('\n');
write('\x1B[44m'); write('hello'); write('\x1B[0m'); write('\n');
write('\x1B[45m'); write('hello'); write('\x1B[0m'); write('\n');
write('\x1B[46m'); write('hello'); write('\x1B[0m'); write('\n');
write('\x1B[47m'); write('hello'); write('\x1B[0m'); write('\n');

write('\x1B[90m'); write('hello'); write('\n');
write('\x1B[91m'); write('hello'); write('\n');
write('\x1B[92m'); write('hello'); write('\n');
write('\x1B[93m'); write('hello'); write('\n');
write('\x1B[94m'); write('hello'); write('\n');
write('\x1B[95m'); write('hello'); write('\n');
write('\x1B[96m'); write('hello'); write('\n');
write('\x1B[97m'); write('hello'); write('\n');

write('\x1B[100m'); write('hello'); write('\x1B[0m'); write('\n');
write('\x1B[101m'); write('hello'); write('\x1B[0m'); write('\n');
write('\x1B[102m'); write('hello'); write('\x1B[0m'); write('\n');
write('\x1B[103m'); write('hello'); write('\x1B[0m'); write('\n');
write('\x1B[104m'); write('hello'); write('\x1B[0m'); write('\n');
write('\x1B[105m'); write('hello'); write('\x1B[0m'); write('\n');
write('\x1B[106m'); write('hello'); write('\x1B[0m'); write('\n');
write('\x1B[107m'); write('hello'); write('\x1B[0m'); write('\n');

//256 COLOR 

for(let i = 0; i<255; i++){
    if(i%16==0){
        write('\n');
    }
    write(`\x1B[38;5;${i}m`); write(i.toString().padEnd(4, ' '));
}


for(let i = 0; i<255; i++){
    if(i%16==0){
        write('\n');
    }
    write(`\x1B[48;5;${i}m`); write(' '); write('\x1B[0m');
}

// TRUECOLOR
for(let i = 0; i<255; i++){
    write(`\x1B[48;2;${i};${i};${i}m`); write(' '); write('\x1B[0m');
}
write('\n');
write('hello'); write('\n');
write('\x1B[1m'); write('hello'); write('\x1B[0m'); write('\x1B[22m'); write('\n');
write('\x1B[2m'); write('hello'); write('\x1B[0m'); write('\x1B[22m'); write('\n');
write('\x1B[3m'); write('hello'); write('\x1B[0m'); write('\x1B[23m'); write('\n');
write('\x1B[4m'); write('hello'); write('\x1B[0m'); write('\x1B[24m'); write('\n');
write('\x1B[5m'); write('hello'); write('\x1B[0m'); write('\x1B[25m'); write('\n');
write('\x1B[7m'); write('hello'); write('\x1B[0m'); write('\x1B[27m'); write('\n');
write('\x1B[8m'); write('hello'); write('\x1B[0m'); write('\x1B[28m'); write('\n');
write('\x1B[9m'); write('hello'); write('\x1B[0m'); write('\x1B[29m'); write('\n');

write('\x1B[9m'); write('\x1B[104m'); write('\x1B[31m'); write('hello'); write('\x1B[0m'); write('\n');