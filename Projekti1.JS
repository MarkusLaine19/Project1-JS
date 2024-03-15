const syottobox = document.getElementById("syottoboxi") //haetaan id:llä HTML tiedostosta
const lista = document.getElementById("lista-sailio")
// Lisätään tehtävä
function addTask(){
    // Tarkistetaan, onko syöttölaatikko tyhjä
    if(syottobox.value === ''){
        alert("Tyhjästä on paha nyhjästä. Kirjoita jotain.");  //antaa virheilmoituksen ja punaiset reunat
        syottobox.classList.add("virhe");
    }
    else{
        syottobox.classList.remove("virhe"); //poistaa punaiset reunat jos tulee kelvollinen syöte
         // Luodaan uusi tehtävä ja lisätään se tehtävälistaan
        let li = document.createElement("li");
        li.innerHTML = syottobox.value;
        lista.appendChild(li);
        // Luodaan poistomerkki "X" -merkiksi tehtävälistan kohdalle
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    syottobox.value = ""; // tyhjentää syöttöboxin lisäyksen jälkeen
    tallennaData(); 
}
// tekee mahdolliseksi klikata tehtävän valmiiksi
lista.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("tarkistettu");
        tallennaData();
    }
    // pystytään poistamaan tehtävä
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        tallennaData();
    }
}, false);

function tallennaData(){ 
    localStorage.setItem("data", lista.innerHTML); //tallentaa datan paikalliseen tallennustilaan
}
function näytäTehtävä(){
    lista.innerHTML = localStorage.getItem("data"); // Näyttää tallennetut tehtävät
}
näytäTehtävä();


