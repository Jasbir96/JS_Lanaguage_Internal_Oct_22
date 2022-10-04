let arr=[1,2,3,4,5];
//  input -> startIdx, edix
//  slices a copy from that array  starting from startIdx and edix-1

let slicedArr=arr.slice(1,4);
//  first Param : sIdx, second param : delete count 
// it removes the elem from the array return those elem
let   removedElem= arr.splice(2,2);

// implement delete using -> idx,1
// strings.splice(2,0,'alien') -> addition
// modify -> string.splice(idx,1, "to add value");

