// Looping

// for loop
// index
for (let i = 0; i < 5; i = i + 1) {
  console.log(i * 10)
}

let loop = true
// while loop
while (loop) {
  loop = false
  console.log('hi')
}

// for each
const persons = ['John', 'Smith', 'Budi', 'adsa']
persons.forEach(function (name, index) {
  console.log(name)
})
