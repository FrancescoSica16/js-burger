
const prezzoBase = 5;

let prezzoFinale = 0;

const couponList = ["utente20", "influencer20", "bonus20"];

let bottone = document.getElementById("calcolo");
console.log(bottone);

let nomePanino = document.getElementById("nome-panino");

console.log(nomePanino);

bottone.addEventListener('click', 
function () {
    if (nomePanino.value.length === 0 ) {
        alert("inserisci nome");

    }
    else //se c'è un nome 
    {
        let ingredientiAggiuntivi = document.getElementsByClassName("list-item");
        console.log(ingredientiAggiuntivi);

        prezzoFinale == 5;

        for (let i = 0; i < ingredientiAggiuntivi.length; i++) {

            const elementoAggiunto = ingredientiAggiuntivi[i];
            console.log(elementoAggiunto);

            if (elementoAggiunto.checked) {
                
                prezzoFinale += parseInt(elementoAggiunto.value);
            }


            let coupon = document.getElementById("coupon") ;
            console.log(prezzoFinale)
            if (coupon.value.length > 0 ) {
                
               if (couponList.includes(coupon.value)) {
                   prezzoFinale = prezzoFinale * 0.8;
               } else {
                  console.log("il coupon non essite") 
               }

            }

            let totale = document.getElementById("somma").innerHTML = prezzoFinale ;
            
        }
      
console.log(prezzoFinale)
    }
})