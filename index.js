
for(let i= 1 ; i <=10 ; i++){
    let result = i*3
    let value = `${i} *${3} = ${result}`
    // console.log(value)
}


let oddnumber =0
for (let i = 1; i <= 500; i++){
    if (i % 2 === 0){
        oddnumber += i
        
    }
}
// console.log(oddnumber )

let evennumber = 0

for (let i= 1 ; i <=500; i++ ){
    if(i % 1 ===0){
        evennumber += i
    }
}
// console.log(evennumber)
for ( let a= 1 ; a <= 10 ; a++){
    console.log('')
     
    for ( let b = 1 ; b <= 10 ; b++){
      let result = (b * a )
      console.log(`${a} * ${b} = ${result}`)
    }
       

        
}