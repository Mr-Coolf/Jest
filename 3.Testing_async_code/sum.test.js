// setTimeout function type check

const fetchData = require('./fetchData')

test('the data is peanut butter', done => {
    function callback(data) {
        try {
            expect(data).toBe('peanut butter');
            done();
        }
        catch (error){
            done(error);
        }
    }
    fetchData(callback);
})

// Promise function type check

const fetchPromise = require('./fetchPromise')

test('the data is peanut butter', () => {
    return expect(fetchPromise()).resolves.toBe('peanut butter')
})