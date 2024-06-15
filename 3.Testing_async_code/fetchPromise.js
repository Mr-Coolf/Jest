function fetchPromise(num) {
    return new Promise((resolve, reject) => {
        if (num == 1) setTimeout(() => resolve('peanut butter'), 1000);
        if (num == 2) setTimeout(() => reject('Invalid'), 1000);
    });
}

module.exports = fetchPromise