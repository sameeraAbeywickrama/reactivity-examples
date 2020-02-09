let price = 10;
let qty = 2;
let total = 0;
let target = null;
let storage = [];

target = () => {
    total = price * qty;
}

record();
target();
// replay();

function record () {
    storage.push(target);
}

function replay () {
    storage.forEach(run => run ());
}