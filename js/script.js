const mybtn = document.getElementById("mybtn");
const mytbl = document.getElementById("mytbl");
const myquares = document.getElementById("mysquares");

mybtn.addEventListener("click", function () {

    const table = mytbl.classList;
    table.add("block");

    const numbers = 100;
    const numbersGenerated = generateProgressiveNumber(numbers);

    for (let i = 1; i < numbersGenerated.length; i++) {
        
        const squares = mysquares.classList;
        squares.add("square");
        i++
    }
})    


// })
/**
 * Description: La funzione che genera numeri progressivi da 1 a 100
 * @param {number} arrayLength
 * @returns {Array} Array di numeri in ordine progressivo da 1 a 100
 */
 function generateProgressiveNumber(arrayLength) {
    let n = 1;
    let arrayLength = [n];
  
    for (i = n; i <= 100; i++) {
      arrayLength[i] = i;
      console.log(arr[i]);
    }
  }