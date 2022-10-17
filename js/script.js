const mybtn = document.getElementById("mybtn");
const mytbl = document.getElementById("mytbl");
const mysquares = document.getElementById("mysquares");

mybtn.addEventListener("click", function () {

    const table = mytbl.classList;
    table.add("block");

    const numbers = 100;
    const numbersGenerated = generateProgressiveNumber(numbers);
    // console.log(numbersGenerated);

    const grid = document.querySelector(".block");
for (let i = 0; i < numbersGenerated.length; i++) {
  const thisNumber = numbersGenerated[i];
  // Creo un elemnto square
  const thisSquare = createSquare(thisNumber);
  // aggiungo eventListener allo square creato
  thisSquare.addEventListener("click", function() {
    // inserisco l'elemento nel DOM
  grid.append(thisSquare);
  });

  
}
    
})    

/**
 * Description: La funzione che genera numeri progressivi da 1 a 100
 * @param {number} arrayLength
 * @returns {Array} Array di numeri in ordine progressivo da 1 a 100
 */
 function generateProgressiveNumber(arrayLength) {

    const arrayDaRiempire  = []
  
    for (i = 1; i <= arrayLength; i++) {
        arrayDaRiempire[i - 1] = i ;
    } 
    return arrayDaRiempire
  }



  /**
 * Description: La funzione che crea l'elemento square da inserire nel dom
 * @param {number} innerNumber -> numero da inserire all'interno del square
 * @returns {object} elemento DOM che rappresenta lo square
 */
function createSquare(innerNumber) {
    const newSquare = document.createElement("div");
    newSquare.classList.add("squares");
    newSquare.innerHTML = innerNumber;
    return newSquare;
  }