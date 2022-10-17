mybtn.addEventListener("click", function () {

    const table = mytbl.classList;
    table.add("block");

    const numbers = 100;

    for (let i = 1; i <= numbers; i++) {
        
        const squares = mysquares.classList;
        squares.add("square");
        i++
    }
    


// })
/**
 * Description: La funzione che genera numeri progressivi da 1 a 100
 * @param {number} arrayLength
 * @returns {Array} Array di numeri in ordine progressivo da 1 a 100
 */
 function generateProgressiveNumber(arrayLength) {
let n=1;
let arr=[n];
for (i=n;i<=100;i++) {
arr[i]=i;
console.log(arr[i]);
}}; 
