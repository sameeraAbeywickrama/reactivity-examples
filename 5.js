
let data = {
    price: 3,
    qty: 2
};


Object.keys(data).forEach(key => {

    let internalValue = data[key];

    Object.defineProperty(data, key, {
        get() {
            return internalValue;
        },
        set(newValue) {
            internalValue = newValue;
        }
    });

});
