function solve() {
    let title = document.querySelectorAll('input')[0]
    const year = document.querySelectorAll('input')[1]
    const price = document.querySelectorAll('input')[2]
    const totalPriceHoder = document.querySelectorAll('h1')[1]
    let totalPrice = 0;
    const selectedOldDiv = document.getElementsByClassName('selected')[0].children[1]
    const selectedNewDiv = document.getElementsByClassName('selected')[1].children[1]
    const btn = document.querySelector('button').addEventListener('click', (e) => {
        e.preventDefault();
        // console.log(title.value);
        // console.log(year.value);
        // console.log(price.value);
        if (title.value == '' || year.value <= 0 || price.value <= 0) {
            return
        }

        if (year.value >= 2000) {
            const bookDiv = document.createElement('div');
            bookDiv.classList.add('book');
            const pTitle = document.createElement('p')
            pTitle.textContent = `${title.value} [${year.value}]`
            bookDiv.appendChild(pTitle)
            const buyButton = document.createElement('button')
            buyButton.textContent = `Buy it only for ${(Number(price.value).toFixed(2)).toString()} BGN`
            bookDiv.appendChild(buyButton)
            const moveButton = document.createElement('button')
            moveButton.textContent = 'Move to old section'
            bookDiv.appendChild(moveButton)
            selectedNewDiv.appendChild(bookDiv)

            buyButton.addEventListener('click', buy)
            moveButton.addEventListener('click', move)
        }
        else {
            const bookDiv = document.createElement('div');
            bookDiv.classList.add('book');
            const pTitle = document.createElement('p')
            pTitle.textContent = `${title.value} [${year.value}]`
            bookDiv.appendChild(pTitle)
            const buyButton = document.createElement('button')
            buyButton.textContent = `Buy it only for ${(Number(price.value).toFixed(2)).toString()} BGN`
            bookDiv.appendChild(buyButton)
            selectedOldDiv.appendChild(bookDiv)

            buyButton.addEventListener('click', buy)
        }
    })

    function buy(e) {
        console.log('buy');
        let dYear=e.path[1].children[0].textContent.split(' ')[1].slice(1,-1);
        let dPrice=e.path[1].children[1].textContent.split(' ')[4];
        if (Number(dYear)<2000) {
            totalPrice=totalPrice+15/100*Number(dPrice);
        }
        else{
            totalPrice=totalPrice+Number(dPrice);
        }
        totalPriceHoder.textContent=`Total Store Profit: ${totalPrice} BGN`
        e.path[1].remove();
    }
    function move(e) {
        // console.log('move');
        // console.log(e);
        e.path[0].parentElement.removeChild(e.path[0].parentElement.children[2])
        selectedOldDiv.appendChild(e.path[1]);
    }
}