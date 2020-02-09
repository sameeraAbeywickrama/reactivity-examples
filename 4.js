class Dep {
    constructor () {
        this.subscribers = [];
    } 

    depend () {
        if(target && !this.subscribers.includes(target)) {
            this.subscribers.push(target);
        }
    }

    notify() {
        this.subscribers.forEach(sub => sub());
    }
}

const dep = new Dep();

let price = 10;
let qty = 2;
let total = 0;

let target = null;

function watcher (func) {
    target = func;
    dep.depend();
    target();
    target = null;
}
