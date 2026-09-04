function abrirModal() {
document.getElementById("modal").style.display = "block";
}

function fecharModal() {
document.getElementById("modal").style.display = "none";
}

function abrirMenu() {

var menu = document.getElementById("menu");

menu.classList.toggle("ativo");


}

function filtrar(categoria) {

var cards = document.querySelectorAll(".projeto");

for (var i = 0; i < cards.length; i++) {

    if (categoria == "todos") {

        cards[i].style.display = "block";

    } else if (cards[i].classList.contains(categoria)) {

        cards[i].style.display = "block";

    } else {

        cards[i].style.display = "none";

    }

}


}

function abrirPergunta(numero) {

var resposta = document.getElementById("resposta" + numero);

if (resposta.style.display == "block") {

    resposta.style.display = "none";

} else {

    resposta.style.display = "block";

}


}