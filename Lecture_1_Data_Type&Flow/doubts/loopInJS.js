let obj={
    0:"Hi",
    1:"How",
    2:"are",
    3:"you"
}


let string=""
for(let key in obj){
    console.log(key," : ", obj[key]);
    string+= obj[key];
}
console.log(string);