const tableArea = document.getElementById('container') //creiamo il container principale
const header = tableArea.querySelector('.head') //creiamo l'header
const numbersTab = tableArea.querySelector('.numbersContainer') //creiamo il div che conterrà i numeri
let savedNumber = [] //array vuoto in cui contenere i numeri

function mainTitle() {
    const titolo = document.createElement('h1')
    titolo.classList.add('mainTitle')
    titolo.innerText = 'La Tombola di Epicode'
    header.append(titolo)
}

mainTitle()

function numbersTable() {
    for (let i = 1; i <= 90; i++) {
        let tab = document.createElement('div')
        tab.innerText = i
        numbersTab.append(tab)
        tab.classList.add('numTab')
        
    }
}

numbersTable()

function sortNums() {
    //creo elementi HTML con JS
    const sortNums = document.createElement('div') //creo un div per rappresentare l'aera di estrazione !!APPENDERE ALL'HEADER!!
    const displayNums = document.createElement('div') //schermo per mostrare i numeri estratti !!APPENDERE A SORTNUMS PERCHE' APPENDENDO ALL'HEADER ROMPE TUTTO!!
    const sortBtn = document.createElement('button') //bottone per estrarte i numeri !!COME SOPRA!!
    

    sortNums.classList.add('sortArea')
    displayNums.classList.add('sortedNumber')
    sortBtn.classList.add('btn')
    //classi CSS

    sortBtn.innerText = 'Estrai un numero!'
    //innerText del bottone

    header.append(sortNums)
    sortNums.append(displayNums, sortBtn)

    //eventlistener
    sortBtn.addEventListener('click', function () {
        let contatore = 0
        let randNum = randomNumber(90) //foglio randomNums.js - integrare script principale
        displayNums.innerText = randNum
        // numCheck(randNum)
        contatore++
    })
}

sortNums()

function randomNumber(maxNum) {
    let i = Math.floor(Math.random() * maxNum + 1)

    if (!savedNumber.includes(i)){  // Chiaramente usiamo !savedNumber con operatore logico !NOT per controllare se saveNumber è falsy. Se saveNumber è un array vuoto (che è un valore falsy), la condizione è vera. Se saveNumber contiene elementi, la condizione è falsa.
        savedNumber.push(i)
        return i
    } else {
        if (savedNumber.length < maxNum){
            return randomNumber(maxNum)
            } else {
            

            return endNumber() //da scrivere dopo le 17
        }
    }
}
