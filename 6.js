let data = {
    price: 3,
    qty: 2
};

let total, salesPrice, target;

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
Object.keys(data).forEach(key => {

    let internalValue = data[key];
    const dep = new Dep();

    Object.defineProperty(data, key, {
        get() {
            dep.depend();
            return internalValue;
        },
        set(newValue) {
            internalValue = newValue;
            dep.notify();
        }
    });

});

function watcher (func) {
    target = func;
    target();
    target = null;
}

watcher(() => {
    total = data.price * data.qty
});

watcher(() => {
    salesPrice = data.price * 0.9;
});

