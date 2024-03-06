import ProgressBar from 'progress';

var bar = new ProgressBar('downloading [:bar] :rate/bps :percent :etas', { total: 100 });
var timer = setInterval(function () {
    bar.tick();
    if (bar.complete) {
        console.log('\ncomplete\n');
        clearInterval(timer);
    }
}, 100);