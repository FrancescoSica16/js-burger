
 let prezzoBase = 5;


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

        prezzoFinale = prezzoBase;
    

        for (let i = 0; i < ingredientiAggiuntivi.length; i++) {

            // const elementoAggiunto = ingredientiAggiuntivi[i];
            // console.log(elementoAggiunto);

            if (ingredientiAggiuntivi[i].checked == true) {
                
                prezzoFinale += parseInt(ingredientiAggiuntivi[i].value);

            }            
            // console.log(prezzoFinale)
            // prezzoFinale += prezzoBase;

            // console.log(prezzoFinale)

            let coupon = document.getElementById("coupon") ;

            if (coupon.value.length > 0 ) {
                
               if (couponList.includes(coupon.value)) {
                   prezzoFinale = prezzoFinale * 0.8;

               } else {
                  console.log("il coupon non essite") 
               }

            }

            // let totale = document.getElementById("somma").innerHTML = prezzoFinale ;
            
        }
      
        
        console.log(prezzoFinale)
        let totale = document.getElementById("somma").innerHTML = prezzoFinale ;
    }
})