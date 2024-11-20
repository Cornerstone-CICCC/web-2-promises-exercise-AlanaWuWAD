const fs = require("fs").promises;

// THEN-CATCH SOLUTION BELOW THIS LINE
let file1, file2, file3, file4;
fs.readFile('firstname.txt', 'utf-8')
.then(data => {
    file1 = data;
    return fs.readFile('lastname.txt', 'utf-8')
})
.then(data => {
    file2 = data;
    return fs.readFile('age.txt', 'utf-8')
})
.then(data => {
    file3 = data;
    return fs.readFile('hobbies.txt', 'utf-8')
})
.then(data => {
    const array = JSON.parse(data); 
    console.log(`THEN: ${file1} ${file2} is ${file3} years old and his hobbies are ${array[0]} and ${array[1]}`)
})
.catch(err => {
    console.error(err)
})


// ASYNC/AWAIT SOLUTION BELOW THIS LINE
const readFile = async() =>{
    try{
        const data1 = await fs.readFile('firstname.txt', 'utf-8')
        const data2 = await fs.readFile('lastname.txt', 'utf-8')
        const data3 = await fs.readFile('age.txt', 'utf-8')
        const data4 = await fs.readFile('hobbies.txt', 'utf-8')
        const array = JSON.parse(data4); 
        console.log(`ASYNC: ${data1} ${data2} is ${data3} years old and his hobbies are ${array[0]} and ${array[1]}`)
    } catch(err){
        console.error(err)
    }
}
readFile()

// `John Smith is 50 years old and his hobbies are swimming and dancing`