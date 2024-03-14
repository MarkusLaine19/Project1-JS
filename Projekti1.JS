const syottobox = document.getElementById("syottoboxi")
const lista = document.getElementById("lista-sailio")
function addTask(){
    if(syottobox.value === ''){
        alert("Tyhjästä on paha nyhjästä. Kirjoita jotain.");
        syottobox.classList.add("virhe");
    }
    else{
        syottobox.classList.remove("virhe");
        let li = document.createElement("li");
        li.innerHTML = syottobox.value;
        lista.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    syottobox.value = "";
    tallennaData();
}

lista.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("tarkistettu");
        tallennaData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        tallennaData();
    }
}, false);

function tallennaData(){
    localStorage.setItem("data", lista.innerHTML);
}
function näytäTehtävä(){
    lista.innerHTML = localStorage.getItem("data");
}
näytäTehtävä();


