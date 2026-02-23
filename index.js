
for(let i= 1 ; i <=10 ; i++){
    let result = i*3
    let value = `${i} *${3} = ${result}`
    console.log(value)
}

// sumation of odd number
let oddnumber =0
for (let i = 1; i <= 500; i++){
    if (i % 2 === 0){
        oddnumber += i
        
    }
}
console.log(oddnumber )
// sumation of even number
let evennumber = 0

for (let i= 1 ; i <=500; i++ ){
    if(i % 1 ===0){
        evennumber += i
    }
}
console.log(evennumber)

// Nested loop
for ( let a= 1 ; a <= 10 ; a++){
    console.log('')
     
    for ( let b = 1 ; b <= 10 ; b++){
      let result = (b * a )
      console.log(`${a} * ${b} = ${result}`)
    }       
}


let data = ''
for ( let a = 1 ; a<= 5 ; a++){
    // console.log('')
    for(let b = 1 ; b <= a ; b++ ){
        data += '*'
    }
    data += '\n'
}
console.log(data)

// breack
for (let i=1 ; i<=20; i++){
    if(i==3) break
    console.log(i)
}

// continue 

for (let i=1 ; i<=20 ; i++){
    if(i=== 5 )continue
    console.log(i)
}

// While loop

let sumation = 'value'
let done = 5 

while (done >= sumation.length){
    console.log('done')
    done--
}