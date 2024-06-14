const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo");
const tempo = document.querySelectorAll(".contador");
 tempo[0].textContent = "ola"
 const tempoObjetivo1 = new Date(22);
 const tempoObjetivo2 = new Date(08);
 const tempoObjetivo3 = new Date(2024);
 const tempoObjetivo4 = new Date(11);
 const tempoObjetivo5 = new Date(10);
 const agora = new Date();
 tempo[1].textContent = agora
//console.log(botoes);
for(let i = 0; 1 < botoes.length ; i++){
    botoes[i].onclick = function() {
        for (j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            conteudo[j].classList.remove("ativo")
        }
        botoes[i].classList.add("ativo")
        conteudo[i].classList.add("ativo")
    }
}
