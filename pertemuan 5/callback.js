function callback(a) {
  return a()
}

function sayHello() {
  console.log('Hello')
}

callback(sayHello)

const timeoutId = setTimeout(function () {
  console.log('Halo')
}, 1000)

clearTimeout(timeoutId)

console.log(timeoutId)
