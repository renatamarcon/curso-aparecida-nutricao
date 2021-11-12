var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeout");
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode; // TR = paciente = remover 
    setTimeout(function() {
        paiDoAlvo.remove(); 
    }, 500);
    
});