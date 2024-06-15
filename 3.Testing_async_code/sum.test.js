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
    return expect(fetchPromise(1)).resolves.toBe('peanut butter')
})

test('the fetch fails with an error', () => {
    return expect(fetchPromise(2)).rejects.toBe('Invalid')
})

// Async/await function check (probably a better way)

test('the data is peanut butter', async () => {
    const data = await fetchPromise(1);
    expect(data).toBe('peanut butter');
})

