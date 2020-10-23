const sayName = () => {
    console.log('Hello Nick')
}

const sayAddress = () => {
    console.log('My Street Corner');
}
module.exports.sayAddress = sayAddress;
module.exports.sayName = sayName;