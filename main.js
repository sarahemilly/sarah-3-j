const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo")
const tempo = document.querySelectorAll(".contador")
tempo[0].textContent = "hello,tudo bem?"
const tempoObjetivo1 = new Date(2024,7,13,20);
const tempoObjetivo2 = new Date(05);
const tempoObjetivo3 = new Date(2006);
const tempoObjetivo4 = new Date(10);
const tempoObjetivo5 = new Date(09);
const agora = new Date();
tempo[0].textContent = tempoObjetivo1-agora
tempo[1].textContent = tempoObjetivo1
let segundos;
let minutos;
let horas;
let dias;
segundos= (tempoObjetivo1-agora)/1000
minutos= segundos/60
horas= minutos/60
dias= horas/24

console.log(botoes);
for(let i = 0; i < botoes.length ; i++){
    botoes[i].onclick = function() {
        for (j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            conteudo[j].classList.remove("ativo")
        }
        botoes[i].classList.add("ativo")
        conteudo[i].classList.add("ativo")
    }
}
