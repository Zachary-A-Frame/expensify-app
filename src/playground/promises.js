const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Zach',
        //     age: 27
        // })
        reject('Something went horribly, horribly wrong.')
    }, 5000)
})

console.log('before')

promise.then((data) => {
    console.log(data)   
}, (error) => {
    console.log('Error: ', error)
})

console.log('after')