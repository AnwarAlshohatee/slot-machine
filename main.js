document.querySelector('#betBtn').addEventListener('click', () =>{
    spinWheel();
    
})


function spinWheel(){
    const symbols = ['🍒', '7️⃣', '💎', '🍉', '🍓']
    const betAmount = Number(document.querySelector('#betAmount').value)
    let reels = document.querySelectorAll('.reel')
    


    if(betAmount >= 5 && betAmount <= 50){
        let reel1 = symbols[Math.floor(Math.random() * symbols.length)];
        let reel2 = symbols[Math.floor(Math.random() * symbols.length)];
        let reel3 = symbols[Math.floor(Math.random() * symbols.length)];

        reels[0].innerText = reel1
        reels[1].innerText = reel2
        reels[2].innerText = reel3
        if(reel1 === reel2 && reel2 === reel3){
            payOut()
        }else{
            decreaseBalance();
        }
        
    }else{
        alert('Please Enter an amount between $5 to $50 dollars.')
    }
}

function decreaseBalance(){
    const betAmount = Number(document.querySelector('#betAmount').value)
    let balanceAmount = Number(document.querySelector('#balanceAmount').textContent)
    if(balanceAmount > 0){
        let newAmount = balanceAmount - betAmount
        document.querySelector('#balanceAmount').textContent = newAmount 
    }else{
        alert('Get yo money up not your funny up')
       let restart =  document.querySelector('#restart')

       restart.innerText = 'Restart'
       
       restart.addEventListener('click', () => {
        restartGame(restart);
       })
    }
}


function payOut(){
    alert('YOU ACTUALLY WON!!!!!!!!!')
    let balanceAmount = Number(document.querySelector('#balanceAmount').textContent)
    let newAmount = balanceAmount + 50
    document.querySelector('#balanceAmount').textContent = newAmount 

}

function restartGame(restart) {
    document.querySelector('#betAmount').value = ''
    let reels = document.querySelectorAll('.reel')
    document.querySelector('#balanceAmount').innerText = '100'
    restart.innerText = ''
    reels[0].innerText = ''
    reels[1].innerText = ''
    reels[2].innerText = ''
}