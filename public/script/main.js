let cards = document.getElementsByClassName("imgCard");
let backCards = document.getElementsByClassName("imgBack");
console.log(backCards);

let cardsArr = [ "./public/img/queen.png","./public/img/queen.png",
                "./public/img/as.png","./public/img/as.png",
                "./public/img/k10.png","./public/img/k10.png"];

function randCardsPosition() {
    let cardsArr2 = cardsArr;

    for (let i = 0; i < cards.length; i++) {
        let rand = Math.floor(Math.random()*cardsArr2.length);
        cards[i].setAttribute("src",`${cardsArr2[rand]}`);
        // console.log(cardsArr2.indexOf(cardsArr2[rand]));
        cardsArr2.splice(rand,1);
        
    }
}

randCardsPosition();

let resp;
let compt = 0;

for (let i = 0; i < backCards.length; i++) {
    backCards[i].addEventListener("click", ()=>{

        let verifFlip = document.getElementsByClassName("flip");

        backCards[i].style.opacity = 0;
        cards[i].style.opacity = 100;

        backCards[i].style.transform = "rotateY(90deg)";
        cards[i].style.transform = "rotateY(-90deg)";        

        backCards[i].style.transform = "rotateY(180deg)";
        cards[i].style.transform = "rotateY(0deg)";

        cards[i].classList.add("flip");
        console.log(verifFlip);

        if (verifFlip.length == 2) {
            
            for (let i = 0; i < verifFlip.length; i++) {
                setTimeout(() => {
                    backCards[i].style.opacity = 100;
                    cards[i].style.opacity = 0;

                    backCards[i].style.transform = "rotateY(90deg)";
                    cards[i].style.transform = "rotateY(-90deg)";        

                    backCards[i].style.transform = "rotateY(0deg)";
                    cards[i].style.transform = "rotateY(-180deg)";
                    
                }, 1000);

                cards[i].classList.remove("flip");
                console.log(verifFlip);
            }   

        }
        
    });   
}
