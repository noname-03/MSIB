//kalau satu parameter
const a = name =>{
    return ('hai' + ' ' + name)
}
console.log(a('arul'))

//2 para meter
const b = (fn, ln) =>{
    return ('hai' + ' ' + fn + ' ' + ln)
}
console.log(b('arul', 'ar-rozzy'))

//1 line
const c = (a, b) => a + b
let result = c(10, 20)
console.log(result)