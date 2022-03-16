import a from './ma'
import b from './mb'

console.log("main run")

console.log("a=", a)
console.log("b=", b)

setTimeout(() => {
  console.log("main after 5 seconds")
}, 5000);