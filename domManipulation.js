let bingoData={ }



//create the number
const createNumbers =function(){
    let numberContainerNode= document.querySelector('#number-container')
    let totalNumbers= 76
    for(BingoNumber=1; BingoNumber<=totalNumbers; BingoNumber++){
        //create a new div elements, one for every number(76)
        let newNumberNode=document.createElement('div')
        //insert in each div the number
        newNumberNode.innerText=BingoNumber
        //we add a class in every div
        newNumberNode.classList.add('number')
        numberContainerNode.appendChild(newNumberNode)
    }

}

window.onload = function() {
    
    createNumbers()
}