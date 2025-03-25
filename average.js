const average= (mark1,mark2,mark3) => {
    let avg=mark1+mark2+mark3 / 3
   return avg;
}
    
 
let avgres= average(30,20,10)
console.log(avgres)

if(avgres > 50){
    console.log('performance is good')
}
else{
    console.log('improvement needed')
}


